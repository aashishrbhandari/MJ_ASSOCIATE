// function load_footer() {
//     document.queryselector("div.footer-component").innerhtml = '<object type="text/html" data="footer.html" ></object>';
// }

async function load_navbar() {
    document.querySelector("div.navbar-component").innerHTML = await (await fetch('/navbar.html')).text();
}

async function load_footer() {
    document.querySelector("div.footer-component").innerHTML = await (await fetch('/footer.html')).text();

    var exampleModal = document.getElementById('attentionModal')
    exampleModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget
        // Extract info from data-* attributes
        var recipient = button.getAttribute('data-whatever')
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
        var modalTitle = exampleModal.querySelector('.modal-title')
        var modalBodyInput = exampleModal.querySelector('.modal-body input')

        modalTitle.textContent = 'New message to ' + recipient
        modalBodyInput.value = recipient
    })
}

load_navbar();
load_footer();