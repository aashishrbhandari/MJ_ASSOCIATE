// Get Navbar
async function load_navbar() {
    document.querySelector("div.navbar-component").innerHTML = await (await fetch('/navbar.html')).text();
    /*
    console.log("Data-> ", document.querySelector(".sub-dropdown-menu"))
    document.querySelector(".sub-dropdown-menu-btn").onclick = function () {
        if (this.nextElementSibling.style.display === "block") {
            this.nextElementSibling.style.display = "none"
        } else {
            this.nextElementSibling.style.display = "block";
        }
    }
    */

}

// Get Footer
async function load_footer() {
    document.querySelector("div.footer-component").innerHTML = await (await fetch('/footer.html')).text();

    let disclaimer_modal = document.querySelector(".disclaimer-modal");
    let disclaimer_modal_section = new bootstrap.Modal(disclaimer_modal, {
        keyboard: false,
        backdrop: 'static'
    })

    /*** A Very Basic Way [Testing] */
    if (localStorage.getItem("Visited")) {
        console.log("Visited No Need to Show Modal!!")
    } else {
        disclaimer_modal_section.show();
        localStorage.setItem("Visited", "True")
    }

}

function main() {
    // Main
    load_navbar();
    load_footer();
}

main();

/* Testing

window.onbeforeunload = function (event) {
    localStorage.removeItem("Visited")
};


*/