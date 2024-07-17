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
            let displayValue = cellValue === 'circle' ? 'o' : cellValue === 'cross' ? 'x' : '';
            tableHTML += `<td>${displayValue}</td>`;
        }
        tableHTML += '</tr>';
    }
    
    tableHTML += '</table>';
    contentDiv.innerHTML = tableHTML;
}

