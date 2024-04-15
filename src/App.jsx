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

    const gradeElement = document.getElementById("grade");
    if (percentage >= 90) {
      gradeElement.innerHTML = 'A*'
    } else if (percentage >= 80) {
      gradeElement.innerHTML = 'A'
    } else if (percentage >= 70) {
      gradeElement.innerHTML = 'B'
    } else if (percentage >= 60) {
      gradeElement.innerHTML  = 'C'
    } else if (percentage >= 50) {
      gradeElement.innerHTML = 'D'
    } else if (percentage < 50) {
      gradeElement.innerHTML = 'F'
    } else {
      gradeElement.innerHTML = "Grade not found";
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
        <p>Your grade is: <span id="grade"></span></p>
      </div>
    </>
  );
}
