import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/posts";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Thought leadership from GeoBucket on decision science, AI, blockchain, and infrastructure.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas that sharpen judgment"
        subtitle="Essays and field notes from building decision systems and production software."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.05}>
              <Link
                href={`/insights/${post.slug}`}
                className="group flex h-full flex-col border border-navy/10 p-7 transition-colors hover:border-teal"
              >
                <div className="flex items-center gap-3 text-xs text-navy/45">
                  <span className="font-semibold uppercase tracking-wider text-teal">
                    {post.category}
                  </span>
                  <span>·</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-3 font-display text-2xl text-navy group-hover:text-teal">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-navy/65">{post.excerpt}</p>
                <span className="mt-5 text-xs text-navy/40">
                  {post.readMinutes} min read
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
