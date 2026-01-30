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

function TestimonialsAndDifferentials({ 
  currentTestimonial, 
  slideDirection, 
  handleTestimonialChange,
  testimonialsPerView 
}) {
  return (
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
  );
}

export default TestimonialsAndDifferentials;