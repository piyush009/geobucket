import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/content/posts";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} subtitle={post.excerpt}>
        <p className="mt-6 text-sm text-cream/50">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readMinutes} min read
        </p>
      </PageHero>

      <article className="bg-cream py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-6 text-lg leading-relaxed text-navy/80">
            {post.body.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 border-t border-navy/10 pt-10">
            <Button href="/contact">Talk to us about this</Button>
            <Link
              href="/insights"
              className="inline-flex items-center text-sm font-medium text-teal hover:underline"
            >
              ← All insights
            </Link>
          </div>
        </Container>
      </article>
    </>
  );
}
