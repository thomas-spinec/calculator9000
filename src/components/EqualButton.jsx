function EqualButton({ equal }) {
  const go = ["="];
  return (
    <div className={"equal"}>
      <button onClick={() => equal(go)} key={"="}>
        =
      </button>
    </div>
  );
}

export default EqualButton;
