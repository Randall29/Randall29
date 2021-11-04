import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-info">
        <p className="footer-info__data">
          <span className="footer-info__develop">
            Desarrollado por Akurey.com
          </span>
          <span className="footer-info__separate"> | </span>
          <span className="footer-info__rigths">
            Todos los de derechos reservados.
          </span>
        </p>
        <a className="footer-info__terms" href="/#">
          Terminos y Condiciones
        </a>
      </div>
    );
  }
}

export default Footer;
