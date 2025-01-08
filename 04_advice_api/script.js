const dice = document.querySelector('.dice-div');
let adviceCard = document.querySelector('.adviceCard');

dice.addEventListener("click",()=>{
    const url = " 	https://api.adviceslip.com/advice";
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        adviceCard.innerHTML = `
        <p class="advice_number">ADVICE #${data.slip.id}</p>
            <p class="advice">${data.slip.advice}</p>

            <img src="./images/pattern-divider-desktop.svg" alt="pattern-divider.svg" class="pattern-divider">
        `;
    })
    .catch((error)=>{
        console.log(error);
        result.innerHTML = `
            <p class="advice>Sorry can't fetch any API :/</p>
        `
    })
})