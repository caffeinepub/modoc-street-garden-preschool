export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-primary mb-8">About</h1>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Program Philosophy</h2>
          <p className="text-foreground leading-relaxed">
            The program is rooted in play-based learning, where children explore at their own pace and follow 
            their natural curiosity. Outdoor spaces and the garden serve as extensions of the classroom. Learning 
            is guided by developmentally appropriate practice and respectful, child-centered teaching.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Garden Preschool Model</h2>
          <p className="text-foreground leading-relaxed">
            The garden is part of the daily classroom experience. Children plant, observe, and care for living 
            things throughout the seasons. Learning follows natural rhythms and supports children's understanding 
            of how the environment changes over time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Language and Communication</h2>
          <p className="text-foreground leading-relaxed">
            Children experience both English and Spanish through songs, stories, routines, and conversation. 
            There is no pressure for specific language outcomes or testing. Language learning is integrated 
            into daily life.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Program Leadership</h2>
          <p className="text-foreground leading-relaxed">
            Modoc Street Garden Preschool is founded and directed by Sara Larson, an experienced early childhood 
            educator. The program builds on the foundation of Modoc Street Playcare, with continued emphasis on 
            nature, inclusion, and play-based learning.
          </p>
        </section>
      </div>
    </div>
  );
}
