import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//SQUARE COMPONENT
class Square extends React.Component {
  //CONSTRUCTOR
  constructor(props) {
    super(props);
    this.state = { value: null };
  }
  //RENDER
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({ value: "X" });
        }}
      >
        {this.state.value}
      </button>
    );
  }
}
//BOARD COMPONENT
class Board extends React.Component {
  //CONSTRUCTOR
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => {
          this.handleClick(i);
        }}
      />
    );
  }
  //RENDER
  render() {
    const status = "Next Player: X";

    return (
      <div>
        <div className="status"> {status} </div>
        <div className="board-now">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-now">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-now">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/*status*/}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

ReactDom.render(<Game />, document.getElementById("root"));
