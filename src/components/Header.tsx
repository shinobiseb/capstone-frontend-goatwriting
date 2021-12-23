import { Link } from "react-router-dom"


export const Header = () => {
    return (
    <nav className="nav">
      <Link to="/">
        <h1>Goatwriting</h1>
      </Link>
    </nav>
    )
}