let button = document.querySelector('.btn');

button.addEventListener("click", function(event) {
    event.preventDefault();

    let returnval = true;

    let emailInput = document.forms["myForm"]["email"];
    let email = emailInput.value;
    let errorElement = document.querySelector('.error');
    let emailSpan = document.querySelector('.em');
    let dismissBtn = document.querySelector('.dismiss');
    let browseButton = document.querySelector('.browse');
    
    if ((email.indexOf('@') === -1) || email.length<=8) {
        emailInput.style.color = '#FF6A3A';
        emailInput.style.border = '2px solid #FF6A3A';
        emailInput.style.backgroundColor = 'rgba(255, 159, 122, 0.1)';
        emailInput.style.fontWeight = '700';
        errorElement.style.opacity = "1";
        returnval = false;
    } else {
        errorElement.style.opacity = "0";
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.successCard').style.display = 'flex';
        emailSpan.innerHTML = `${email}`;
        console.log("Email: " + email);

        dismissBtn.addEventListener("click",()=>{
            document.querySelector('.successCard').style.display = 'none';
            document.querySelector('.browse').style.display = 'flex';
        })
    }

    return returnval; 
});
