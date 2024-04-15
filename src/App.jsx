import "./App.css";

export default function App() {
  function calculateScore() {
    const total = document.getElementById("total");
    const score = document.getElementById("score");

    if (!total || !score) {
      console.error("Total or score element not found");
      return;
    }

    const totalValue = total.value;
    const scoreValue = score.value;

    if (!totalValue || !scoreValue) {
      console.error("Total or score value is empty");
      return;
    }

    const percentage = Math.round((scoreValue / totalValue) * 100);
    const resultElement = document.getElementById("result");

    if (resultElement) {
      resultElement.innerHTML = percentage;
    } else {
      console.error("Result element not found");
    }
  }

  return (
    <>
      <div className="container">
        <input id="total" type="number" placeholder="total score"></input>
        <br />
        <input id="score" type="number" placeholder="your score"></input>
        <br />
        <button onClick={calculateScore}>Submit</button>

        <p>
          Your score is: <span id="result"></span>%
        </p>
      </div>
    </>
  );
}
