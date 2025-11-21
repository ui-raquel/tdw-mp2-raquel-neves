import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/films/List">Films</Link>
      <Link to="/StudioGhibli">Studio Ghibli</Link>
      <Link to="/about">About</Link>
      <Link to="/species">Species</Link>
      <Link to="/characters">Characters</Link>
    </nav>
  );
}

export default Navigation;
