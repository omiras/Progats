let buttonCatsUpdate = document.querySelector('#cats-update')
buttonCatsUpdate.addEventListener('click', updateInfo)
let checkBoxAllCats = document.querySelector('#all-cats')
checkBoxAllCats.addEventListener('change', updateInfo)

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let gatos = JSON.parse(this.responseText)
        updateTable(gatos)
    }
};

function updateInfo() {
    xhttp.open("GET", "datos-ingresos/gatos.json", true);
    xhttp.send();
}

function updateTable(data) {
    // Muy opcional, para asegurarse que realmente hemos recuperado un array de datos. Porque si no, el foreach nos fallaría
    let tbody = document.querySelector('tbody')

    // TODO: Habría que buscar la manera de borrar los objetos con removeChild
    tbody.innerHTML = ""

    if (!data || !Array.isArray(data)) {
        console.error("Error retrieving data!")
    }

    data.forEach(gato => {
        if (checkBoxAllCats.checked || !gato['fecha-alta']) {
            createRow(gato)
        }

        // Si tiene fecha de alta, vamos a comprobar si esta es anterior a la fecha de ingreso para informar al equipo
        if (gato['fecha-alta'] < gato.ingresado) {
            console.error(`El registro cuyo gato es ${gato.nombre} tiene una fecha de alta anterior a la fecha de ingreso`)
        }


    });
}

function createRow(gato) {
    let tbody = document.querySelector('tbody')
    let newrow = document.createElement('tr')
    createCell(newrow, gato.nombre)
    createCell(newrow, gato.raza)
    createCell(newrow, parseLocalDate(gato.ingresado))

    tbody.appendChild(newrow)
}

function parseLocalDate(stringDate) {
    let timestamp = Date.parse(stringDate)
    return new Date(timestamp).toLocaleDateString('es-ES')
}

function createCell(row, info) {
    let cell = document.createElement('td')
    cell.textContent = info
    row.appendChild(cell)
}