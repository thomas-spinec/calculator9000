import gif from "../assets/img/giphy.gif";

function ItSOverNineThousand({ setEaster }) {
  return (
    <>
      <div className="alert">
        <div className="easter">
          <h1>It's Over 9000 !!!</h1>
          <img src={gif} alt="It's Over 9000 !!!" />
          <button onClick={() => setEaster(false)}>Kaiôken !!</button>
        </div>
      </div>
    </>
  );
}

export default ItSOverNineThousand;
