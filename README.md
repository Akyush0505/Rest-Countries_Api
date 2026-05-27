# Rest-Countries_Api
# 🌍 Where in the World?

A country explorer app I built while practicing API integration and DOM manipulation in vanilla JavaScript. You can search for any country, filter by region, and click into a country to see detailed info like its borders, currencies, languages, and more.

---

## What it does

### Country Listing (Home Page)
Fetches data for every country in the world from a public REST API and displays them as cards. Each card shows the flag, population, region, and capital. You can:

- **Search** by country name — results filter live as you type
- **Filter by region** — Africa, Asia, Europe, Americas, Oceania
- Both work together at the same time

### Country Detail Page
Click any card and it takes you to a full detail page for that country. Shows:

- Native name, population, region, sub-region, capital
- Top level domain, currencies, languages
- Border countries as clickable buttons — clicking one takes you straight to that country's detail page

---

## Tech used

- HTML
- CSS (Flexbox, responsive with media queries)
- Vanilla JavaScript
- [REST Countries API](https://restcountries.com/) — free, no auth needed
- Google Fonts (Nunito)
- Font Awesome (icons)

---

## What I learned

- Fetching data from a real public API using `fetch()`
- Dynamically creating and injecting DOM elements from API data
- Using `URLSearchParams` to pass data between pages via the URL
- Filtering and searching an array in real time based on user input
- Using `async/await` inside a `.then()` chain for sequential API calls (border countries)
- Navigating between pages with `location.href` and `history.back()`

---

## How to run it

```bash
git clone https://github.com/your-username/where-in-the-world.git
cd where-in-the-world
# open index.html in your browser
```

> Note: Since the app makes API calls, open it through a local server (like VS Code Live Server) rather than directly as a file — some browsers block fetch requests on `file://` URLs.

---

Made with ❤️ by Ayush Jaiswal
