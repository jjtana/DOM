const form = document.getElementById("form");
const errorMessage = document.getElementById("error-message");
const namee = form.name;
const last = form.lastn;
const mati = form.mati;
const nota = form.note;
const cont = document.getElementById("cont");
const data = []; 

const editar = (matri) => {
    let indice = data.findIndex((ob) => {
        return ob.mati === matri;
    });

    if (indice !== -1) {
        const nuevoNombre = prompt("Ingrese el nuevo nombre:");
        const nuevoApellido = prompt("Ingrese el nuevo apellido:");
        const nuevoMatri= prompt("Ingrese la nueva matricula:");
        const nuevoNota = prompt("Ingrese la nueva nota:");
        if (nuevoNombre !== null) {
            data[indice].name = nuevoNombre;
            data[indice].lastn = nuevoApellido;
            data[indice].mati = nuevoMatri;
            data[indice].nota = nuevoNota;
            
           
            actualizarTabla();
        }
    } else {
        console.log('Objeto no encontrado en el array');
    }
};

const borrar = (matri) => {
   
    let indice = data.findIndex((ob) => {
        return ob.mati === matri;
    });

    if (indice !== -1) {
        data.splice(indice, 1);
       
       
        actualizarTabla();
    } else {
        console.log('Objeto no encontrado en el array');
    }
};

const actualizarTabla = () => {
    cont.innerHTML = "";
    data.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.lastn}</td>
            <td>${item.mati}</td>
            <td>${item.nota}</td>
            <td><button onclick="borrar('${item.mati}')">Eliminar</button></td>
        `;

        row.addEventListener("click", () => {
            
            editar(item.mati);
           
        });

        cont.appendChild(row);
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (namee.value.trim() === '' || last.value.trim() === '' || mati.value.trim() === '' || nota.value.trim() === '') {
        errorMessage.textContent = "Por favor, completa todos los campos antes de enviar el formulario.";
        errorMessage.style.display = "block";
        errorMessage.style.fontSize = "15px";
        return;
    }

    errorMessage.style.display = "none";

    data.push({
        name: namee.value,
        lastn: last.value,
        mati: mati.value,
        nota: nota.value
    });

    actualizarTabla();
    form.reset();
});
