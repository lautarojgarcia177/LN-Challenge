import { Article } from "@/types";
import formatDateArgentina from "./format-date-argentina";
import { serverConfig } from "@/config/env.server";

export async function getArticles(): Promise<{ articles: Article[] }> {
  try {
    const response = await fetch(serverConfig.articlesUrl, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Error al obtener los articulos: ${response.status}, ${response.statusText}`
      );
    }

    const data: { articles: Article[] } = await response.json();

    return {
      articles: data.articles.map((article: Article) => ({
        ...article,
        display_date: formatDateArgentina(new Date(article.display_date)),
      })),
    };
  } catch (error) {
    console.error("Error al obtener los articulos:", error);
    return { articles: []};
  }
}
