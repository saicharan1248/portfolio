const Footer = () => {
  return (
    <footer className=" text-black py-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mt-2">© 2025 Saicharan. All rights reserved.</p>
        <a
          className="footer__link text-black hover:underline"
          onClick={() =>
            window.open("mailto:example@gmail.com", "_blank")
          }
        >
          saicharanpagidi8999
        </a>
        <ul className="social-list flex justify-center mt-4 space-x-6">
          <li className="social-list__item">
            <a
              className="social-list__link text-white text-2xl hover:text-yellow-400"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link text-white text-2xl hover:text-yellow-400"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
