import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import NoteCard from '../components/NoteCard';
import notes from '../data/notes.json';

export default function Notes() {
  return (
    <>
      <SEO title="Notes" description="Technical notes, reading summaries, and research documentation." />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-16 sm:pb-20">
        <AnimatedSection>
          <SectionHeading
            title="Notes"
            subtitle="Technical notes, reading summaries, and research documentation."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note, i) => (
            <AnimatedSection key={note.id} delay={i * 0.04}>
              <NoteCard note={note} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
