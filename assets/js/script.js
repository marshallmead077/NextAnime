const animeList = [
  { name: "86 Eighty-Six", link: "anime/86-Eighty-Six.html" }
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