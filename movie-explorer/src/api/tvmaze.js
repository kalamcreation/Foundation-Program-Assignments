const BASE_URL = "https://api.tvmaze.com";

export async function fetchAllShows() {
  const res = await fetch(`${BASE_URL}/shows`);
  if (!res.ok) throw new Error("Failed to fetch shows");
  return res.json();
}

export async function searchShows(query) {
  const res = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("Failed to search shows");
  const data = await res.json();
  // Normalize: search returns [{score, show}], so map to show
  return data.map((item) => item.show);
}

// Utility: strip HTML tags from TVMaze summaries
export function stripHtml(html = "") {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}