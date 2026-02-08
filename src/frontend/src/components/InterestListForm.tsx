import { useState } from 'react';
import { useActor } from '@/hooks/useActor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function InterestListForm() {
  const { actor } = useActor();
  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    email: '',
    desiredStartYear: '2027',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Client-side validation
    if (!formData.parentName.trim()) {
      setStatus('error');
      setErrorMessage('Please enter parent name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const childAge = parseInt(formData.childAge);
    if (isNaN(childAge) || childAge < 0 || childAge > 10) {
      setStatus('error');
      setErrorMessage('Please enter a valid child age (0-10).');
      return;
    }

    const startYear = parseInt(formData.desiredStartYear);
    if (isNaN(startYear) || startYear < 2027) {
      setStatus('error');
      setErrorMessage('Please enter a valid start year (2027 or later).');
      return;
    }

    try {
      if (!actor) {
        throw new Error('Unable to connect to the service. Please try again.');
      }

      await actor.createEntry(
        formData.parentName.trim(),
        childAge,
        formData.email.trim(),
        startYear
      );

      setStatus('success');
      setFormData({
        parentName: '',
        childAge: '',
        email: '',
        desiredStartYear: '2027',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'An error occurred. Please try again.'
      );
    }
  };

  return (
    <div className="max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="parentName">Parent Name</Label>
          <Input
            id="parentName"
            type="text"
            value={formData.parentName}
            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            disabled={status === 'submitting'}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="childAge">Child Age</Label>
          <Input
            id="childAge"
            type="number"
            min="0"
            max="10"
            value={formData.childAge}
            onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
            disabled={status === 'submitting'}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            disabled={status === 'submitting'}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="desiredStartYear">Desired Start Year</Label>
          <Input
            id="desiredStartYear"
            type="number"
            min="2027"
            value={formData.desiredStartYear}
            onChange={(e) => setFormData({ ...formData, desiredStartYear: e.target.value })}
            disabled={status === 'submitting'}
            required
          />
        </div>

        {status === 'success' && (
          <Alert className="bg-accent border-accent">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription>
              Thank you for your interest. We have received your submission and will be in touch.
            </AlertDescription>
          </Alert>
        )}

        {status === 'error' && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <Button type="submit" size="lg" disabled={status === 'submitting'} className="w-full sm:w-auto">
          {status === 'submitting' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Interest Form'
          )}
        </Button>
      </form>
    </div>
  );
}
