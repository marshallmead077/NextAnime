// ---------- SEARCH DATA ----------
const animeList = [
  { name: "86 Eighty-Six", link: "anime/86-Eighty-Six.html" },
  { name: "I Left My A-Rank Party to Help My Former Students Reach the Dungeon Depths!", link: "anime/a-rank-party.html" },
  { name: "Aggressive Retsuko", link: "anime/aggressive-retsuko.html" },
  { name: "Aharen-san wa Hakarenai", link: "anime/aharen-san.html" }
];

function searchAnime() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let results = document.getElementById("results");

  results.innerHTML = "";

  animeList.forEach(anime => {
    if (anime.name.toLowerCase().includes(input) && input !== "") {
      let li = document.createElement("li");
      let a = document.createElement("a");

      a.href = anime.link;
      a.textContent = anime.name;

      li.appendChild(a);
      results.appendChild(li);
    }
  });
}

// ---------- GENRE FILTER ----------
function filterAnime() {
  let selected = document.getElementById("genreFilter").value;
  let items = document.querySelectorAll("#animeList li");

  items.forEach(item => {
    let genres = item.getAttribute("data-genre");

    if (selected === "all" || genres.includes(selected)) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
}