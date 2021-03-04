const url = 'https://random-data-api.com/api/beer/random_beer?size=10';

async function getBeer() {

  const response = await fetch(url);
  const data = await response.json();

  let output = '<ul>';
  
  data.forEach((beer) => {
    // console.log(beer)           
    output += `
      <li>
        <a href='https://www.beeradvocate.com/search/?q=${beer.name}' target='_blank'>${beer.name}</a>
      </li>`
  })

  output += '</ul>';

  document.getElementById('output').innerHTML = output;

}

getBeer();

document.getElementById('getbeer').addEventListener('click', getBeer);