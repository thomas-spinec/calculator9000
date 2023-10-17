function Alert({ setAlert }) {
  return (
    <div className="alert">
      <div className="divAlert">
        <h3>Vous ne pouvez pas insérer 2 opérateurs à la suite</h3>
        <button onClick={() => setAlert(false)}>J'ai compris</button>
      </div>
    </div>
  );
}

export default Alert;
