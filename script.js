const data = [
    "kelly",
    "hayato",
    "clu",
    "alwaro",
    "kiwi",
    "strawberry",
    "blueberry"
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = data.filter(item => item.toLowerCase().includes(searchTerm));
    displayResults(filteredData);
});

function displayResults(results) {
    searchResults.innerHTML = "";
    results.forEach(item => {
        const li = document.createElement(".name");
        li.textContent = item;
        searchResults.appendChild(li);
    });
}
