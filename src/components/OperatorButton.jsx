import Button from "./Button.jsx";

function OperatorButton({ handleClick }) {
  const operators = ["+", "-", "*", "/"];
  const listOperator = operators.map((operator, id) => {
    return <Button value={operator} key={id} handleClick={handleClick} />;
  });
  return <div className={"operators"}>{listOperator}</div>;
}

export default OperatorButton;
