export default function PageTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={className || "com-titleWithfollow hlp-marginBottom-15"}>
      <h1 className="com-title-section-xl hlp-marginBottom-40">{title}</h1>
    </div>
  );
}
