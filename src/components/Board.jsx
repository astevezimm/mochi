import {useReducer} from "react";
import Marble, {Colors} from "./Marble.jsx";

const WIDTH = 9, HEIGHT = 9;

const midPoint = value => Math.ceil(value / 2) - 1;

function initBoard() {
    const board = new Array(HEIGHT);
    let i, j;

    function chooseColor() {
        const choices = [Colors.Red, Colors.Orange, Colors.Yellow, Colors.Green, Colors.Blue, Colors.Purple];
        let choice;
        do {
            choice = choices[Math.floor(Math.random() * choices.length)];
        } while (!validateChoice(choice));
        return choice;
    }

    function validateChoice(choice) {
        if (i > 0 && choice === board[i-1][j])
            return false;
        else if (j > 0 && choice === board[i][j-1])
            return false;
        return true;
    }

    for (i = 0; i < HEIGHT; i++) {
        board[i] = new Array(WIDTH);
        for (j = 0; j < WIDTH; j++) {
            board[i][j] = chooseColor();
        }
    }
    
    board[midPoint(WIDTH)][midPoint(HEIGHT)] = null;
    return board;
}

function reducer(state, action) {
    return state;
}

export default function Board() {
    const [board, dispatch] = useReducer(reducer, initBoard());
    
    return board.map((row, i) =>
        <div style={{display: "flex", gap: "20px"}} key={i}>
            {row.map((color, j) => <Marble color={color} key={j} />)}
        </div>);
}