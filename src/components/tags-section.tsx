"use client";

import { useArticles } from "@/context/articles-context";
import sumarizeTags from "@/lib/sumarize-tags";
import { TagCount } from "@/types";

export default function TagsSection() {
  const { articles = [] } = useArticles();
  // Procesar los tags
  const summarizedTags: TagCount[] = sumarizeTags(articles, 10);

  return (
    <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
      {summarizedTags.map((tagCount, index) => (
        <a key={index} href={`/tema/${tagCount.slug}`}>
          {tagCount.text}
        </a>
      ))}
    </div>
  );
}
