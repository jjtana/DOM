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
    data.push({

        name:namee.value,
        lastn:last.value,
        mati:mati.value,
        nota:nota.value
    })


const tablita = data.map(dat=>{ 

    
  `<tr>
   <td>Juan</td>
   <td>ApellidoJuan</td>
   <td>1234-3213</td>
   <td>70</td>
  </tr>`

  
})

cont.appendChild(tablita)
   
    
})
