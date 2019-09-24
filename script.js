function openSideMenu(){
    document.getElementById('side-menu').style.width = '120px';
    // document.getElementById('contact').style.marginLeft = '120px'; 
    document.querySelector('.hamb').style.visibility = 'hidden';

}

function closeSideMenu(){
    document.getElementById('side-menu').style.width = '0px';
    // document.getElementById('main-pages').style.marginLeft = '0px'; 
    document.querySelector('.hamb').style.visibility = 'visible';

}

var html = '<nav class="navbar">\
<span class="hamb"> \
    <a href="#" onclick="openSideMenu()">\
        <svg class="svg-hamb" width="30" height="30">\
            <path d= "M0,5 30,5" stroke="rgba(139, 73, 104, 0.76)" stroke-width="5"/>\
            <path d= "M0,14 30,14" stroke="rgba(139, 73, 104, 0.76)" stroke-width="5"/>\
            <path d= "M0,23 30,23" stroke="rgba(139, 73, 104, 0.76)" stroke-width="5"/>\
        </svg>\
    </a>\
</span>\
</nav>\
<div id="side-menu" class="side-nav">\
    <a href="#" class="btn-close" onclick="closeSideMenu()">&times;</a>\
    <a href= "index.html">Home</a>\
    <a href= "aboutme.html">About me</a>\
    <a href= "projects.html">Projects</a>\
    <a href= "contact.html">Contact</a>\
</div>';

document.getElementById('sidenav').innerHTML = html;


