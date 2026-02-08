import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ParentHandbookAccordion() {
  const sections = [
    {
      id: 'overview',
      title: 'Program Overview',
      content: 'A short overview of how the preschool operates, including schedule, group size, and program structure. This section explains the guiding principles of play-based, outdoor, and garden-centered learning.',
    },
    {
      id: 'philosophy',
      title: 'Educational Philosophy',
      content: 'A summary of the program\'s approach to developmentally appropriate practice, child-led exploration, and the role of nature and community in daily learning.',
    },
    {
      id: 'routine',
      title: 'Daily Routine',
      content: 'A simple outline of the typical daily flow, including outdoor exploration, circle time, garden projects, snack, and creative play.',
    },
    {
      id: 'health',
      title: 'Health and Safety',
      content: 'Key policies related to health practices, handwashing, illness exclusion, outdoor safety, and emergency procedures.',
    },
    {
      id: 'guidance',
      title: 'Guidance and Behavior Support',
      content: 'A description of respectful, developmentally appropriate behavior support practices focused on modeling, redirection, and co-regulation.',
    },
    {
      id: 'emergency',
      title: 'Emergency Preparedness',
      content: 'Brief information on emergency plans, drills, and communication methods in case of an incident.',
    },
    {
      id: 'family',
      title: 'Family Rights and Responsibilities',
      content: 'A summary of parent communication expectations, required forms, and family involvement options.',
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {sections.map((section) => (
        <AccordionItem key={section.id} value={section.id}>
          <AccordionTrigger className="text-left">{section.title}</AccordionTrigger>
          <AccordionContent>
            <p className="text-foreground leading-relaxed">{section.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
