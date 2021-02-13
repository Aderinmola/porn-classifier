const paragraphs = document.querySelectorAll('p')
const headings = document.querySelectorAll("h1")

paragraphs.forEach(p => {
    if(p.innerHTML.includes("skills")){
        const newText = p.innerHTML.replace("skills", "Derin")
        p.innerHTML = newText
    } 
})

headings.forEach(h => {
    if(h.innerHTML.includes("skills")){
        const newText = h.innerHTML.replace("skills", "Derin")
        h.innerHTML = newText
    } 
})

// for(let p of paragraphs ){
//     if(p.innerHTML.includes("skills")){
//         const newText = p.innerHTML.replace("skills", "Derin")
//         p.innerHTML = newText
//     } 
// }
// for(let h of headings ){
//     if(h.innerHTML.includes("skills")){
//         const newText = h.innerHTML.replace("skills", "Derin")
//         h.innerHTML = newText
//     } 
// }

// console.log("Hello world")