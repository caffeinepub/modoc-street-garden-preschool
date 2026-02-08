export default function ProgramPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-primary mb-8">Program</h1>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Program Details</h2>
          <div className="space-y-2 text-foreground">
            <p><span className="font-medium">Ages:</span> 3–5 years (potty trained)</p>
            <p><span className="font-medium">Schedule:</span> Monday–Friday</p>
            <p><span className="font-medium">Program Type:</span> Recorded Preschool Program (Oregon DELC)</p>
            <p><span className="font-medium">Group Size:</span> Small group</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Curriculum Overview</h2>
          <p className="text-foreground leading-relaxed">
            The curriculum is emergent and responsive to children's interests. Learning supports social-emotional, 
            cognitive, language, and motor development through a play-based, nature-focused approach.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Outdoor and Garden Learning</h2>
          <p className="text-foreground leading-relaxed">
            Children spend time outdoors each day, with weather-appropriate play and nature exploration. Garden 
            activities offer hands-on experiences with plants, seasons, and caretaking.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Inclusion and Equity</h2>
          <p className="text-foreground leading-relaxed">
            The program maintains an inclusive and welcoming environment for all families. It is ADA-compliant 
            and committed to anti-bias and anti-racist values.
          </p>
        </section>
      </div>
    </div>
  );
}
