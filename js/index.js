// Get Navbar
async function load_navbar() {
    document.querySelector("div.navbar-component").innerHTML = await (await fetch('/navbar.html')).text();
}

// Get Footer
async function load_footer() {
    document.querySelector("div.footer-component").innerHTML = await (await fetch('/footer.html')).text();
}

// Handle Query Submit
//document.querySelector("form.query-form").onsubmit = function () {

//}

function main() {
    // Main
    load_navbar();
    load_footer();
}

main();