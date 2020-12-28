let buttonCatsUpdate = document.querySelector('#cats-update')
buttonCatsUpdate.addEventListener('click', updateInfo)

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
    if (!data || !Array.isArray(data)) {
        console.error("Error retrieving data!")
    }

    data.forEach(gato => {
        if (!gato['fecha-alta']) {
            createRow(gato)
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