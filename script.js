// Validation de formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Vérification de la validité des champs
    if (name === "" || email === "" || message === "") {
        alert("Tous les champs doivent être remplis !");
    } else {
        alert("Merci pour votre message, " + name + " ! Je vous répondrai dès que possible.");
        // Remise à zéro du formulaire
        document.getElementById('contact-form').reset();
    }
});
