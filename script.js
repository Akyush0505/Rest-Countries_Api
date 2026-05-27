const searchInput = document.querySelector(".search-container input")
const filterSelect = document.querySelector(".filter-by-region")
const countriesContainer = document.querySelector(".countries-container")

let allCountries = []

fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital")
.then((res) => res.json())
.then((data) => {
    allCountries = data
    renderCards(allCountries)
})

function renderCards(countries) {
    countriesContainer.innerHTML = ""

    if (countries.length === 0) {
        countriesContainer.innerHTML = `<p style="color:#999; font-size:18px;">No countries found.</p>`
        return
    }

    countries.forEach((country) => {
        const countryCard = document.createElement("a")
        countryCard.href = `country.html?name=${country.name.common}`
        countryCard.classList.add("country-card")
        countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="flag">
            <div class="card-text">
                <h3>${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital || "N/A"}</p>
            </div>
        `
        countriesContainer.append(countryCard)
    })
}

function filterAndSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase()
    const selectedRegion = filterSelect.value

    const filtered = allCountries.filter((country) => {
        const matchesSearch = country.name.common.toLowerCase().includes(searchTerm)
        const matchesRegion = selectedRegion === "" || country.region === selectedRegion
        return matchesSearch && matchesRegion
    })

    renderCards(filtered)
}

searchInput.addEventListener("input", filterAndSearch)
filterSelect.addEventListener("change", filterAndSearch)
