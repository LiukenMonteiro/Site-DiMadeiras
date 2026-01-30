function Contact() {
  return (
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
            href="https://wa.me/5561996661351?text=Olá!%20Estou%20interessado%20nos%20serviços%20da%20Di%20Madeiras.%20Poderia%20me%20passar%20mais%20informações?" 
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
  );
}

export default Contact;