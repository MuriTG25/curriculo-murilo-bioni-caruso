import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const [tema, setTema] = useState(localStorage.getItem("tema") || "light");

  useEffect(() => {
    if (tema === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    localStorage.setItem("tema", tema);
  }, [tema]);

  function alternarTema() {
    setTema(tema === "dark" ? "light" : "dark");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      <Link className="navbar-brand" to="/">
        Murilo Bioni
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center" id="menu">
        <ul className="navbar-nav">

          <li className="nav-item">
            <NavLink className="nav-link" to="/">Início</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/motivacao">Motivação</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/trabalhos">Experiências</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/curriculo">Currículo</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/contato">Contato</NavLink>
          </li>

        </ul>
      </div>

      <button
        onClick={alternarTema}
        className="btn btn-outline-light ms-3"
      >
        {tema === "dark" ? "☀️" : "🌙"}
      </button>

    </nav>
  );
}

export default Navbar;