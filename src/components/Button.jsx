function Button({ handleClick, value }) {
  const data = value;
  return <button onClick={() => handleClick(data)}>{value}</button>;
}

export default Button;
