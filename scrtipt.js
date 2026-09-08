document.addEventListener("DOMContentLoaded", () => {
    console.log("Git practice script loaded successfully!");

    // add a gretting to the console
    const greeting = "Hello, welcome to the Git practice script!";
    console.log(greeting);

    // Dynamic timestamp on the page
    const footer = document.createElement("footer");
    footer.style.marginTop = "2rem";
    footer.style.color = "#94a3b8";
    footer.style.fontSize = "0.9rem";
    footer.innerHTML = `<p>Page loaded on : ${new Date().toLocaleDateString()}</p>`;

    document.body.appendChild(footer);
})