let fields = ['circle', null, 'cross', null, null, null, null, null, null];
let width = 70;
let height = 70;
let crossColor = "#FFC000";
let circleColor = "#00B0EF";

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
            let displayValue = cellValue === 'circle' ? generateCircleSVG() : cellValue === 'cross' ? generateCrossSVG() : '';
            tableHTML += `<td>${displayValue}</td>`;
        }
        tableHTML += '</tr>';
    }
    
    tableHTML += '</table>';
    contentDiv.innerHTML = tableHTML;
}

function generateCircleSVG() {
    const svgHTML = `
        <svg width="${width}" height="${height}" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="30" stroke="${circleColor}" stroke-width="5" fill="none">
                <animate attributeName="stroke-dasharray" from="0, 188.4" to="188.4, 188.4" dur="400ms" fill="freeze" />
            </circle>
        </svg>
    `;
    return svgHTML;
}

function generateCrossSVG() {
    const svgHTML = `
        <svg width="${width}" height="${height}" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="10" x2="60" y2="60" stroke="${crossColor}" stroke-width="5">
                <animate attributeName="x2" from="10" to="60" dur="400ms" fill="freeze" />
                <animate attributeName="y2" from="10" to="60" dur="400ms" fill="freeze" />
            </line>
            <line x1="10" y1="60" x2="60" y2="10" stroke="${crossColor}" stroke-width="5">
                <animate attributeName="x2" from="10" to="60" dur="400ms" fill="freeze" />
                <animate attributeName="y2" from="60" to="10" dur="400ms" fill="freeze" />
            </line>
        </svg>
    `;
    return svgHTML;
}


