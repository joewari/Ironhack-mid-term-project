const getHomePage = async () => {

    try {
        const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")


        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let cleanResponseProjects = await response.json();
        console.log(cleanResponseProjects)
        let content = document.querySelector(".Project-Summary")
        for (const project of cleanResponseProjects.slice(1).reverse()) {
            console.log(project)

            contentInfo = `
            <div class="project">
                <img src= "${project.image}" alt="">
                <h3>${project.name}</h3>
                <p> ${project.description}</p>
                <a href="#"> lear more</a>
            </d>
            `;
            content.innerHTML += contentInfo


        }



    } catch (errorcode) {
        console.error(errorcode);
    }
};
getHomePage()
