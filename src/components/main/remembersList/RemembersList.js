import React, { useState } from "react";
import css from "./remembersList.module.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const RemembersList = prop => {
  return (
    <ul className={css.container}>
      {prop.remembers.map(e => (
        <li className={css.listItem} key={e.id}>
          <div style={{ display: "flex" }}>
            <h2 className={css.title}>{e.title}</h2>
            <IconButton onClick={()=>prop.deleteRemember(e.id)} aria-label="delete">
              <DeleteIcon fontSize="large" />
            </IconButton>
          </div>
          <p className={css.text}>{e.text} </p>
        </li>
      ))}
    </ul>
  );
};

export default RemembersList;
