// import React from 'react'
// import css from './modalInfo.module.css'

// const ModalInfo = (props) => {

// return(<div className={css.container}><div className={css.insideWrapper}>{props.children}</div></div>)
// }

// export default ModalInfo;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function ModalInfo(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.infoVisible}
        onClose={props.changeInfoVisible}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={props.infoVisible}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Как работать со страницей</h2>
            <p style={{width:"600px"}} id="transition-modal-description">
              - При нажатии на колокольчик вы увидите развкрнутый список
              напоминаний, которые вы можете удалять. Цыфра в красном кружочке
              сообщает о количестве напоминаний.
            </p>
            <p  style={{width:"600px"}}  id="transition-modal-description">
              - При наведении на кнопку быстрого доступа вы увидите дополнительное
              расширенное меню для роботы с страницей. Нажав на нее вы
              зафиксируете резельтат.
            </p>{" "}
            <p  style={{width:"600px"}}  id="transition-modal-description">
              - При нажатии на кнопку с сегодняшней , вы увидите список последних
              событий в системе. С помощью Мышки и прокрутки , вы сможете
              пересмотреть их все.{" "}
            </p>
            <p  style={{width:"600px"}}  id="transition-modal-description">
              {" "}
             - Нажимая на кнопу-бургер , вы частично открываете "side-bar" для
              роботы с приложением. Закрыть вы его сможете при нажатии на
              крестик , который появиться рядом.
            </p>
            <p  style={{width:"600px"}}  id="transition-modal-description">
             - И собственно нажав на кнопку "info" , вы увидите инструкцию,
              которая сдесь написана.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
