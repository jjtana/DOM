const form = document.getElementById("form")
const namee = form.name
const last = form.lastn
const mati = form.mati
const nota = form.note
const btn = form.btn

const cont = document.getElementById("cont")
const data = []




form.addEventListener("submit",(e)=>{
    e.preventDefault()
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
