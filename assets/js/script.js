
// Sidebar 
// ********************************
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }





// Side form 
// ********************************
function openContact() {
  document.getElementById("sideContact").style.width = "350px";
}
function closeContact() {
  document.getElementById("sideContact").style.width = "0";
}



// Transparent navbar
// ********************************
window.onscroll = function() {
  scrollFunction();
}

function scrollFunction() {

  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    document.getElementById('navbar').style.backgroundColor = '#F1E3D3';
    document.getElementById('navbar').style.marginTop = '0px';
  } else {

    document.getElementById('navbar').style.backgroundColor = '#F1E3D300';
    document.getElementById('navbar').style.marginTop = '15px';
  }
}