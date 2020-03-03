import React, { Component } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import css from "./actions.module.css";
import { guests } from "../../../config/config";

class Actions extends Component {
  render() {
    return (
      <>
        <div
          onMouseEnter={() =>
            (document.querySelector("body").style.overflow = "hidden")
          }
          onMouseLeave={() =>
            (document.querySelector("body").style.overflow = "unset")
          }
        >
          <HorizontalScroll pageLock={true} style={{ height: "220px" ,borderRadius:"5px"}}>
            {guests.map(e => {
              return (
                <div key={e.number} className={css.listItem}>
                    <div className={css.wrapperTitle}>
                  <h3>{e.action}</h3>
                  <div className={css.exit}></div>
                  </div>
                  <p className={css.itemNumber}>{e.number}</p>
                  <div className={css.textContainer}>
                    <p className={css.textIte}>Источник:</p>
                    <p className={css.textItem}>
                      {e.source}
                    </p>
                  </div>
                  <div className={css.textContainer}>
                    <p className={css.textIte}>Заказчик:</p>
                    <p className={css.textItem}>
                      {e.customer.slice(0, 15) + "..."}
                    </p>
                  </div>
                  <div className={css.textContainer}>
                    <p className={css.textIte}>Категория:</p>
                    <p className={css.textItem}>
                      {e.category.slice(0, 15) + "..."}
                    </p>
                  </div>
                  <div className={css.textContainer}>
                    <p className={css.textIte}>Период:</p>
                    <p className={css.textItem}>
                      {e.period}
                    </p>
                  </div>
                  <div className={css.textContainer}>
                    <p className={css.textIte}>Статус:</p>
                    <p className={css.textItem}>
                      {e.status}
                    </p>
                  </div>
                </div>
              );
            })}
          </HorizontalScroll>
        </div>
      </>
    );
  }
}

export default Actions;
