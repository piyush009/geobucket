import Link from "next/link";
import { posts } from "@/content/posts";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function InsightsTeaser() {
  const featured = posts.slice(0, 3);

  return (
    <Section
      eyebrow="Insights & thought leadership"
      title="Insights that drive innovation"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.06}>
            <Link
              href={`/insights/${post.slug}`}
              className="group flex h-full flex-col border border-navy/10 bg-white/40 p-6 transition-colors hover:border-teal"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                {post.category}
              </p>
              <h3 className="mt-3 font-display text-xl leading-snug text-navy group-hover:text-teal">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-navy/60">{post.excerpt}</p>
              <span className="mt-5 text-xs font-medium text-navy/45">
                {post.readMinutes} min read
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
      <div className="mt-10">
        <Button href="/insights" variant="secondary">
          View all insights
        </Button>
      </div>
    </Section>
  );
}
