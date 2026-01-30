import { useEffect, useState } from "react";
import logoImage from "./assets/Logo-DImadeiras.png";

// Importar todas as imagens da galeria
import imagem1 from "./assets/imagem1.jpeg";
import imagem2 from "./assets/imagem2.jpeg";
import imagem3 from "./assets/imagem3.jpeg";
import imagem4 from "./assets/imagem4.jpeg";
import imagem5 from "./assets/imagem5.jpeg";
import imagem6 from "./assets/imagem6.jpeg";
import imagem7 from "./assets/imagem7.jpeg";
import imagem8 from "./assets/imagem8.jpeg";
import imagem9 from "./assets/imagem9.jpeg";
import imagem10 from "./assets/imagem10.jpeg";
import imagem11 from "./assets/imagem11.jpeg";
import imagem12 from "./assets/imagem12.jpeg";
import imagem13 from "./assets/imagem13.jpeg";
import imagem14 from "./assets/imagem14.jpeg";
import imagem15 from "./assets/imagem15.jpeg";
import imagem16 from "./assets/imagem16.jpeg";
import imagem17 from "./assets/imagem17.jpeg";
import imagem18 from "./assets/imagem18.jpeg";
import imagem20 from "./assets/imagem20.jpeg";
import imagem21 from "./assets/imagem21.jpeg";
import imagem22 from "./assets/imagem22.jpeg";
import imagem23 from "./assets/imagem23.jpeg";
import imagem24 from "./assets/imagem24.jpeg";
import imagem25 from "./assets/imagem25.jpeg";
import imagem26 from "./assets/imagem26.jpeg";
import imagem27 from "./assets/imagem27.jpeg";
import imagem28 from "./assets/imagem28.jpeg";
import imagem29 from "./assets/imagem29.jpeg";
import imagem30 from "./assets/imagem30.jpeg";
import imagem31 from "./assets/imagem31.jpeg";
import imagem32 from "./assets/imagem32.jpeg";
import imagem33 from "./assets/imagem33.jpeg";
import imagem34 from "./assets/imagem34.jpeg";
import imagem35 from "./assets/imagem35.jpeg";
import imagem36 from "./assets/imagem36.jpeg";
import imagem37 from "./assets/imagem37.jpeg";
import imagem38 from "./assets/imagem38.jpeg";

const galleryImages = [
  imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7,
  imagem8, imagem9, imagem10, imagem11, imagem12, imagem13, imagem14,
  imagem15, imagem16, imagem17, imagem18, imagem20, imagem21,
  imagem22, imagem23, imagem24, imagem25, imagem26, imagem27, imagem28,
  imagem29, imagem30, imagem31, imagem32, imagem33, imagem34, imagem35,
  imagem36, imagem37, imagem38
];

const testimonials = [
  {
    name: "Carlos Silva",
    date: "2024-11-15",
    rating: 5,
    comment: "Excelente trabalho! Portas de qualidade superior e instalação impecável. Recomendo!"
  },
  {
    name: "Maria Santos",
    date: "2024-10-28",
    rating: 5,
    comment: "Profissionais muito competentes. Fizeram minha porta sob medida e ficou perfeita!"
  },
  {
    name: "João Oliveira",
    date: "2024-10-12",
    rating: 5,
    comment: "Melhor marcenaria da região! Atendimento excelente e produto de primeira."
  },
  {
    name: "Ana Paula",
    date: "2024-09-30",
    rating: 5,
    comment: "Muito satisfeita com o deck que fizeram. Madeira de qualidade e acabamento perfeito."
  },
  {
    name: "Roberto Lima",
    date: "2024-09-18",
    rating: 5,
    comment: "Reformaram minhas portas antigas e ficaram como novas. Serviço nota 10!"
  },
  {
    name: "Fernanda Costa",
    date: "2024-08-25",
    rating: 5,
    comment: "Pergolado ficou lindo! Equipe pontual e muito profissional. Super recomendo!"
  },
  {
    name: "Paulo Henrique",
    date: "2024-08-10",
    rating: 5,
    comment: "Comprei kit porta pronta e a instalação foi rápida. Produto excelente!"
  },
  {
    name: "Juliana Alves",
    date: "2024-07-22",
    rating: 5,
    comment: "Atendimento impecável desde o orçamento até a entrega. Madeira de verdade!"
  },
  {
    name: "Marcos Vieira",
    date: "2024-07-05",
    rating: 5,
    comment: "Fiz janelas e portas com eles. Qualidade incomparável! Vale cada centavo."
  },
  {
    name: "Luciana Rocha",
    date: "2024-06-18",
    rating: 5,
    comment: "Móveis sob medida lindos e resistentes. Empresa séria e de confiança!"
  },
  {
    name: "Ricardo Mendes",
    date: "2024-06-02",
    rating: 5,
    comment: "Trabalho artesanal de altíssima qualidade. Superou minhas expectativas!"
  },
  {
    name: "Patrícia Gomes",
    date: "2024-05-20",
    rating: 5,
    comment: "Há anos que trabalho com madeira de verdade. A Di Madeiras é referência!"
  }
];

