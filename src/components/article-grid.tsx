"use client";
import ArticleCard from "./article-card";
import { useArticles } from "@/context/articles-context";

export default function ArticleGrid() {
  const { amountToDisplay, subtype7Articles } = useArticles();

  return (
    <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
      {subtype7Articles.slice(0, amountToDisplay).map((article, index) => (
        <div key={article._id}>
          {/* Insert mobile banner after every 3 articles */}
          {index > 0 && index % 3 === 0 && (
            <div
              key={`banner-${index}`}
              className="banner --small --mobile"
            ></div>
          )}

          <ArticleCard
            key={article._id}
            imageUrl={article.promo_items?.basic?.url}
            title={article.headlines?.basic}
            date={article.display_date}
            subtitle={article.promo_items?.basic?.subtitle}
          />
        </div>
      ))}
    </section>
  );
}
