import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//ES6 type class to build a controlled components
//square is changed to a function component, with only a render method.
function Square(props){
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  );
}
/*class Square extends React.Component {
  //constructor, called in the begining.
  /*delete, as the state is controlled by boarder
  constructor(props){
    //super is required here for parent's props
    super(props);
    //set default state, which can only be modified by setState
    this.state={
      value: null,
    };
  }

  //render function, return a react component
  render() {
        return (
            //setState to be 'X' and display it after being clicked
            //onClick is changed to this.props.onClick, and this.props.value
            //so that onClick function by Board is called.
            <button className="square" onClick={()=> this.props.onClick()}>   
                {this.props.value}
            </button>
        );
    }
}*/

class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        //add an array of 9 squares, with defaul null
        squares: Array(9).fill(null),
        //bydefault, first input is X
        //after click, xIsNext is flipped in handleClick
        xIsNext: true,
      };
    }

    //handle click, a call back from square
    handleClick(i){
      //get old version of squares from state
      //slice() is used here to make a copy of array, instead of modified array directly
      const squares=this.state.squares.slice();
      //early return if winner appears or it is already filled
      if (calculateWinner(squares) || squares[i]){
        return;
      }
      //update clicked square, value is determined by xIsNext
      squares[i]= this.state.xIsNext ? 'X': 'O';
      //update state. After update, square components re-render auto.
      this.setState({squares: squares,
      //flip xIsNext on every click
        xIsNext: !this.state.xIsNext});
    }

    renderSquare(i) {
        //pass a prop called 'value' to the Square
        //read from Board's constructor
        //pass this.handleClick(i) to square, and being called when click on square
        //on[Event] for props, handle[Event] for methods
        return (<Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)}/>);
    }

    render() {
      //call cal function to cal winner
      const winner = calculateWinner(this.state.squares);
      let status;
      //display winner
      if (winner) {
        status = 'Winner:' + winner;
      }
      //or display next player
      else{
        //status is determined by xIsNext as well
        status = 'Next player: ' + (this.state.xIsNext ?'X': 'O');
      }

        return (
            <div>
                <div className='status'>{status}</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
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
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
                <div className='game-info'>
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

//========================================
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

//function to cal whether there is a winner
function calculateWinner(squares) {
  //winner condition array
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for (let i =0; i<lines.length; i++){
    //get possible indexes
    const [a,b,c]=lines[i];
    //check if there is a winner
    if (squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
      //return winner's symbol
      return squares[a];
    }
  }
  //or return null if there is no winner
  return null
}