import React, { useContext } from "react";
import css from "./editBlock.module.css";
import {Context} from '../../App'

const EditBlock = () => {
  const context = useContext(Context);
    let flag;
    context.sideBarStikkyValue
      ? (flag = context.sideBarStikkyValue)
      : (flag = context.hoverSidBar);
    const classHoverBlock = flag ? css.blockHover : css.block;
  return (
    <div className={classHoverBlock}>
      <div className={css.boxBtn}>
        <button className={css.btnOne} type="button"></button>
      </div>
      <div className={css.boxBtn}>
        <button className={css.btnTwo} type="button"></button>
      </div>
      <div className={css.boxBtn}>
        <button className={css.btnThree} type="button"></button>
      </div>
      <div className={css.boxBtn}>
        <button className={css.btnFour} type="button"></button>
      </div>
    </div>
  );
};

export default EditBlock;
