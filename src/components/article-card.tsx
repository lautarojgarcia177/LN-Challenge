interface ArticleCardProps {
  imageUrl?: string;
  title: string;
  date: string;
  subtitle?: string;
}

export default function ArticleCard({
  imageUrl,
  title,
  date,
  subtitle,
}: ArticleCardProps) {
  return (
    <article className={`mod-caja-nota w-100-mobile`}>
      <section className="cont-figure">
        <a href="" className="figure">
          <picture className="content-pic picture">
            <img
              src={imageUrl || "/images/placeholder.webp"}
              alt=""
              className="content-img"
            />
          </picture>
        </a>
      </section>
      <div className={"mod-caja-nota__descrip"}>
        <h2 className="com-title-acu">
          <a href="">
            <b>{title}.</b>&nbsp;{subtitle}
          </a>
        </h2>
        <h4 className="com-date">{date}</h4>
      </div>
    </article>
  );
}
