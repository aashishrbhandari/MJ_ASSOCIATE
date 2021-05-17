// Get Navbar
async function load_navbar() {
    document.querySelector("div.navbar-component").innerHTML = await (await fetch('/navbar.html')).text();
}

// Get Footer
async function load_footer() {
    document.querySelector("div.footer-component").innerHTML = await (await fetch('/footer.html')).text();

    let disclaimer_modal = document.querySelector(".disclaimer-modal");

    if (disclaimer_modal) {

        console.log("Disclaimer Modal....");

        let disclaimer_modal_section = new bootstrap.Modal(disclaimer_modal, {
            keyboard: false,
            backdrop: 'static'
        })

        /*** A Very Basic Way [Testing] */
        if (localStorage.getItem("Visited")) {
            console.log("Visited No Need to Show Modal!!")
        } else {
            disclaimer_modal_section.show();
        }
    }

}

function func_alteration() {
    // Disable Right Click
    document.addEventListener('contextmenu', event => event.preventDefault());
}


function main() {
    load_navbar();
    load_footer();
    func_alteration();
}

main();

