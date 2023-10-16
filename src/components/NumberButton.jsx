import Button from "./Button";

function NumberButton({ handleClick }) {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const listNumbers = numbers.map((number, id) => (
    <Button key={id} value={number} handleClick={handleClick} />
  ));

  return <div className={"numbers"}>{listNumbers}</div>;
}

export default NumberButton;
