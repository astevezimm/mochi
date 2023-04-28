import classes from "./Marble.module.css";

export const Colors = {
    Red: "red",
    Orange: "orange",
    Yellow: "yellow",
    Green: "green",
    Blue: "blue",
    Purple: "purple",
    Empty: "empty"
}

export default function Marble(props) {
    return <div className={classes[props.color]} />
}