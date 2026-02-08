import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail } from 'lucide-react';

export default function LittleSproutsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Title and Subtitle */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Little Sprouts Preschool Garden Club
        </h1>
        <p className="text-xl text-muted-foreground italic">
          A Saturday Outdoor Enrichment Program for Preschoolers
        </p>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto text-center">
          Little Sprouts is a small, outdoor enrichment program for preschoolers who learn best through hands-on exploration. 
          Each Saturday, children dig, plant, create, play, and enjoy the natural world in a calm, nurturing setting. 
          Through gardening, crafts, movement, and nature walks, children build confidence, curiosity, early science skills, 
          and a deeper connection to the outdoors.
        </p>
      </section>

      <Separator className="my-12" />

      {/* Key Details */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-foreground">Program Details</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-muted rounded-lg">
            <p className="text-sm font-medium text-muted-foreground mb-2">Ages</p>
            <p className="text-lg font-semibold text-foreground">2½–5</p>
            <p className="text-sm text-muted-foreground">(potty trained)</p>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <p className="text-sm font-medium text-muted-foreground mb-2">When</p>
            <p className="text-lg font-semibold text-foreground">April–June</p>
            <p className="text-sm text-muted-foreground">Saturdays</p>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <p className="text-sm font-medium text-muted-foreground mb-2">Time</p>
            <p className="text-lg font-semibold text-foreground">10:00 AM – 2:00 PM</p>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <p className="text-sm font-medium text-muted-foreground mb-2">Cost</p>
            <p className="text-lg font-semibold text-foreground">$30 per child, per day</p>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* What We Do */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-foreground">What We Do</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-foreground leading-relaxed mb-6">
            Children participate in a balanced mix of guided activities and free exploration, including:
          </p>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Hands-on gardening (planting, harvesting, soil and worms, pollinators)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Preschool-age seasonal crafts</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Outdoor games and movement</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Storytime and garden journaling</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Picnic lunch outdoors (packed from home)</span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed mt-6">
            Activities take place in outdoor settings and include planned, supervised trips to nearby parks and green spaces 
            as part of the learning experience.
          </p>
        </div>
      </section>

      {/* Daily Rhythm */}
      <section className="mb-12 bg-muted p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-foreground">Daily Rhythm</h2>
        <p className="text-foreground leading-relaxed mb-6 text-center max-w-2xl mx-auto">
          Each day follows a gentle, predictable flow:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="p-4 bg-background rounded-md">
            <p className="text-foreground">Welcome and outdoor exploration</p>
          </div>
          <div className="p-4 bg-background rounded-md">
            <p className="text-foreground">Gardening lesson or nature activity</p>
          </div>
          <div className="p-4 bg-background rounded-md">
            <p className="text-foreground">Creative project or craft</p>
          </div>
          <div className="p-4 bg-background rounded-md">
            <p className="text-foreground">Picnic lunch outside</p>
          </div>
          <div className="p-4 bg-background rounded-md">
            <p className="text-foreground">Storytime or quiet reflection</p>
          </div>
          <div className="p-4 bg-background rounded-md">
            <p className="text-foreground">Free play and group games</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-6 text-center">
          Activities are adapted to the season, weather, and children's interests.
        </p>
      </section>

      {/* Learning Through Nature */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-foreground">Learning Through Nature</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-foreground leading-relaxed mb-6">
            Through Garden Club, children:
          </p>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Learn where food comes from</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Explore soil, plants, insects, and natural systems</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Build early science and nature vocabulary</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Strengthen fine-motor skills and coordination</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Practice cooperation, independence, and confidence</span>
            </li>
          </ul>
          <p className="text-foreground leading-relaxed mt-6 italic">
            Our approach is inspired by nature-based learning, Montessori, and Reggio Emilia principles.
          </p>
        </div>
      </section>

      <Separator className="my-12" />

      {/* What to Bring */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-foreground">What to Bring</h2>
        <div className="max-w-2xl mx-auto bg-accent p-8 rounded-lg">
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Packed lunch and water bottle</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Weather-appropriate outdoor clothing</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Comfortable shoes for walking and outdoor play</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-primary">•</span>
              <span>Sun hat and sunscreen as needed</span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-6 text-center">
            All gardening and activity materials are provided.
          </p>
        </div>
      </section>

      {/* Flyer Image */}
      <section className="mb-12 flex justify-center">
        <img
          src="/assets/gclittle-sprouts.dim_819x1024.png"
          alt="Little Sprouts Garden Club flyer showing a Saturday nature program for preschoolers ages 2½–5, April through June, Saturdays 10:00 AM to 2:00 PM"
          className="w-full max-w-md rounded-lg shadow-md"
        />
      </section>

      <Separator className="my-12" />

      {/* Registration */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-foreground">Registration</h2>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            To register your child for Little Sprouts Preschool Garden Club or to learn more about the program, 
            please contact Sara Larson directly.
          </p>
          <div className="space-y-2">
            <p className="text-foreground font-medium">Sara Larson</p>
            <p className="text-foreground">541-556-6694</p>
          </div>
          <a href="mailto:ssralarson@gmail.com">
            <Button size="lg" className="w-full sm:w-auto">
              <Mail className="mr-2 h-5 w-5" />
              Email Sara to Register
            </Button>
          </a>
        </div>
      </section>

      {/* Tagline */}
      <div className="text-center pt-6">
        <p className="text-2xl text-accent-foreground font-medium italic">
          Explore • Plant • Create • Grow
        </p>
      </div>
    </div>
  );
}
