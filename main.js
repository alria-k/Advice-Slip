const adviceNumber = document.querySelector(".advice-number"),
  adviceText = document.querySelector(".advice-text"),
  btn = document.querySelector(".advice-btn"),
  xhrURL = "https://api.adviceslip.com/advice";

btn.addEventListener("click", () => {
  let formating = fetch(xhrURL).then((response) => {
    return response.json();
  });
  formating.then((slip) => {
    for (let items of Object.values(slip)) {
      adviceText.innerHTML = `"${items.advice}"`;
      adviceNumber.innerHTML = `Advice #${items.id}`;
    }
  });
});
