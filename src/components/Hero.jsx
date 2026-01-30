import logoImage from "../assets/Logo-DImadeiras.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <span className="badge reveal">Desde 2004</span>

          <h2 className="hero-title reveal reveal-delay-1">
            Madeira Bruta com <span className="highlight">Tradição</span>
          </h2>

          <p className="hero-description reveal reveal-delay-2">
            Há mais de 20 anos no mercado, trabalhamos exclusivamente com madeira de verdade,
            oferecendo portas, estruturas e projetos sob medida com confiança e durabilidade.
          </p>

          <p className="hero-subtitle reveal reveal-delay-2">
            DImadeiras | Marcenaria & Portas 🚪<br />
            Especialistas em Portas e Kits Porta Pronta.<br />
            🪵 Transformando madeira em elegância para sua obra.
          </p>

          <div className="button-group reveal reveal-delay-3">
            <a 
              href="https://wa.me/5561996661351?text=Olá!%20Estou%20interessado%20nos%20serviços%20da%20Di%20Madeiras.%20Poderia%20me%20passar%20mais%20informações?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="https://www.instagram.com/dimadeiras/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Ver Projetos
            </a>
          </div>
        </div>

        <div className="logo-container reveal reveal-delay-2">
          <div className="logo-wrapper">
            <div className="logo-glow logo-pulse"></div>
            <img 
              src={logoImage} 
              alt="Di Madeiras Logo" 
              className="logo-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;