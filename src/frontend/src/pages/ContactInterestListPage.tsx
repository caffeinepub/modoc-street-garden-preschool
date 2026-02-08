import InterestListForm from '@/components/InterestListForm';
import { Mail } from 'lucide-react';

export default function ContactInterestListPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-primary mb-8">Contact / Interest List</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Join the 2027 Interest List</h2>
          <p className="text-foreground leading-relaxed mb-6">
            Families are invited to join the interest list for the 2027 opening year. Submitting this form helps 
            us understand community interest and allows us to keep you informed as we prepare to open.
          </p>
          <InterestListForm />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
          <div className="bg-muted p-6 rounded-lg space-y-4">
            <div>
              <p className="text-lg font-semibold text-foreground">Modoc Street Garden Preschool</p>
              <p className="text-foreground">Springfield, Oregon</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <a
                href="mailto:info@modocstreetgardenpreschool.com"
                className="text-primary hover:underline"
              >
                Send us an email
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
