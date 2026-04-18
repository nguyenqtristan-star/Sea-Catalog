const players = [
  { name: "Mike Trout", type: "hitter", position: "CF", avg: 0.301, hr: 40, era: null },
  { name: "Taylor Ward", type: "hitter", position: "RF", avg: 0.265, hr: 25, era: null },
  { name: "Reid Detmers", type: "pitcher", position: "Starter", avg: null, hr: null, era: 4.20 },
  { name: "Logan O'Hoppe", type: "hitter", position: "C", avg: 0.240, hr: 20, era: null }

];

let currentTab = "hitter";
let currentSort = "name";
let sortDir = 1;

function render() {
  let list = players.filter(p => p.type === currentTab);
  list.sort((a, b) => {
    let aVal = a[currentSort];
    let bVal = b[currentSort];
    if (aVal == null) return 1;
    if (bVal == null) return -1;
    if (typeof aVal === "string") {
      return aVal.localeCompare(bVal) * sortDir;
    }
    return (aVal - bVal) * sortDir;
  });
  const body = document.getElementById("table-body");
  body.innerHTML = "";
  list.forEach(p => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${p.name}</td>
    <td>${p.position}</td>
    <td>${p.avg ?? "-"}</td>
    <td>${p.hr ?? "-"}</td>
    ${currentTab === "pitcher" ? `<td>${p.era ?? "-"}</td>` : ""}
  `;
  body.appendChild(row);
  });
}

function setTab(tab) {
  currentTab = tab;
  document.getElementById("era-header").style.display = tab === "pitcher" ? "" : "none";
  render();
}
function sortBy(col) {
  if (currentSort === col) {
    sortDir *= -1;
  } else {
    currentSort = col;
    sortDir = 1;
  }
  render();
}

setTab("hitter");