export default function TuitionPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-primary mb-8">Tuition</h1>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Tuition Overview</h2>
          <p className="text-foreground leading-relaxed">
            Tuition is billed monthly for school-day preschool programming. Tuition remains consistent regardless 
            of absences to support predictable staffing and program operations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Tuition Rates (Projected)</h2>
          <div className="space-y-4">
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-lg font-semibold text-foreground mb-2">Full-Time Preschool (5 days/week)</p>
              <p className="text-3xl font-bold text-primary">$1,200 per month</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-lg font-semibold text-foreground mb-2">Part-Time Preschool (3 days/week)</p>
              <p className="text-3xl font-bold text-primary">$850 per month</p>
            </div>
          </div>
          <p className="text-foreground mt-4 italic">
            Sibling discounts are available when applicable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">What Tuition Includes</h2>
          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li>Garden-based curriculum</li>
            <li>Daily outdoor learning</li>
            <li>Bilingual exposure</li>
            <li>Materials and supplies</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
