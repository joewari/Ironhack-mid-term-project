const sendForm = async (extraInfoReceivedFromClickEvent) => {
    extraInfoReceivedFromClickEvent.preventDefault();

    if (!validateForm()) {
        return;
    }

    let nameInput = document.querySelector("#fname").value.trim();
    let emailInput = document.querySelector("#contact-email").value.trim();
    let phoneInput = document.querySelector("#phone").value.trim();
    let messageInput = document.querySelector("#message").value.trim();

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: nameInput,
                body: `${emailInput}, ${phoneInput}, ${messageInput}`,
                userId: 10,
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseCleaned = await response.json();
        console.log(responseCleaned);

        document.querySelector("#fname").value = "";
        document.querySelector("#contact-email").value = "";
        document.querySelector("#phone").value = "";
        document.querySelector("#message").value = "";

        const formMessage = document.querySelector("#form-message");
        formMessage.style.display = "block";
        formMessage.textContent = "Form submitted successfully!";

        
        setTimeout(() => {
            formMessage.style.display = "none";
            formMessage.textContent = "";
        }, 6000);
    } catch (error) {
        console.error("Error", error);
    }
};

document.querySelector(".btn-submit").addEventListener("click", sendForm);