function App() {
  const [currentImageSet, setCurrentImageSet] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const imagesPerSet = 6;
  const testimonialsPerView = 3;

  // Função para pegar imagens com loop circular
  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < imagesPerSet; i++) {
      const index = (currentImageSet * imagesPerSet + i) % galleryImages.length;
      images.push({
        src: galleryImages[index],
        key: `${currentImageSet}-${i}-${index}`
      });
    }
    return images;
  };

  useEffect(() => {
    // Intersection Observer para animações ao scroll
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // Carrossel automático da galeria - muda a cada 10 segundos
    const interval = setInterval(() => {
      setCurrentImageSet((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Carrossel automático dos depoimentos - muda a cada 8 segundos
    const interval = setInterval(() => {
      setSlideDirection('next');
      setCurrentTestimonial((prev) => (prev + 1) % Math.ceil(testimonials.length / testimonialsPerView));
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonialsPerView]);

  const handleTestimonialChange = (index) => {
    if (index > currentTestimonial) {
      setSlideDirection('next');
    } else {
      setSlideDirection('prev');
    }
    setCurrentTestimonial(index);
  };

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

const differentials = [
  {
    number: "01",
    title: "Qualidade Selecionada",
    description: "Trabalhamos com madeira selecionada desde a origem, garantindo resistência, durabilidade e excelente acabamento."
  },
  {
    number: "02",
    title: "Especialistas em Madeira",
    description: "Contamos com profissionais experientes que orientam você na escolha ideal para cada tipo de projeto."
  },
  {
    number: "03",
    title: "Confiança e Compromisso",
    description: "Compromisso com prazos, qualidade e atendimento transparente, do primeiro contato até a entrega final."
  }
];


  return (
    <div className="site-container">
      {/* Header */}
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

      {/* Hero Section */}
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
                href="https://wa.me/5561996661351?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20projeto%20em%20madeira." 
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

          {/* Logo Circular */}
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

      {/* Services Section */}
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

  {/* Testimonials + Differentials Section */}
<section className="testimonials-differentials-section">
  <div className="testimonials-differentials-content">

    {/* Testimonials */}
    <div className="testimonials-content">
      <div className="section-header reveal">
        <h3 className="section-title">O Que Nossos Clientes Dizem</h3>
        <div className="section-divider"></div>
      </div>

      <div className="testimonials-carousel-container reveal reveal-delay-1">
        <div
          className={`testimonials-grid slide-${slideDirection}`}
          key={currentTestimonial}
        >
          {testimonials
            .slice(
              currentTestimonial * testimonialsPerView,
              (currentTestimonial + 1) * testimonialsPerView
            )
            .map((testimonial, idx) => (
              <div key={`${currentTestimonial}-${idx}`} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-date">
                      {new Date(testimonial.date).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                </div>

                <div className="testimonial-rating">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>

                <p className="testimonial-comment">{testimonial.comment}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="testimonials-dots">
        {Array.from({
          length: Math.ceil(testimonials.length / testimonialsPerView),
        }).map((_, idx) => (
          <button
            key={idx}
            className={`testimonial-dot ${
              idx === currentTestimonial ? "active" : ""
            }`}
            onClick={() => handleTestimonialChange(idx)}
            aria-label={`Ir para depoimento ${idx + 1}`}
          />
        ))}
      </div>
    </div>

    {/* Differentials */}
    <div className="differentials-content">
      <div className="differentials-grid">
        {differentials.map((item, idx) => (
          <div
            key={idx}
            className={`differential-item reveal reveal-delay-${idx % 3}`}
          >
            <div className="differential-number">{item.number}</div>
            <h4 className="differential-title">{item.title}</h4>
            <p className="differential-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* Gallery Section */}
      <section id="galeria" className="gallery-section">
        <div className="gallery-content">
          <div className="section-header reveal">
            <h3 className="section-title">Galeria de Projetos</h3>
            <div className="section-divider"></div>
          </div>

          <div className="gallery-grid reveal reveal-delay-1">
            {getVisibleImages().map((image, idx) => (
              <div key={image.key} className="gallery-item">
                <img src={image.src} alt={`Projeto ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="localizacao" className="location-section">
        <div className="location-content reveal">
          <h3 className="section-title">Onde Estamos</h3>
          <div className="section-divider"></div>

          <p className="location-text">
            Chácaras Marajoara – Jardim Ingá Luziânia – GO<br />
            📍 Atendemos todo DF e Entorno, Cristalina-Go e região
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="about-section">
        <div className="about-content">
          <div className="section-header reveal">
            <h3 className="section-title">Nossa História</h3>
            <div className="section-divider"></div>
          </div>

          <div className="about-box reveal reveal-delay-1">
            <p className="about-text">
              A Di Madeiras nasceu do trabalho no campo e cresceu na cidade. Há mais de 20 anos
              em Luziânia – GO, construímos nosso nome com madeira de verdade, compromisso e
              experiência prática.
            </p>

            <p className="about-text">
              Somos especialistas em portas e estruturas em madeira bruta, com fabricação própria,
              instalação profissional e manutenção.
            </p>

            <p className="about-highlight">
              Não trabalhamos com MDF. Aqui é madeira de verdade.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact-section">
        <div className="contact-bg"></div>
        <div className="contact-overlay"></div>

        <div className="contact-content reveal">
          <h3 className="section-title">Fale Conosco</h3>
          <div className="section-divider"></div>

          <p className="contact-description reveal reveal-delay-1">
            Orçamentos, dúvidas ou parcerias. Atendimento direto e profissional.
          </p>

          <div className="button-group reveal reveal-delay-2">
            <a 
              href="https://wa.me/5561996661351?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp
            </a>
            <a 
              href="https://www.instagram.com/dimadeiras/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Instagram
            </a>
          </div>

          <p className="contact-phone reveal reveal-delay-3">
            📞 (61) 99666-1351
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Di Madeiras Marcenaria. Todos os direitos reservados.</p>
        <p className="developer-credit">
          Desenvolvido por:{' '}
          <a 
            href="https://www.instagram.com/liukensnoo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="developer-link"
          >
            Liuken Monteiro
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;