import {useReducer} from "react";
import Marble, {Colors} from "./Marble.jsx";

const WIDTH = 9, HEIGHT = 9;

function chooseColor() {
    const choices = [Colors.Red, Colors.Orange, Colors.Yellow, Colors.Green, Colors.Blue, Colors.Purple];
    return choices[Math.floor(Math.random() * choices.length)];
}

const midPoint = value => Math.ceil(value / 2);

function initBoard() {
    const board = Array(HEIGHT);
    for (let i = 0; i < HEIGHT; i++) {
        board[i] = Array(WIDTH);
        for (let j = 0; j < WIDTH; j++)
            board[i][j] = <Marble color={chooseColor()} key={j} />
    }
    board[midPoint(WIDTH)][midPoint(HEIGHT)] = null;
    return board;
}

function reducer(state, action) {
    return state;
}

export default function Board() {
    const [board, dispatch] = useReducer(reducer, initBoard());
    
    return board.map((row, index) => <div key={index}>{row}</div> );
}