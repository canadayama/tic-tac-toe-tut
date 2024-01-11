export default function Square(props) {
    const value = props.value;
    const onSquareClick = props.onSquareClick;

    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
    )
}