function searchingMessage() {
    let btn = document.getElementById('searchButton');
    let message = document.getElementById('search');

    //add CSS animation class
    btn.addEventListener('click', () => {
        message.style.display = 'grid';
        message.classList.add('searching');
    });   

    //remove CSS animation class
    setTimeout(function() {
        message.style.display = 'none';
        message.classList.remove('searching');}, 3000);
}