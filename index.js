const button = document.querySelector("#generate-btn");
const advice_id = document.querySelector("#id");
const advice_content = document.querySelector("#advice");
const fetchAdvice = async() => {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data= await response.json();
    let id = data.slip.id;
    let advice = data.slip.advice;
    advice_id.innerHTML = id;
    advice_content.innerHTML = advice;
    console.log(id);
    console.log(advice);
}
button.addEventListener("click", () => {
    fetchAdvice();
});