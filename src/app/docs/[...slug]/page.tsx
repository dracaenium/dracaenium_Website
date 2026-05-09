import { notFound } from "next/navigation";
import DocPageClient from "./DocPageClient";
import { getAllDocSlugs, getDocContent } from "@/lib/docs";

export const dynamicParams = false;

type DocPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export function generateStaticParams() {
  return getAllDocSlugs();
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const content = getDocContent(slug);

  if (!content) {
    notFound();
  }

  return <DocPageClient content={content} slug={slug} />;
}
