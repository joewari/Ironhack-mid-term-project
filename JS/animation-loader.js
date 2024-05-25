const removeSplashAnimation = () => {
    const splash = document.querySelector(".splash");
    setTimeout(() => {
        // body off anon func
        splash.classList.add("display-none");
    }, 2000);
};

document.addEventListener("DOMContentLoaded", removeSplashAnimation);