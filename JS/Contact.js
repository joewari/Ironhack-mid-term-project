// const sendForm = async (extraInfoReceivedFromClickEvent) => {

//     extraInfoReceivedFromClickEvent.preventDefault();

//     let nameInput = document.querySelector("#name").value;
//     let emailInput = document.querySelector("#email").value;
//     let phoneInput = document.querySelector("#phone").value;
//     let messageInput = document.querySelector("#message").value;
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             body: JSON.stringify({
//                 title: nameInput,
//                 body: `${emailInput}, ${phoneInput}, ${messageInput}`, // 
//                 userId: 10,
//             }),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//             },
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }


//         console.log(response);
//         const userResponseCleaned = await response.json();
//         console.log(userResponseCleaned);


//         document.querySelector("#name").value = "";
//         document.querySelector("#email").value = "";
//         document.querySelector("#phone").value = "";
//         document.querySelector("#message").value = "";
//     } catch (error) {
//         console.error("Error", error);
//     }
// };


// document.querySelector(".btn-submit").addEventListener("click", sendForm);