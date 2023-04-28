import {useReducer} from "react";
import Marble, {Colors} from "./Marble.jsx";
import classes from "./Board.module.css"

const WIDTH = 9, HEIGHT = 9, COLOR_MAX = 14;

const midPoint = value => Math.ceil(value / 2) - 1;

function initBoard() {
    const board = new Array(HEIGHT);
    let i, j;
    let counts = [0,0,0,0,0,0]

    function chooseColor() {
        const choices = [Colors.Red, Colors.Orange, Colors.Yellow, Colors.Green, Colors.Blue, Colors.Purple];
        let choice, index, attempts = 0;
        do {
            attempts++;
            if (attempts > 20)
                break;
            index = Math.floor(Math.random() * choices.length);
            choice = choices[index];
        } while (!validateChoice(choice) || counts[index] >= COLOR_MAX);
        counts[index]++;
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
    
    board[midPoint(WIDTH)][midPoint(HEIGHT)] = Colors.Empty;
    return board;
}

function reducer(state, action) {
    return state;
}

export default function Board() {
    const [board, dispatch] = useReducer(reducer, initBoard());
    
    return (
        <div className={classes.board}>
            {board.map((row, i) =>
                <div className={classes.row} key={i}>
                    {row.map((color, j) => <Marble color={color} key={j} />)}
                </div>)}
        </div>
    );
}