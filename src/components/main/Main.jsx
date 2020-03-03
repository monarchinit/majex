import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import EditBlock from "./editBlock/EditBlock";
import ListCenter from "./listCenter/ListCenter";
import Reminder from "./reminder/Reminder";
import Actions from "./actions/Actions";
import slideTransition from "../transition/transitionSlide.module.css";
import RemembersList from "./remembersList/RemembersList";

class Main extends Component {
  state = {};
  render() {
    const padding = this.props.actionOpen ? "40px" : "0";
    return (
      <>
        <EditBlock />
        <div style={{ paddingTop: padding }}>
          <CSSTransition
            in={this.props.actionOpen}
            timeout={250}
            classNames={slideTransition}
            unmountOnExit
          >
            <Actions />
          </CSSTransition>
          {this.props.remembers.length !== 0 && (
            <CSSTransition
              in={this.props.remembersOpen}
              timeout={250}
              classNames={slideTransition}
              unmountOnExit
            >
              <RemembersList
                deleteRemember={this.props.deleteRemember}
                remembers={this.props.remembers}
              />
            </CSSTransition>
          )}
          <h2
            style={{
              color: "#213562",
              fontFamily: "sans-serif",
              paddingTop: "30px"
            }}
          >
            Заголовок 1
          </h2>
          <div style={{ paddingTop: "10px", display: "flex" }}>
            <ListCenter />

            {/* <CSSTransition
              in={!this.props.remembersOpen}
              timeout={250}
              classNames={slideTransition}
              unmountOnExit
            > */}
            {this.props.remembers.length !== 0 && (
              <Reminder remembers={this.props.remembers} />
            )}
            {/* </CSSTransition> */}
          </div>
        </div>
      </>
    );
  }
}

export default Main;
