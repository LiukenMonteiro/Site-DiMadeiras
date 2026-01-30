import logoImage from "../assets/Logo-DImadeiras.png";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <a href="#" className="logo-header">
          <h1 className="logo">DI MADEIRAS</h1>
          <img src={logoImage} alt="Di Madeiras" className="logo-icon" />
        </a>

        <nav className="nav">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Galeria</a>
          <a href="#localizacao">Localização</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;