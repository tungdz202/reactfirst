import React from "react";

class Mycomponent extends React.Component {
  state = {
    name: "",
    channel: "dai hoc bk",
  };
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleClickButton = () => {
    alert("click me");
  };
  render() {
    console.log("call render: ", this.state);
    return (
      <>
        <div>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
        </div>
        <div className="first">my name is {this.state.name}</div>
        <div className="second">
          {console.log("My name is:", this.state.channel)}
          my channel is {this.state.channel}
        </div>
        <div className="third">
          <button
            onClick={() => {
              this.handleClickButton();
            }}
          >
            con gà lày
          </button>
        </div>
      </>
    );
  }
}

export default Mycomponent;
