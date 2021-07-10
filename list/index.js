async function getJSON(filepath) {
  const response = await fetch(filepath);
  const json = await response.json();
  return json;
}

async function main() {
  siteList = await getJSON('sitelist.json');

  document.getElementById('app').style = `display: grid; grid-template-rows: repeat(${siteList.length}, 84px); row-gap: 12px;`
  const appDiv = document.getElementById('app');

  for (site in siteList) {
    appDiv.innerHTML += `<a href=${siteList[site].url} class="StyledButton">
    <img class="Icons" src=${siteList[site].iconPath} alt="${siteList[site].siteName} logo"> 
    <div class="Text">
    <span class="SiteName"> ${siteList[site].siteName} </span>
    <span class="Description"> ${siteList[site].description} </span>
    </div>
    </a>`;
  }
}

main();
