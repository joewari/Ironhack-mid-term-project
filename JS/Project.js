
const projectPage= async ()=>{
    try {
        let responseProject= await fetch ("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
    if (!responseProject.ok){
        throw new Error(`HTTP error! Status: ${responseProject.status}`); 
    }

    let cleanProject= await responseProject.json();

    console.log(cleanProject)
    let projectDisplay= document.querySelector(".Project-main")
for (const mainProject of cleanProject.slice(3)){
    console.log(mainProject)

    let DomProjectDisplay=`
    <div class="project=content>
        <article id="project">
            <h2> ${mainProject.name}</h2>
            <p> ${mainProject.description}</p>
        </article>
        <div class="date">
            <p> Completed on ${mainProject.completed_on}</p>
        </div>
        <div class="project-article">
            <img src="${mainProject.image}" alt="">
            <p>${mainProject.content}</p>
        </div>
    </div>
    `;
    projectDisplay.innerHTML +=DomProjectDisplay
}



    } catch (error) {
        console.error(error)
        
    }
};
projectPage ()