import React from "react";
import css from "./Reminder.module.css";

const Reminder = props => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Напоминания(обуч.)</h3>
      {props.remembers.map(e => (
        <p key={e.id} className={css.text}>
          {e.title}
        </p>
      ))}
    </div>
  );
};

export default Reminder;
