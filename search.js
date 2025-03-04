export async function performSearch(query, apiKey, searchEngineId) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`
    );
    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return [];
    }

    const results = data.items.map((item) => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet,
    }));

    return results;
  } catch (error) {
    console.error("Chyba při vyhledávání:", error);
    throw error;
  }
}

export function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}
