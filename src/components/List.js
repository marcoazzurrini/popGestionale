import React, { Component } from "react";
import Delete from "../img/delete.svg";
import Edit from "../img/edit.svg";

class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="list__label">
          <p className="list__label--item">Tipo</p>
          <p className="list__label--item">Usename</p>
          <p className="list__label--item">Password</p>
          <p className="list__label--item">Actions</p>
        </div>

        <div className="list__access">
          <p className="list__access--item">wordpress</p>
          <p className="list__access--item">admin</p>
          <p className="list__access--item">a54342t432</p>
          <div className="list__access--action">
            <img src={Delete} alt="delete" />
            <img src={Edit} alt="delete" />
          </div>
        </div>

        <div className="list__access">
          <p className="list__access--item">wordpress</p>
          <p className="list__access--item">admin</p>
          <p className="list__access--item">a54342t432</p>
          <div className="list__access--action">
            <img src={Delete} alt="delete" />
            <img src={Edit} alt="delete" />
          </div>
        </div>

        <div className="list__access">
          <p className="list__access--item">wordpress</p>
          <p className="list__access--item">admin</p>
          <p className="list__access--item">a54342t432</p>
          <div className="list__access--action">
            <img src={Delete} alt="delete" />
            <img src={Edit} alt="delete" />
          </div>
        </div>

        <div className="list__access">
          <p className="list__access--item">wordpress</p>
          <p className="list__access--item">admin</p>
          <p className="list__access--item">a54342t432</p>
          <div className="list__access--action">
            <img src={Delete} alt="delete" />
            <img src={Edit} alt="delete" />
          </div>
        </div>

        <div className="list__access">
          <p className="list__access--item">wordpress</p>
          <p className="list__access--item">admin</p>
          <p className="list__access--item">a54342t432</p>
          <div className="list__access--action">
            <img src={Delete} alt="delete" />
            <img src={Edit} alt="delete" />
          </div>
        </div>
      </div>
    );
  }
}

export default List;
