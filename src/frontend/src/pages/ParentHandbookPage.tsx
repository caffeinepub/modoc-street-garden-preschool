import { Button } from '@/components/ui/button';
import ParentHandbookAccordion from '@/components/ParentHandbookAccordion';
import { Download, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useState } from 'react';

export default function ParentHandbookPage() {
  const [pdfUnavailable, setPdfUnavailable] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if PDF exists by attempting to fetch it
    fetch('/Parent_Handbook_Modoc_Street_Garden_Preschool.pdf', { method: 'HEAD' })
      .then((response) => {
        if (!response.ok) {
          e.preventDefault();
          setPdfUnavailable(true);
        }
      })
      .catch(() => {
        e.preventDefault();
        setPdfUnavailable(true);
      });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-primary mb-8">Parent Handbook</h1>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Purpose</h2>
          <p className="text-foreground leading-relaxed mb-6">
            The Modoc Street Garden Preschool Parent Handbook outlines program philosophy, daily operations, 
            health and safety practices, and family responsibilities. The handbook aligns with Oregon Department 
            of Early Learning and Care (DELC) requirements for recorded preschool programs.
          </p>

          {pdfUnavailable ? (
            <Alert className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                The Parent Handbook PDF is currently unavailable. Please contact the program directly for a copy.
              </AlertDescription>
            </Alert>
          ) : (
            <a 
              href="/Parent_Handbook_Modoc_Street_Garden_Preschool.pdf" 
              download
              onClick={handleDownloadClick}
            >
              <Button size="lg" className="w-full sm:w-auto">
                <Download className="mr-2 h-5 w-5" />
                Download Parent Handbook (PDF)
              </Button>
            </a>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Handbook Sections</h2>
          <ParentHandbookAccordion />
        </section>

        <section className="bg-muted p-6 rounded-lg">
          <p className="text-sm text-foreground leading-relaxed">
            Modoc Street Garden Preschool is a recorded preschool program operating in accordance with Oregon 
            Department of Early Learning and Care (DELC) requirements. Families may contact DELC or the Office 
            of Child Care with questions or concerns.
          </p>
        </section>
      </div>
    </div>
  );
}
