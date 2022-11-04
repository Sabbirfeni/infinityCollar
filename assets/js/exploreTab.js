


function openTab(tab, tabName) {
    var i, tabcontent, tabLinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tabLinks = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabLinks[i].style.borderBottom = 'none';
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tab).style.borderBottom = "2px solid #F3771D";
}

document.getElementById("defaultOpen").click();










// console.log(tabLinks)

// tabLinks.forEach((value, index) => {
   
//     value.addEventListener('click', () => {
       
        
//     })
// })