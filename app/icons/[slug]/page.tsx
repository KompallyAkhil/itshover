import { Metadata } from "next";
import { notFound } from "next/navigation";
import IconDetailContent from "./icon-detail-content";
import { getIconsContent } from "@/actions/get-icons-content";
import fs from "fs";
import path from "path";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const indexPath = path.join(process.cwd(), "icons", "index.ts");
  const names: string[] = [];

  try {
    const content = fs.readFileSync(indexPath, "utf-8");
    const namePattern = /name:\s*["']([^"']+)["']/g;
    let match;

    while ((match = namePattern.exec(content)) !== null) {
      names.push(match[1]);
    }
  } catch (error) {
    console.error("Error reading or parsing icons/index.ts:", error);
    throw new Error(
      "Failed to generate static params: icons/index.ts is missing or malformed",
    );
  }

  return [...new Set(names)].map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug} animated icon | Its Hover`,
    description: `Motion-first animated ${slug} icon that moves with intent.`,
  };
}

export default async function IconDetailPage({ params }: Props) {
  const { slug } = await params;
  let code = "";

  try {
    code = await getIconsContent(slug);
    if (!code) {
      notFound();
    }
  } catch {
    notFound();
  }

  return <IconDetailContent slug={slug} code={code} />;
}
