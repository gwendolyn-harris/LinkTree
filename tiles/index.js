async function getJSON(filepath) {
  const response = await fetch(filepath);
  const json = await response.json();
  return json;
}

async function main() {
  siteList = await getJSON('sitelist.json');
  
  rows = (siteList.length * (3/2)) - 1;
  document.getElementById('app').style = `grid-template-rows: repeat(${rows});`
  const appDiv = document.getElementById('app');

  for (site in siteList) {
    appDiv.innerHTML += `<a href=${siteList[site].url} class="StyledButton" title="${siteList[site].description}">
    <img class="Icons" src=${siteList[site].iconPath} alt="${siteList[site].siteName} logo"> 
    <span class="SiteName"> ${siteList[site].siteName} </span>
    </a>`
    if (((site + 1) % 3) != 0) {
      appDiv.innerHTML += `<div class="SkinnyButtonGap"></div>`
    }
    else {
      appDiv.innerHTML += `<div class="ShortButtonGap"></div>
      <div class="SmallButtonGap"></div>
      <div class="ShortButtonGap"></div>
      <div class="SmallButtonGap"></div>
      <div class="ShortButtonGap"></div>`
    }
  }
}

main();