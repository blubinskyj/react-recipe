import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className={"deep-purple darken-1"}>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Recipe
        </Link>
      </div>
    </nav>
  );
}
export { Header };
