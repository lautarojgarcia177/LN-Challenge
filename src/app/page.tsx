import LoadMoreButton from "@/components/load-more-button";
import PageTitle from "@/components/page-title";
import TagsSection from "@/components/tags-section";
import SidebarLayout from "./sidebar-layout";
import ArticleGrid from "@/components/article-grid";
import checkRequiredEnvVars from "@/lib/validate-env";
import { ArticlesProvider } from "@/context/articles-context";
import { getArticles } from "@/lib/fetch-data-API";
import TopBanner from "@/components/banners/top-banner";
import StickyBanner from "@/components/banners/sticky-banner";
import ModRanking from "@/components/mod-ranking";

export default async function HomePage() {
  // Verificar que las variables de entorno esten cargadas
  checkRequiredEnvVars();

  // Carga inicial de los datos desde el servidor
  const { articles = [] } = await getArticles();

  return (
    <main>
      <TopBanner />
      <StickyBanner />
      {/* Se proveen los datos utilizando Context */}
      <ArticlesProvider articles={articles} initialAmountToDisplay={9}>
        <SidebarLayout
          main={
            <>
              <div className="row">
                <PageTitle
                  title="Acumulado Grilla"
                  className="com-titleWithfollow hlp-marginBottom-15"
                />
              </div>
              <div className="row">
                <TagsSection />
              </div>
              <ArticleGrid />
              <section className="row">
                <div className="col-12 hlp-text-center hlp-margintop-40">
                  <LoadMoreButton />
                </div>
              </section>
            </>
          }
          aside={
            <>
              <div className="banner --desktop --large"></div>
              <div className="com-ranking hlp-none hlp-tablet-none">
                <h2 className="com-title-section-m">Recetas más leídas</h2>
                <ModRanking />
              </div>
              <div className="banner --desktop --large"></div>
            </>
          }
        />
      </ArticlesProvider>
    </main>
  );
}
