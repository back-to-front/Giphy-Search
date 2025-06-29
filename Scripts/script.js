const apiKey = 'SBSBlCDt9Wc8935Yk28RyhpHh1jhh9ur';

async function fetchData() {
  try {
    const searchItem = document.getElementById('searchItem').value;
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=20&q=${searchItem}`
    );

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }
    const data = await response.json();
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = '';

    // 4 columns
    const columns = Array.from({ length: 4 }, () => {
      const col = document.createElement('div');
      col.className = 'gif-column';
      gifContainer.appendChild(col);
      return col;
    });

    // Distribute in rows
    data.data.forEach((gifData, idx) => {
      const img = document.createElement('img');
      img.src = gifData.images.fixed_width.url;
      img.alt = 'GIF';
      img.className = 'gifs';
      columns[idx % 4].appendChild(img);
    });
  } catch (error) {
    console.error(error);
  }
}
