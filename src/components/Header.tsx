import { Link } from "react-router-dom"


export const Header = () => {
    return (
    <nav className="header">
      <Link to="/notes">
        <h1 className="title">Goatwriting</h1>
      </Link>
    </nav>
    )
}