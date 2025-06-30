const apiKey = 'SBSBlCDt9Wc8935Yk28RyhpHh1jhh9ur';
const btn = document.querySelector('.js-submit-btn');

btn.addEventListener('click', (event) => {
  fetchData();
});

document.getElementById('jsSearchItem').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    fetchData();
  }
});

document.querySelector('.sidebarIcon').addEventListener('click', (event) => {
  showSidebar();
});
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

document
  .querySelector('.sidebarHideIcon')
  .addEventListener('click', (event) => {
    hideSidebar();
  });
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

async function fetchData() {
  try {
    const searchItem = document.getElementById('jsSearchItem').value;
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=50&q=${searchItem}`
    );

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }
    const data = await response.json();
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = '';

    data.data.forEach((gifData) => {
      const img = document.createElement('img');
      img.src = gifData.images.fixed_width.url;
      img.alt = 'GIF';
      img.className = 'gifs';
      gifContainer.appendChild(img);
    });
  } catch (error) {
    console.error(error);
  }
}
