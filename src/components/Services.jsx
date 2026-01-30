const services = [
  {
    title: "Venda e instalação de portas de madeira",
    description: "Portas de madeira maciça com instalação profissional. Trabalhamos com diversos modelos e acabamentos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="2" width="16" height="20" rx="2"/>
        <circle cx="16" cy="12" r="1" fill="currentColor"/>
        <line x1="4" y1="12" x2="20" y2="12"/>
      </svg>
    )
  },
  {
    title: "Fabricação de portas sob medida",
    description: "Projetos personalizados que atendem suas necessidades específicas. Do planejamento à entrega final.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h18v2H3z"/>
        <path d="M5 5l14 14M19 5L5 19"/>
        <line x1="3" y1="21" x2="21" y2="21" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: "Portais, janelas e esquadrias",
    description: "Esquadrias em madeira de lei para valorizar seu imóvel. Projetos robustos e duráveis.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="12" y1="3" x2="12" y2="21"/>
        <rect x="7" y="7" width="4" height="4" opacity="0.3" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: "Reforma e manutenção de portas",
    description: "Restauração e manutenção especializada. Devolvemos vida às suas portas antigas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  {
    title: "Decks e pergolados",
    description: "Transforme seu espaço externo com decks e pergolados em madeira tratada de alta qualidade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="6" width="20" height="2"/>
        <rect x="2" y="11" width="20" height="2"/>
        <rect x="2" y="16" width="20" height="2"/>
        <line x1="6" y1="4" x2="6" y2="20"/>
        <line x1="12" y1="4" x2="12" y2="20"/>
        <line x1="18" y1="4" x2="18" y2="20"/>
      </svg>
    )
  },
  {
    title: "Móveis em madeira maciça e estruturas",
    description: "Móveis artesanais e estruturas sob medida. Peças únicas que duram gerações.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21.42 8.82l-9-7a1 1 0 0 0-1.16 0l-9 7A1 1 0 0 0 2 9.5V21a1 1 0 0 0 1 1h6v-8h6v8h6a1 1 0 0 0 1-1V9.5a1 1 0 0 0-.58-.68z"/>
        <path d="M8 3L4 6M16 3l4 3" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  }
];

function Services() {
  return (
    <section id="servicos" className="services-section">
      <div className="services-bg"></div>
      <div className="services-overlay"></div>

      <div className="services-content">
        <div className="section-header reveal">
          <h3 className="section-title">Nossos Serviços</h3>
          <div className="section-divider"></div>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`service-card reveal reveal-delay-${idx % 3}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;