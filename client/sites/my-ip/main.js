(async function(){

    const ipText = document.getElementById('ipText');
    const messageLabel = document.getElementById('messageLabel');
    const response = await fetch('/api/ip');

    if(!response.ok){
        alert(await response.text());
        return;
    }

    ipText.innerText = await response.text();
    ipText.onclick = () => {
        navigator.clipboard.writeText(ipText.innerText);
        messageLabel.innerText = 'Copied!';
    };
    
})();