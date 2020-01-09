import React, { Component } from "react";

class NewAccess extends Component {
  render() {
    return (
      <div className="newAccess">
        <div className="newAccess__newAccess">
          <label htmlFor="newAccess-name">
            <h1 className="newAccess__title">
              <span role="img" aria-label="search">
                📁
              </span>
              Nuovo accesso
            </h1>
          </label>
          <input
            placeholder="Nome sito"
            type="text"
            id="newAccess-name"
            className="newAccess__input"
          />
          <input
            placeholder="Nome sito"
            type="text"
            id="newAccess-type"
            className="newAccess__input"
          />
          <input
            placeholder="Nome sito"
            type="text"
            id="newAccess-user"
            className="newAccess__input"
          />
          <input
            placeholder="Nome sito"
            type="text"
            id="newAccess-pass"
            className="newAccess__input"
          />
          <div className="btn btn-primary btn-lg">
            <p>
              Aggiungi <span role="img"></span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewAccess;
