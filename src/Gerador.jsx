import React from "react";
import "./App.css";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";

import ReactSwitch from "react-switch";

function App() {
  const [link, setLink] = React.useState("");
  const [qrcodeLink, setQrcodeLink] = React.useState("");

  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((atual) => (atual === "light" ? "dark" : "light"));
  };

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 2,
      },
      function (err, url) {
        setQrcodeLink(url);
      }
    );
  }

  function handleQrcode(event) {
    setLink(event.target.value);
    handleGenerate(event.target.value);
  }

  return (
    <diV className="card" id={theme}>
      <div className="container">
        <h1>Gerador de QRCode</h1>

        <QRCode value={link} />

        <input
          className="input"
          placeholder="Digite seu link..."
          value={link}
          onChange={(event) => handleQrcode(event)}
        />

        <a href={qrcodeLink} download={`qrcode.png`}>
          Baixar QRCode
        </a>
        <br />
        <br />
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
    </diV>
  );
}

export default App;
