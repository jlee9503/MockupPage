function onClickMenu() {
    /*
    let menu = document.getElementById('menu-list');
    
    if (menu.style.display === 'none' ) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }*/

    let menu = document.getElementById('menu-list');
    menu.classList.toggle('change');

    let openNav = document.getElementById('menu');
    openNav.classList.toggle('change');
}