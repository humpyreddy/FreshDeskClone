

//Main AddTicketButton from the main menu

let addTicketButton = document.getElementById("addTicket");
addTicketButton.addEventListener("click",()=>{
    location.href = "/ticket.html";
})



//Side Navigation Menu------------
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }  

//End of Side Navigation Menu