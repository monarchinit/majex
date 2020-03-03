import React, { Component } from "react";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
import Main from "./main/Main";
import { remembers } from "../config/config";
import ModalInfo from './modalInfo/ModalInfo'

export const Context = React.createContext();

class App extends Component {
  state = {
    remembers: remembers,
    hoverSidBar: false,
    sideBarStikkyValue: false,
    actionOpen: false,
    remembersOpen: false,
    sideBarVisible: false,infoVisible:false
  };

  setButtonHovered = booll => {
    this.setState({ hoverSidBar: booll });
  };

  changeSideBarStikky = () => {
    this.setState(state => {
      return { sideBarStikkyValue: !state.sideBarStikkyValue };
    });
  };

  changeActionOpen = () => {
    this.setState(state => ({
      actionOpen: !state.actionOpen,
      remembersOpen: false
    }));
  };

  onChangeRemembersOpen = () => {
    this.setState(state => ({
      remembersOpen: !state.remembersOpen,
      actionOpen: false
    }));
  };

  deleteRemember = async id => {
    await this.setState(state => {
      return { remembers: state.remembers.filter(e => e.id !== id) };
    });
    if (this.state.remembers.length === 0) {
      this.setState({ remembersOpen: false });
    }
  };

  changeSideBarVisible = () => {
    this.setState(state => ({ sideBarVisible: !state.sideBarVisible }));
  };

  changeInfoVisible=()=>{
    this.setState(state => ({ infoVisible: !state.infoVisible }));
  }

  render() {
    const {
      actionOpen,
      hoverSidBar,
      sideBarStikkyValue,
      remembers,
      remembersOpen,
      sideBarVisible,
      infoVisible
    } = this.state;

    return (
      <>
        <Context.Provider value={{ hoverSidBar, sideBarStikkyValue }}>
          <SideBar
            sideBarStikkyValue={sideBarStikkyValue}
            hoverSidBar={hoverSidBar}
            sideBarVisible={sideBarVisible}
          />
          <div style={{ margin: "0 10px", width: "100%" }}>
            <Header
              changeActionOpen={this.changeActionOpen}
              sideBarStikkyValue={sideBarStikkyValue}
              changeSideBarStikky={this.changeSideBarStikky}
              setButtonHovered={this.setButtonHovered}
              onChangeRemembersOpen={this.onChangeRemembersOpen}
              remembersOpen={remembersOpen}
              actionOpen={actionOpen}
              remembers={remembers}
              changeSideBarVisible={this.changeSideBarVisible}
              sideBarVisible={sideBarVisible}
              changeInfoVisible={this.changeInfoVisible}
              infoVisible={infoVisible}
            />
            <Main
              deleteRemember={this.deleteRemember}
              remembersOpen={remembersOpen}
              remembers={remembers}
              actionOpen={actionOpen}
            />
          </div>
        <ModalInfo changeInfoVisible={this.changeInfoVisible} infoVisible={infoVisible}></ModalInfo>
        </Context.Provider>
      </>
    );
  }
}

export default App;
