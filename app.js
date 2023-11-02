const panes = document.querySelectorAll(".pane")

panes.forEach((pane) =>{
    pane.addEventListener("click",()=>{
        removeActiveClasses()
        pane.classList.add("active")
        
    })
})

function removeActiveClasses()
{
    panes.forEach((pane)=>{
        pane.classList.remove("active")
    })
}