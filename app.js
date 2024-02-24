const form = document.getElementById("form")
const errorMessage = document.getElementById("error-message");
const namee = form.name
const last = form.lastn
const mati = form.mati
const nota = form.note
const btn = form.btn

const cont = document.getElementById("cont")
const data = []




form.addEventListener("submit",(e)=>{
    e.preventDefault()

    if (namee.value.trim() === '' || last.value.trim() === '' || mati.value.trim() === '' || nota.value.trim() === '') {
        errorMessage.textContent = "Por favor, completa todos los campos antes de enviar el formulario."
        errorMessage.style.display = "block"
        errorMessage.style.fontSize = "15px"
        return;
    }
    errorMessage.style.display = "none"

    cont.innerHTML=""
    data.push({

        name:namee.value,
        lastn:last.value,
        mati:mati.value,
        nota:nota.value
    })


data.forEach(data=>{

    const row = document.createElement("tr")
    row.innerHTML=`
                <td>${data.name}</td>
                <td>${data.lastn}</td>
                <td>${data.mati}</td>
                <td>${data.nota}</td>
    `
    cont.appendChild(row)


})

form.reset()

   
    
})
