import React from "react";
import css from "./sideBar.module.css";

const SideBar = props => {
  let flag;
  props.sideBarStikkyValue
    ? (flag = props.sideBarStikkyValue)
    : (flag = props.hoverSidBar);
  const classHoverText = flag ? css.textImgHover : css.itemText;
  const classHoverList = flag ? css.hamburgerMenuHover : css.hamburgerMenu;
  const classHoverListBottom = flag
    ? css.itemSideBarBottomItems
    : css.itemSideBar;

  return (
    <div
      style={{
        display: props.sideBarVisible && "flex"
      }}
      className={classHoverList}
    >
      <ul className={css.menuBox}>
        <li className={css.itemSideBar}>
          <div className={css.itemLogoImg}></div>
          <p className={css.itemText}></p>
          <div className={css.itemLogoLine}></div>
        </li>
        <li className={css.itemSideBar}>
          <div className={css.itemSideBarCalend}></div>
          <p className={classHoverText}>Шахматка</p>
        </li>
        <li className={css.itemSideBar}>
          <div className={css.itemDocumentImg}></div>
          <p className={classHoverText}>Отчеты</p>
        </li>
        <li className={css.itemSideBar}>
          <div className={css.itemCalcImg}></div>
          <p className={classHoverText}>Касса</p>
        </li>
        <li className={css.itemSideBar}>
          <div className={css.itemClient}></div>
          <p className={classHoverText}>Клиент</p>
        </li>
        <li className={css.itemSideBar}>
          <div className={css.itemPersonal}></div>
          <p className={classHoverText}>Персонал</p>
        </li>
        <li className={css.itemSideBar}>
          <div className={css.itemBagImg}></div>
          <p className={classHoverText}>Задачи</p>
        </li>
        <li className={css.itemSideBar}>
          <div className={css.itemWarehouseImg}></div>
          <p className={classHoverText}>Склад</p>
        </li>
      </ul>
      <div>
        <div className={css.bottomLine}></div>
        <ul className={css.menuBox}>
          <li className={classHoverListBottom}>
            <div className={css.wrenchImg}></div>
          </li>
          <li className={classHoverListBottom}>
            <div className={css.helpImg}></div>
          </li>
          <li className={classHoverListBottom}>
            <div className={css.archiveImg}></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
