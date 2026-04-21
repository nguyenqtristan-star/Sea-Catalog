const players = [
  {name: "Logan O'hoppe", type: "hitter", position: "C", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/b/bc765323_mlbam.jpg", statshot: "assets/angels hitting/O'hoppe.png", season: {BA: 0.211, HR: 1, OPS: 0.624, WAR: 0.0}, career: {BA: 0.230, HR: 54, OPS: 0.691, WAR: 3.1}},
  {name: "Nolan Schanuel", type: "hitter", position: "1B", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/6/6b5d784d_mlbam.jpg", statshot: "assets/angels hitting/Schanuel.png", season: {BA: 0.227, HR: 2, OPS: 0.631, WAR: -0.2}, career: {BA: 0.257, HR: 28, OPS: 0.719, WAR: 2.4}},
  {name: "Oswald Peraza", type: "hitter", position: "2B", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/8/8debd41f_mlbam.jpg", statshot: "assets/angels hitting/Peraza.png", season: {BA: 0.286, HR: 4, OPS: 0.919, WAR: 0.9}, career: {BA: 0.199, HR: 13, OPS: 0.581, WAR: 0.1}},
  {name: "Zach Neto", type: "hitter", position: "SS", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/9/99c490f1_mlbam.jpg", statshot: "assets/angels hitting/Neto.png", season: {BA: 0.247, HR: 5, OPS: 0.831, WAR: 1.3}, career: {BA: 0.247, HR: 63, OPS: 0.761, WAR: 13}},
  {name: "Yoan Moncada", type: "hitter", position: "3B", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/a/a1f9b20b_mlbam.jpg", statshot: "assets/angels hitting/Moncada.png", season: {BA: 0.172, HR: 3, OPS: 0.686, WAR: 0.2}, career: {BA: 0.251, HR: 108, OPS: 0.757, WAR: 15.1}},
  {name: "Josh Lowe", type: "hitter", position: "LF", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/8/89993d7d_mlbam.jpg", statshot: "assets/angels hitting/Lowe.png", season: {BA: 0.167, HR: 3, OPS: 0.598, WAR: 0.0}, career: {BA: 0.247, HR: 46, OPS: 0.716, WAR: 4.9}},
  {name: "Mike Trout", type: "hitter", position: "CF", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/f/f322d40f_mlbam.jpg", statshot: "assets/angels hitting/Trout.png", season: {BA: 0.236, HR: 7, OPS: 0.984, WAR: 1.4}, career: {BA: 0.293, HR: 411, OPS: 0.977, WAR: 88.8}},
  {name: "Jo Adell", type: "hitter", position: "RF", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/9/98252b93_mlbam.jpg", statshot: "assets/angels hitting/Adell.png", season: {BA: 0.302, HR: 3, OPS: 0.771, WAR: 0.4}, career: {BA: 0.224, HR: 78, OPS: 0.698, WAR: 0.9}},
  {name: "Jorge Soler", type: "hitter", position: "DH", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/1/16ed1b92_mlbam.jpg", statshot: "assets/angels hitting/Soler.png", season: {BA: 0.231, HR: 5, OPS: 0.849, WAR: 0.3}, career: {BA: 0.240, HR: 208, OPS: 0.787, WAR: 6.7}},
  {name: "Adam Frazier", type: "hitter", position: "UT", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/b/b26acf0e_mlbam.jpg", statshot: "assets/angels hitting/Frazier.png", season: {BA: 0.333, HR: 1, OPS: 0.989, WAR: 0.5}, career: {BA: 0.265, HR: 68, OPS: 0.712, WAR: 16.0}},
  {name: "Bryce Teodosio", type: "hitter", position: "OF", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/6/64445c21_mlbam.jpg", statshot: "assets/angels hitting/Teodosio.png", season: {BA: 0.105, HR: 0, OPS: 0.255, WAR: -0.2}, career: {BA: 0.183, HR: 1, OPS: 0.493, WAR: 0.0}},
  {name: "Jeimer Candelario", type: "hitter", position: "CI", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/b/bac9465f_mlbam.jpg", statshot: "assets/angels hitting/Candelario.png", season: {BA: 0.111, HR: 0, OPS: 0.422, WAR: -0.2}, career: {BA: 0.236, HR: 110, OPS: 0.410, WAR: 9.1}},
  {name: "Vaughn Grissom", type: "hitter", position: "IF", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/5/5c8ffaf7_mlbam.jpg", statshot: "assets/angels hitting/Grissom.png", season: {BA: 0.286, HR: 0, OPS: 0.730, WAR: 0.1}, career: {BA: 0.257, HR: 5, OPS: 0.659, WAR: 0.1}},
  {name: "Travis d'Arnaud", type: "hitter", position: "C", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/2/2a658101_mlbam.jpg", statshot: "assets/angels hitting/D'Arnaud.png", season: {BA: 0.143, HR: 0, OPS: 0.414, WAR: 0.0}, career: {BA: 0.245, HR: 129, OPS: 0.725, WAR: 8.2}},

  {name: "Jose Soriano", type: "pitcher", position: "Starter", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/8/80a7fa21_mlbam.jpg", statshot: "assets/angels pitching stats/Soriano.png", season: {ERA: 0.28, IP: 32.2, SO: 39, WAR: 2.1}, career: {ERA: 3.56, IP: 356.2, SO: 344, WAR: 6.8}},
  {name: "Jack Kochanowicz", type: "pitcher", position: "Starter", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/f/f3f83ac6_mlbam.jpg", statshot: "assets/angels pitching stats/Kachanowicz.png", season: {ERA: 3.47, IP: 23.1, SO: 18, WAR: 0.4}, career: {ERA: 5.50, IP: 199.2, SO: 115, WAR: -0.4}},
  {name: "Reid Detmers", type: "pitcher", position: "Starter", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/7/77dfd1bb_mlbam.jpg", statshot: "assets/angels pitching stats/Detmers.png", season: {ERA: 3.57, IP: 22.2, SO: 26, WAR: 0.4}, career: {ERA: 4.71, IP: 472.0, SO: 524, WAR: 4.9}},
  {name: "Yusei Kikuchi", type: "pitcher", position: "Starter", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/2/20af2ca1_mlbam.jpg", statshot: "assets/angels pitching stats/Kikuchi.png", season: {ERA: 7.50, IP: 18.0, SO: 19, WAR: -0.4}, career: {ERA: 4.5, IP: 1006.0, SO: 1030, WAR: 7.2}},
  {name: "George Klassen", type: "pitcher", position: "Starter", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/6/6597af81_mlbam.jpg", statshot: "assets/angels pitching stats/Klassen.png", season: {ERA: 11.57, IP: 4.2, SO: 6, WAR: -0.4}, career: {ERA: 11.57, IP: 4.2, SO: 6, WAR: -0.4}},
  {name: "Jordan Romano", type: "pitcher", position: "Closer", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/a/a37855fb_mlbam.jpg", statshot: "assets/angels pitching stats/Romano.png", season: {ERA: 7.11, IP: 6.1, SO: 10, WAR: -0.2}, career: {ERA: 3.81, IP: 278.2, SO: 342, WAR: 5.9}},
  {name: "Brent Suter", type: "pitcher", position: "Reliever", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/3/30728ed9_mlbam.jpg", statshot: "assets/angels pitching stats/Suter.png", season: {ERA: 2.40, IP: 15.0, SO: 15, WAR: 0.4}, career: {ERA: 3.54, IP: 612.1, SO: 511, WAR: 7.8}},
  {name: "Sam Bachman", type: "pitcher", position: "Reliever", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/c/c2515148_mlbam.jpg", statshot: "assets/angels pitching stats/Bachman.png", season: {ERA: 3.48, IP: 10.1, SO: 11, WAR: 0.2}, career: {ERA: 4.53, IP: 47.2, SO: 43, WAR: 0.4}},
  {name: "Drew Pomeranz", type: "pitcher", position: "Reliever", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/4/4b252f81_mlbam.jpg", statshot: "assets/angels pitching stats/Pomeranz.png", season: {ERA: 4.50, IP: 8.0, SO: 5, WAR: 0.0}, career: {ERA: 3.82, IP: 919.0, SO: 945, WAR: 13.3}},
  {name: "Chase Silseth", type: "pitcher", position: "Reliever", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/1/1cd7c9ed_mlbam.jpg", statshot: "assets/angels pitching stats/Silseth.png", season: {ERA: 2.35, IP: 7.2, SO: 9, WAR: 0.3}, career: {ERA: 0.90, IP: 107.2, SO: 114, WAR: 0.9}},
  {name: "Shaun Anderson", type: "pitcher", position: "Reliever", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/f/f5dadbc8_mlbam.jpg", statshot: "assets/angels pitching stats/Anderson.png", season: {ERA: 5.84, IP: 12.1, SO: 9, WAR: -0.1}, career: {ERA: 6.35, IP: 175.2, SO: 137, WAR: -2.3}},
  {name: "Ryan Zeferjahn", type: "pitcher", position: "Reliever", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/e/e4141b75_mlbam.jpg", statshot: "assets/angels pitching stats/Zeferjahn.png", season: {ERA: 4.82, IP: 9.1, SO: 13, WAR: -0.1}, career: {ERA: 4.21, IP: 83.1, SO: 104, WAR: 1.0}},
  {name: "Mitch Farris", type: "pitcher", position: "Reliever", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/b/b61ab12b_mlbam.jpg", statshot: "assets/angels pitching stats/Farris.png", season: {ERA: 2.08, IP: 4.1, SO: 3, WAR: 0.1}, career: {ERA: 5.97, IP: 28.2, SO: 27, WAR: -0.3}},
  {name: "Ryan Johnson", type: "pitcher", position: "Reliever", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/4/45914a3e_mlbam.jpg", statshot: "assets/angels pitching stats/Johnson.png", season: {ERA: 16.20, IP: 3.1, SO: 2, WAR: -0.3}, career: {ERA: 9.00, IP: 18.0, SO: 18, WAR: -1.0}},
  {name: "Joey Lucchesi", type: "pitcher", position: "Reliever", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/9/92c172c7_mlbam.jpg", statshot: "assets/angels pitching stats/Lucchesi.png", season: {ERA: 7.71, IP: 2.1, SO: 2, WAR: -0.1}, career: {ERA: 4.09, IP: 435.1, SO: 421, WAR: 4.2}},
  {name: "Nick Sandlin", type: "pitcher", position: "Reliever", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/3/3b3a085b_mlbam.jpg", statshot: "assets/angels pitching stats/Sandlin.png", season: {ERA: 21.60, IP: 1.2, SO: 0, WAR: -0.3}, career: {ERA: 1.8, IP: 213.1, SO: 240, WAR: 1.8}},
  {name: "Walbert Urena", type: "pitcher", position: "Reliever", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/7/7dc4ee5a_mlbam.jpg", statshot: "assets/angels pitching stats/Urena.png", season: {ERA: 0.00, IP: 1.2, SO: 2, WAR: -0.5}, career: {ERA: 0.00, IP: 1.2, SO: 2, WAR: -0.5}},
  {name: "Sam Aldegheri", type: "pitcher", position: "Reliever", headshot: "https://www.baseball-reference.com/req/2025011210/images/headshots/4/45d9f9dd_mlbam.jpg", statshot: "assets/angels pitching stats/Aldegheri.png", season: {ERA: 5.40, IP: 1.2, SO: 2, WAR: 0.0}, career: {ERA: 6.35, IP: 28.1, SO: 24, WAR: -0.8}}
];

let currentStats = "season";
let currentTab = "hitter";
let currentSort = "name";
let sortDir = 1;
let currentPlayerIndex = 0;

function render() {
  let list = players.filter(p => p.type === currentTab);
  list.sort((a, b) => {
    let aVal = a[currentStats][currentSort] ?? a[currentSort];
    let bVal = b[currentStats][currentSort] ?? b[currentSort];
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
      ${currentTab === "hitter" ? `<td>${p[currentStats].BA ?? "-"}</td>` : ""}
      ${currentTab === "hitter" ? `<td>${p[currentStats].HR ?? "-"}</td>` : ""}
      ${currentTab === "hitter" ? `<td>${p[currentStats].OPS ?? "-"}</td>` : ""}
      ${currentTab === "hitter" ? `<td>${p[currentStats].WAR ?? "-"}</td>` : ""}
      ${currentTab === "pitcher" ? `<td>${p[currentStats].ERA ?? "-"}</td>` : ""}
      ${currentTab === "pitcher" ? `<td>${p[currentStats].IP ?? "-"}</td>` : ""}
      ${currentTab === "pitcher" ? `<td>${p[currentStats].SO ?? "-"}</td>` : ""}
      ${currentTab === "pitcher" ? `<td>${p[currentStats].WAR ?? "-"}</td>` : ""}
    `;
    body.appendChild(row);
  });
}

function setTab(tab) {
  currentTab = tab;
  document.getElementById("ba-header").style.display = tab === "hitter" ? "table-cell" : "none";
  document.getElementById("hr-header").style.display = tab === "hitter" ? "table-cell" : "none";
  document.getElementById("ops-header").style.display = tab === "hitter" ? "table-cell" : "none";
  document.getElementById("war-hitter-header").style.display = tab === "hitter" ? "table-cell" : "none";
  document.getElementById("era-header").style.display = tab === "pitcher" ? "table-cell" : "none";
  document.getElementById("ip-header").style.display = tab === "pitcher" ? "table-cell" : "none";
  document.getElementById("so-header").style.display = tab === "pitcher" ? "table-cell" : "none";
  document.getElementById("war-pitcher-header").style.display = tab === "pitcher" ? "table-cell" : "none";
  document.getElementById("hitter-glossary").style.display = tab === "hitter" ? "block" : "none";
  document.getElementById("pitcher-glossary").style.display = tab === "pitcher" ? "block" : "none";
  render();
  showPlayer(0);
}

function toggleStats() {
  currentStats = currentStats === "season" ? "career" : "season";
  document.querySelector("[onclick='toggleStats()']").textContent = currentStats === "season" ? "Career Stats" : "Season Stats";
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

function showPlayer(index) {
  let list = players.filter(p => p.type === currentTab);
  currentPlayerIndex = index;
  document.getElementById("headshot-img").src = list[index].headshot ?? "";
  document.getElementById("statshot-img").src = list[index].statshot ?? "";
  document.getElementById("player-name").textContent = list[index].name;
}

function prevPlayer() {
  let list = players.filter(p => p.type === currentTab);
  currentPlayerIndex = (currentPlayerIndex - 1 + list.length) % list.length;
  showPlayer(currentPlayerIndex);
}

function nextPlayer() {
  let list = players.filter(p => p.type === currentTab);
  currentPlayerIndex = (currentPlayerIndex + 1) % list.length;
  showPlayer(currentPlayerIndex);
}

setTab("hitter");