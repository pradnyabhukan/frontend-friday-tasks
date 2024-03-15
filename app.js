// import data from './data.json' assert { type: 'json' };

async function fetchData() {
    const response = await fetch('./data.json');
    const data = await response.json();
    console.log('data: ',data);
    displayData(data);
}

function displayData(data) {
    const container = document.getElementById('results-summary-component__categories');
    data.forEach(item => {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('results-summary-component__category');
      
      const iconImg = document.createElement('img');
      iconImg.classList.add('results-summary-component__icon');
      iconImg.src = item.icon;
      iconImg.alt = item.category;
      
      const categoryTitle = document.createElement('span');
      categoryTitle.classList.add('results-summary-component__title');
      categoryTitle.textContent = `${item.category}`;

      const categoryScore = document.createElement('span');
      categoryScore.classList.add('results-summary-component__score');
      categoryScore.textContent = `${item.score}`;

      const categoryTotalScore = document.createElement('span');
      categoryTotalScore.classList.add('results-summary-component__total-score');
      categoryTotalScore.textContent = `/ 100`;

      categoryDiv.appendChild(iconImg);
      categoryDiv.appendChild(categoryTitle);
      categoryDiv.appendChild(categoryScore);
      categoryDiv.appendChild(categoryTotalScore);
      container.appendChild(categoryDiv);
    });
}

fetchData();