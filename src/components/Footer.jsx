function Footer() {
  return (
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
  );
}

export default Footer;