import { useState } from "react";
import logoImage from "../assets/Logo-DImadeiras.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-content">
        <a href="#" className="logo-header">
          <h1 className="logo">DI MADEIRAS</h1>
          <img src={logoImage} alt="Di Madeiras" className="logo-icon" />
        </a>

        {/* Botão Hamburguer */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#galeria" onClick={closeMenu}>Galeria</a>
          <a href="#localizacao" onClick={closeMenu}>Localização</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
