(async function(){

const contentDiv = document.getElementById('contentDiv');
const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');

const BASE_URL = window.location.href + 'api/';

function addSite(name, link, icon){
    const div = document.createElement('div');
    div.className = 'item';
    
    const a = document.createElement('a');
    a.href = link;
    a.innerText = name;

    if(icon){
        const img = document.createElement('img');
        img.src = icon;
        img.className = 'iconSite';
        div.appendChild(img);
    }
    
    div.appendChild(a);
    contentDiv.appendChild(div);
}

function addEmptyMessage(){
    const p = document.createElement('p');
    p.innerText = 'No website found!';
    contentDiv.appendChild(p);
}

function enableSearchButton(enable){
    if(enable){
        searchButton.disabled = false;
        searchButton.value = 'Search';
    }else{
        searchButton.disabled = true;
        searchButton.value = 'Searching...';
    }
}

function clearSites(){
    contentDiv.innerHTML = '';
}

async function delay(time){
    return new Promise((res) => setTimeout(res, time));
}

async function search(){

    //disbale button for search
    enableSearchButton(false);

    const filter = searchBar.value;
    let response = {};
    
    try { 
        response = await fetch(BASE_URL + 'search?filter=' + filter);
    }catch(e){
        response = {text: () => 'Server does not respond!'};
    }

    if(!response.ok){
        alert(await response.text());
        enableSearchButton(true);
        return;
    }

    const sites = await response.json();

    await delay(300);
    clearSites();

    if(sites.length == 0){
        addEmptyMessage();
        enableSearchButton(true);
        return;
    }

    for(const {name, link, icon} of sites){
        addSite(name, link, icon);
    }

    enableSearchButton(true);
}

searchButton.onclick = search;

})();