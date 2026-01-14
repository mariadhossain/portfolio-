

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs
        .send("service_qvbukcw", "template_td340ih", params)
        .then(function () {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch(function (error) {
            console.log(error);
            alert("Failed to send message");
        });
});
