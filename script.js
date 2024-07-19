document.addEventListener("DOMContentLoaded", function() {
    showModal('Welcome to the Black and White Game!');
});

function showModal(text) {
    var modal = document.getElementById('modal');
    var modalText = document.getElementById('modal-text');
    modalText.innerText = text;
    modal.style.display = "block";
    modal.classList.add('fade-in');
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
    modal.classList.remove('fade-in');
}

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}