const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-block center">
        <p className="footer__text">© My Company 2024</p>
        <p className="footer__text">
          Работает на{" "}
          <a
            className="footer__link"
            href="https://www.yiiframework.com/"
            target="_blank"
            rel="noreferrer"
          >
            Yii Framework
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
