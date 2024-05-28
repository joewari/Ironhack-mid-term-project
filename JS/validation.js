
const validateForm = () => {
    let nameInput = document.querySelector("#fname").value.trim();
    let emailInput = document.querySelector("#contact-email").value.trim();
    let phoneInput = document.querySelector("#phone").value.trim();
    let messageInput = document.querySelector("#message").value.trim();

    if (!nameInput && !emailInput && !phoneInput && !messageInput) {
        const formMessage = document.querySelector("#form-error");
        formMessage.style.display = "block";
        formMessage.textContent = "Error: All fields need to be filled before submitting.";
        setTimeout(() => {
            formMessage.style.display = "none";
            formMessage.textContent = "";
        }, 6000);
        return false;
    }

    return true;
};