import React from "react";
import css from "./listCenter.module.css";

const ListCenter = () => {
  return (
    <>
      <div className={css.ownContainer}>
        <div className={css.container}>
          <div>
            <h3 className={css.title}>Заголовок 2</h3>
            <ul>
              <li className={css.listItem}>
                <p className={css.itemText}>Lorem ipsum</p>
                <p className={css.itemText}>что-то</p>
              </li>
              <li className={css.listItem}>
                <p className={css.itemText}>Lorem ipsum</p>
                <p className={css.itemText}>что-то</p>
              </li>
              <li className={css.listItem}>
                <p className={css.itemText}>Lorem ipsum</p>
                <p className={css.itemText}>что-то</p>
              </li>
              <li className={css.listItem}>
                <p className={css.itemText}>Lorem ipsum</p>
                <p className={css.itemText}>что-то</p>
              </li>
            </ul>
          </div>
          <div className={css.btnContainer}>
            <div>
              <button className={css.btnOne}></button>
              <button className={css.btnTwo}></button>
              <button className={css.btnThree}></button>
              <button className={css.btnFour}></button>
            </div>
            <div>
              <button className={css.btnSave}>Отмена</button>

              <button className={css.btnSave}>Сохранить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCenter;
