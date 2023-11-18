// variables
// document.addEventListener("DOMContentLoaded", () => {

// })
document.addEventListener("DOMContentLoaded", () => {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const btnGetQuote = document.getElementById('btn-get-quote');

    async function getQuote() {

        const response = await fetch("https://api.quotable.io/random");
        const quote = await response.json();
        // quoteText.innerText = `" ${quote.content} "`;
        quoteText.innerText = quote.content;
        quoteAuthor.innerText = "— " + quote.author;
    }

    // console.log(getQuote());

    btnGetQuote.addEventListener("click", getQuote);
    getQuote();
})