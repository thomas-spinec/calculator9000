function BeautifulScreen({ operation, result }) {
  return (
    <div className="screen">
      <input type="text" value={operation} readOnly />
      <input type="text" value={result} readOnly />
    </div>
  );
}

export default BeautifulScreen;
