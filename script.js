const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");
const diceBtn = document.getElementById("diceBtn");

diceBtn.addEventListener("click", getAdvice);

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            adviceId.textContent = data.slip.id;
            adviceText.textContent = `"${data.slip.advice}"`;
        })
        .catch(error => {
            adviceText.textContent = "Failed to load advice.";
        });
}
