import React from "react";
import css from "./header.module.css";
const m = new Date();

const Header = props => {
  return (
    <header className={css.header}>
      <div className={css.block}>
        <div
          onClick={() => props.changeSideBarVisible()}
          className={css.boxBtn}
        >
          <div
            style={{ display: props.sideBarStikkyValue && "none" }}
            className={props.sideBarVisible ? css.btnClose : css.nnn}
          >
            <div
              style={{ display: props.sideBarVisible && "none" }}
              className={css.burger}
            ></div>
            <div
              style={{ display: props.sideBarVisible && "none" }}
              className={css.burger}
            ></div>
            <div
              style={{ display: props.sideBarVisible && "none" }}
              className={css.burger}
            ></div>
          </div>
        </div>
        <div className={css.boxBtn}>
          <button className={(css.btn, css.arrow)}></button>
        </div>
        <div className={css.boxBtn}>
          <button className={(css.btn, css.plus)}></button>
        </div>
        <div className={css.boxBtn}>
          <button className={(css.btn, css.btnPlusp)}></button>
        </div>
        <div className={css.boxBtn}>
          <input
            className={css.inputSearch}
            placeholder="Поиск"
            type="search"
          />
        </div>
      </div>
      <div className={css.block}>
        <div
          style={{ backgroundColor: props.actionOpen && "#e6e6e6" }}
          onClick={() => props.changeActionOpen()}
          className={css.boxBtn}
        >
          <button className={(css.btn, css.btnDate)}>
            <span className={css.date}>
              {m.getHours() < 10 ? "0" + m.getHours() : m.getHours()}:
              {m.getMinutes() < 10 ? "0" + m.getMinutes() : m.getMinutes()}
            </span>
            <span className={css.date}>
              {m.getDay() < 10 ? "0" + (m.getDay()+1) : m.getDay()}:
              {m.getMonth() < 10 ? "0" + m.getMonth() : m.getMonth()}:
              {m.getFullYear()}
            </span>
          </button>
        </div>
        <div onClick={() => props.changeInfoVisible()} style={{ backgroundColor: props.infoVisible && "#e6e6e6" }} className={css.boxBtn}>
          <button className={(css.btn, css.btnInfo)}></button>
        </div>
        <div
          onMouseEnter={() => props.setButtonHovered(true)}
          onMouseLeave={() => props.setButtonHovered(false)}
          onClick={() => props.changeSideBarStikky()}
          className={css.boxBtn}
          style={{ backgroundColor: props.sideBarStikkyValue && "#e6e6e6" }}
        >
          <button className={(css.btn, css.btnBoxes)}></button>
        </div>
        <div
          onClick={() => props.onChangeRemembersOpen()}
          className={css.boxBtn}
          style={{ backgroundColor: props.remembersOpen && "#e6e6e6" }}
        >
          <button className={(css.btn, css.btnBell)}></button>
          <div
            style={{ display: props.remembers.length === 0 && "none" }}
            className={css.btnNumberBell}
          >
            {props.remembers.length}
          </div>
        </div>
        <div className={css.boxBtn}>
          <button className={(css.btn, css.btnLogin)}>A</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
