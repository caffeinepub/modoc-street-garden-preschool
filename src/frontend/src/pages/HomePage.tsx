import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Little Sprouts Garden Club Section - Compact Intro */}
      <section className="mb-16 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <img
            src="/assets/generated/ls-grass-strip.dim_1800x220.png"
            alt=""
            className="absolute bottom-0 left-0 right-0 w-full h-auto object-cover"
            aria-hidden="true"
          />
          <img
            src="/assets/generated/ls-botanical-border.dim_1800x600.png"
            alt=""
            className="absolute top-0 left-0 right-0 w-full h-auto object-contain"
            aria-hidden="true"
          />
          <img
            src="/assets/generated/ls-earthworm.dim_256x256.png"
            alt=""
            className="absolute bottom-4 right-8 w-16 h-16 object-contain hidden md:block"
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Little Sprouts Garden Club
          </h1>
          <p className="text-lg text-muted-foreground italic mb-4">
            A Saturday Nature Program for Preschoolers
          </p>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="bg-background/90 backdrop-blur-sm p-5 rounded-lg shadow-sm">
              <div className="space-y-2 text-foreground text-sm">
                <p><span className="font-medium">Ages:</span> 2½–5 (potty trained)</p>
                <p><span className="font-medium">When:</span> April–June, Saturdays</p>
                <p><span className="font-medium">Time:</span> 10:00 AM – 2:00 PM</p>
                <p><span className="font-medium">Cost:</span> $30 per child, per day</p>
              </div>
            </div>

            <div className="bg-background/90 backdrop-blur-sm p-5 rounded-lg shadow-sm">
              <p className="text-foreground text-sm leading-relaxed mb-3">
                Hands-on gardening, nature walks, seasonal crafts, outdoor play, and learning through exploration.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                <span className="font-medium text-foreground">Contact:</span> Sara Larson • 541-556-6694
              </p>
              <Link to="/little-sprouts">
                <Button className="w-full" size="sm">
                  View Full Program Details
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/gclittle-sprouts.dim_819x1024.png"
              alt="Little Sprouts Garden Club flyer showing a Saturday nature program for preschoolers ages 2½–5, April through June, Saturdays 10:00 AM to 2:00 PM"
              className="w-full max-w-xs rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="relative z-10 text-center mt-6">
          <p className="text-base text-accent-foreground bg-accent/80 backdrop-blur-sm px-5 py-2 rounded-md inline-block">
            Explore • Plant • Create • Grow
          </p>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Preschool Opening Section */}
      <section className="text-center space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Modoc Street Garden Preschool
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            A nature-based, garden-centered preschool for children ages 3–5
          </p>
          <p className="text-lg text-foreground">
            <span className="font-medium">Springfield, Oregon</span> • Opening Fall 2027
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Program Overview</h3>
            <p className="text-foreground leading-relaxed">
              Modoc Street Garden Preschool is a small, intentional preschool program grounded in play-based, 
              outdoor, and garden-centered learning. Children explore at their own pace through developmentally 
              appropriate practice, with English and Spanish language exposure woven into daily life. The program 
              aligns with Oregon DELC requirements for recorded preschool programs.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Who This Program Is For</h3>
            <ul className="space-y-2 text-foreground list-disc list-inside">
              <li>Children ages 3–5</li>
              <li>Families seeking nature-based learning</li>
              <li>Families who value play, routine, and outdoor time</li>
              <li>Families looking for a calm, small-group preschool</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Daily Rhythm Snapshot</h3>
            <ul className="space-y-2 text-foreground list-disc list-inside">
              <li>Arrival and outdoor exploration</li>
              <li>Circle time and storytelling</li>
              <li>Garden work or project-based learning</li>
              <li>Snack and social time</li>
              <li>Creative play and closing circle</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link to="/program">
            <Button size="lg" className="w-full sm:w-auto">
              Learn About Our Program
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Join the 2027 Interest List
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
