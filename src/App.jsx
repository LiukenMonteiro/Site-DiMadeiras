import { useEffect, useState } from "react";

// Importar componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TestimonialsAndDifferentials from "./components/TestimonialsAndDifferentials";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Importar CSS
import "./index.css";

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

  // Intersection Observer para animações ao scroll
  useEffect(() => {
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
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  // Carrossel automático da galeria
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageSet((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Carrossel automático dos depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('next');
      setCurrentTestimonial((prev) => (prev + 1) % 4); // 12 depoimentos / 3 por vez = 4 páginas
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonialsPerView]);

  // Handler para mudança manual dos depoimentos
  const handleTestimonialChange = (index) => {
    if (index > currentTestimonial) {
      setSlideDirection('next');
    } else {
      setSlideDirection('prev');
    }
    setCurrentTestimonial(index);
  };

  return (
    <div className="site-container">
      <Header />
      <Hero />
      <Services />
      <TestimonialsAndDifferentials 
        currentTestimonial={currentTestimonial}
        slideDirection={slideDirection}
        handleTestimonialChange={handleTestimonialChange}
        testimonialsPerView={testimonialsPerView}
      />
      <Gallery getVisibleImages={getVisibleImages} />
      <Location />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;