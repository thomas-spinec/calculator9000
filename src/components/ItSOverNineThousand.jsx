function ItSOverNineThousand({ result }) {
  if (result > 9000) {
    return (
      <>
        <div className={"easter"}>
          <h1>It's Over 9000 !!!</h1>
          <iframe
            src="https://giphy.com/embed/tPKoWQJk3cEbC"
            width="480"
            height="359"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/dc-cinematic-universe-tPKoWQJk3cEbC">
              via GIPHY
            </a>
          </p>
        </div>
      </>
    );
  }
}

export default ItSOverNineThousand;
