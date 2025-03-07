import { Article, TagCount } from "@/types";

export default function sumarizeTags(articles: Article[], amount = 10): TagCount[] {
  const tagCountMap = new Map<
    string,
    { slug: string; text: string; count: number }
  >();

  // Recorrer los artículos y extraer los tags
  articles.forEach((article) => {
    article.taxonomy?.tags?.forEach((tag) => {
      if (tagCountMap.has(tag.slug)) {
        tagCountMap.get(tag.slug)!.count += 1;
      } else {
        tagCountMap.set(tag.slug, { slug: tag.slug, text: tag.text, count: 1 });
      }
    });
  });

  // Convertir el mapa a un array y ordenar por cantidad descendente
  return Array.from(tagCountMap.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, amount);
}
