let fields = [null, null, null, null, null, null, null, null, null];
let width = 70;
let height = 70;
let crossColor = "#FFC000";
let circleColor = "#00B0EF";
let currentPlayer = "circle";

function init() {
  render();
}

function render() {
  let contentDiv = document.getElementById("content");
  let tableHTML = "<table>";

  for (let i = 0; i < 3; i++) {
    tableHTML += "<tr>";
    for (let j = 0; j < 3; j++) {
      let index = i * 3 + j;
      let cellValue = fields[index];
      let displayValue =
        cellValue === "circle"
          ? generateCircleSVG()
          : cellValue === "cross"
          ? generateCrossSVG()
          : "";
      tableHTML += `<td id="cell-${index}" onclick="handleClick(${index})">${displayValue}</td>`;
    }
    tableHTML += "</tr>";
  }

  tableHTML += "</table>";
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

function handleClick(index) {
  if (!fields[index]) {
    fields[index] = currentPlayer;
    let cell = document.getElementById(`cell-${index}`);
    cell.innerHTML =
      currentPlayer === "circle" ? generateCircleSVG() : generateCrossSVG();
    cell.onclick = null;

    let winningCombination = checkWin();
    if (winningCombination) {
      renderWinLine(winningCombination);
    } else {
      currentPlayer = currentPlayer === "circle" ? "cross" : "circle";
    }
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
      return combination;
    }
  }

  return null;
}

function renderWinLine(winningCombination) {
  let contentDiv = document.getElementById("content");
  let svgHTML =
    '<svg class="winLine" width="400" height="400" viewBox="0 0 210 210" xmlns="http://www.w3.org/2000/svg">';

  let coordinates = {
    0: [35, 35],
    1: [105, 35],
    2: [175, 35],
    3: [35, 105],
    4: [105, 105],
    5: [175, 105],
    6: [35, 175],
    7: [105, 175],
    8: [175, 175],
  };

  let [startX, startY] = coordinates[winningCombination[0]];
  let [endX, endY] = coordinates[winningCombination[2]];

  svgHTML += `
        <line x1="${startX}" y1="${startY}" x2="${endX}" y2="${endY}" stroke="white" stroke-width="2">
            <animate attributeName="x2" from="${startX}" to="${endX}" dur="0.5s" fill="freeze" />
            <animate attributeName="y2" from="${startY}" to="${endY}" dur="0.5s" fill="freeze" />
        </line>
    `;
  svgHTML += "</svg>";

  let svgContainer = document.createElement("div");
  svgContainer.innerHTML = svgHTML.trim();
  contentDiv.appendChild(svgContainer.firstChild);
}

function restartGame() {
    fields = [null, null, null, null, null, null, null, null, null];
    currentPlayer = "circle";
    render();
  }