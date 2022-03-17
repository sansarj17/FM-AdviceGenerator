const diceImg = document.getElementById("dice-image");
const docAdviceId = document.getElementById("advice-id");
const docAdviceText = document.getElementById("advice-text");

diceImg.addEventListener("click", function () {
  fetchAdvice();
  setTimeout(() => {
    diceImg.classList.toggle("dice-img-active");
  }, 100);
});

async function fetchAdvice() {
  const fetchedSlip = await fetch("https://api.adviceslip.com/advice");
  const jsonSlip = await fetchedSlip.json();
  const { id: adviceId, advice: adviceSlip } = jsonSlip.slip;

  docAdviceId.innerText = adviceId;
  docAdviceText.innerText = adviceSlip;
}
