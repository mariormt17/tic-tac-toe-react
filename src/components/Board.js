import React from 'react'
import Square from './Square'

export default function Board (props) {
  const [xIsNext, setXIsNext] = React.useState(true);
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {
          <Square
            value = {squares[0]}
            onClick={() => {
              const squaresCopy = squares.slice();
              squaresCopy[0] = xIsNext ? 'X' : 'O';
              setSquares(squaresCopy);
              setXIsNext(!xIsNext);
            }}
          />
        }
        {
          <Square
            value = {squares[1]}
            onClick={() => {
              const squaresCopy = squares.slice();
              squaresCopy[1] = xIsNext ? 'X' : 'O';
              setSquares(squaresCopy);
              setXIsNext(!xIsNext);
            }}
          />
        }
        {
          <Square
            value = {squares[2]}
            onClick={() => {
              const squaresCopy = squares.slice();
              squaresCopy[2] = xIsNext ? 'X' : 'O';
              setSquares(squaresCopy);
              setXIsNext(!xIsNext);
            }}
          />
        }
      </div>
      <div className="board-row">
      {
          <Square
            value = {squares[3]}
            onClick={() => {
              const squaresCopy = squares.slice();
              squaresCopy[3] = xIsNext ? 'X' : 'O';
              setSquares(squaresCopy);
              setXIsNext(!xIsNext);
            }}
          />
        }
        {
          <Square
            value = {squares[4]}
            onClick={() => {
              const squaresCopy = squares.slice();
              squaresCopy[4] = xIsNext ? 'X' : 'O';;
              setSquares(squaresCopy);
              setXIsNext(!xIsNext);
            }}
          />
        }
        {
          <Square
            value = {squares[5]}
            onClick={() => {
              const squaresCopy = squares.slice();
              squaresCopy[5] = xIsNext ? 'X' : 'O';
              setSquares(squaresCopy);
              setXIsNext(!xIsNext);
            }}
          />
        }
      </div>
      <div className="board-row">
      {
          <Square
            value = {squares[6]}
            onClick={() => {
              const squaresCopy = squares.slice();
              squaresCopy[6] = xIsNext ? 'X' : 'O';
              setSquares(squaresCopy);
              setXIsNext(!xIsNext);
            }}
          />
        }
        {
          <Square
            value = {squares[7]}
            onClick={() => {
              const squaresCopy = squares.slice();
              squaresCopy[7] = xIsNext ? 'X' : 'O';
              setSquares(squaresCopy);
              setXIsNext(!xIsNext);
            }}
          />
        }
        {
          <Square
            value = {squares[8]}
            onClick={() => {
              const squaresCopy = squares.slice();
              squaresCopy[8] = xIsNext ? 'X' : 'O';
              setSquares(squaresCopy);
              setXIsNext(!xIsNext);
            }}
          />
        }
      </div>
    </div>
  );
}