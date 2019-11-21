//seleziono tutti i figli diretti della classe cool, in questo caso i tre macro <li>
const triggers = document.querySelectorAll('.cool > li');
//forma del contenitore delle info nel menù a cascata
const dropdownBackground = document.querySelector('.dropdownBackground');
//contenitore del dropdownBackground il quale dovrà avvere le coordinate giuste per apparire
const nav = document.querySelector('.top');

function show(e){
    
    this.classList.add('trigger-enter')
    setTimeout(() => this.classList.add('trigger-enter-active'), 150)
    dropdownBackground.classList.add('open')

    const dropdown = this.querySelector('.dropdown')
    const dropdownCords = dropdown.getBoundingClientRect()
    const navCords = nav.getBoundingClientRect()
    let cords = {
        height: dropdownCords.height,
        width: dropdownCords.width,
        left: dropdownCords.left,
        top: dropdownCords.top - navCords.top
    }
    dropdownBackground.style.setProperty('height', `${cords.height}px`);
    dropdownBackground.style.setProperty('width', `${cords.width}px`);
    dropdownBackground.style.setProperty('transform', `translate(${cords.left}px, ${cords.top}px)`)
}

function hide(e){
    dropdownBackground.classList.remove('open')
    this.classList.remove('trigger-enter')
    this.classList.remove('trigger-enter-active')
}


triggers.forEach(trigger => trigger.addEventListener('mouseenter', show));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', hide));
