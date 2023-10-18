import Button from "./Button.jsx";

function FunctionButton({ handleClick }) {
  const functions = ["C", "M", "<"];
  const listFunction = functions.map((func, id) => {
    return <Button handleClick={handleClick} value={func} key={id} />;
  });
  return <div className={"functions"}>{listFunction}</div>;
}

export default FunctionButton;
