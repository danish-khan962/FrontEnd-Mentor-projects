let plus1 = document.querySelector('.plus-1');
let plus2 = document.querySelector('.plus-2');
let plus3 = document.querySelector('.plus-3');
let plus4 = document.querySelector('.plus-4');

let minus1 = document.querySelector('.minus-1');
let minus2 = document.querySelector('.minus-2');
let minus3 = document.querySelector('.minus-3');
let minus4 = document.querySelector('.minus-4');

let answer1 = document.querySelector('.answer-1');
let answer2 = document.querySelector('.answer-2');
let answer3 = document.querySelector('.answer-3');
let answer4 = document.querySelector('.answer-4');

function toggleFAQ(plus, min, ans, content) {
    plus.addEventListener("click", () => {
        if (ans.innerHTML === '') {
            ans.innerHTML = content;
            plus.style.display = 'none';
            min.style.display = 'block';
        }
    });

    min.addEventListener("click", () => {
        if (ans.innerHTML !== '') {
            ans.innerHTML = '';
            min.style.display = 'none';
            plus.style.display = 'block';
        }
    });
}

toggleFAQ(plus1, minus1, answer1, `
    Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
`);
toggleFAQ(plus2, minus2, answer2, `
    Is it free? The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.
`);
toggleFAQ(plus3, minus3, answer3, `
    Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!
`);
toggleFAQ(plus4, minus4, answer4, `
    The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated "help" channel! If you haven't joined yet, you can <a href="#" class="invite-link">get an invite to our Discord server here.</a>
`);
