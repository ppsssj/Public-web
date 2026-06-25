export default function ButtonLink({ href, children, className = "", target }) {
  const label =
    typeof children === "string" && (children.includes("자세히") || children.includes("?먯") || children.includes("蹂"))
      ? "Learn more"
      : children;

  return (
    <a className={`button-link ${className}`} href={href} target={target} rel={target ? "noreferrer" : undefined}>
      <span className="button-arrow" aria-hidden="true" />
      <span className="button-text">{label}</span>
    </a>
  );
}
