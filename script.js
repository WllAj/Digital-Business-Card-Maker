// event
function saveCard() {
    const name = document.getElementById("name").value.trim();
    const job = document.getElementById("job").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const image = document.getElementById("image").value.trim();
    const message = document.getElementById("message");

    // 🔹 Basic Validation (Fields empty)
    if (name === "" || job === "" || phone === "" || email === "" || image === "") {
        message.textContent = "Please fill in all fields!";
        message.style.color = "red";
        return;
    }

    // 🔹 Full Name Validation (letters and spaces only)
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        message.textContent = "Full name must contain letters only!";
        message.style.color = "red";
        return;
    }

    // 🔹 Image URL Validation (must be a valid image link)
    const imagePattern = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/i;
    if (!imagePattern.test(image)) {
        message.textContent = "please only image name";
        message.style.color = "red";
        return;
    }

    // 🔹 Save data as object
    const cardData = { name, job, phone, email, image };
    localStorage.setItem("card", JSON.stringify(cardData));

    message.style.color = "green";
    message.textContent = "Card saved successfully! Go to Preview page.";
}

function loadCard() {
    const data = JSON.parse(localStorage.getItem("card"));
    if (!data) return;

    document.getElementById("cardName").textContent = data.name;
    document.getElementById("cardJob").textContent = data.job;
    document.getElementById("cardPhone").textContent = "📞 " + data.phone;
    document.getElementById("cardEmail").textContent = "📧 " + data.email;
    document.getElementById("cardImage").src = data.image;
}