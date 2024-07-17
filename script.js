let fields = ['circle', null, 'cross', null, null, null, null, null, null];


function init(){
    render();
}

function render() {
    let contentDiv = document.getElementById('content');
    let tableHTML = '<table>';
    
    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let cellValue = fields[index];
            let displayValue = cellValue === 'circle' ? generateCircleSVG() : cellValue === 'cross' ? 'x' : '';
            tableHTML += `<td>${displayValue}</td>`;
        }
        tableHTML += '</tr>';
    }
    
    tableHTML += '</table>';
    contentDiv.innerHTML = tableHTML;
}

function generateCircleSVG() {
    const svgHTML = `
        <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="30" stroke="#00B0EF" stroke-width="5" fill="none">
                <animate attributeName="stroke-dasharray" from="0, 188.4" to="188.4, 188.4" dur="400ms" fill="freeze" />
            </circle>
        </svg>
    `;
    return svgHTML;
}

// Beispiel: Füge den SVG-Code zu einem div mit der ID 'Content' hinzu
document.getElementById('content').innerHTML = generateCircleSVG();
