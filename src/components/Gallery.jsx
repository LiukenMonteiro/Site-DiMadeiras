function Gallery({ getVisibleImages }) {
  return (
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
  );
}

export default Gallery;