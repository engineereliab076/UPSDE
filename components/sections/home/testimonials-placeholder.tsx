import { Quote } from "lucide-react";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeader } from "@/components/ui/section-header";

/**
 * Testimonials section architecture. No fabricated quotes — this renders an
 * honest empty state until real, consented stories are provided. The layout
 * can later be extended into a carousel of testimonial cards.
 */
export function TestimonialsPlaceholder() {
  return (
    <section className="section-pad bg-background">
      <div className="container-site">
        <SectionHeader
          eyebrow="Voices from the community"
          title="Stories and testimonials"
          align="center"
        />
        <div className="mx-auto max-w-2xl">
          <EmptyState
            icon={Quote}
            title="Stories coming soon"
            message="Community stories and testimonials will be published after receiving permission from participants."
          />
        </div>
      </div>
    </section>
  );
}
