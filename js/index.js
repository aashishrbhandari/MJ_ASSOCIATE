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

function main() {
    load_navbar();
    load_footer();
}

main();


/***
 * For MultiLevel DropDown in BooStrap v5
*/

document.addEventListener("DOMContentLoaded", function () {
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
            everydropdown.addEventListener('hidden.bs.dropdown', function () {
                // after dropdown is hidden, then find all submenus
                this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
                    // hide every submenu as well
                    everysubmenu.style.display = 'none';
                });
            })
        });

        document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
            element.addEventListener('click', function (e) {
                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('submenu')) {
                    // prevent opening link if link needs to open dropdown
                    e.preventDefault();
                    if (nextEl.style.display == 'block') {
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }

                }
            });
        })
    }
    // end if innerWidth
});
// DOMContentLoaded  end

document.addEventListener("DOMContentLoaded", function () {
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
});