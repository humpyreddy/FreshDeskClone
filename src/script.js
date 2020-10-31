

var API_KEY = "eBpzeQu1HtIAZl8A9CTn";
var FD_ENDPOINT = "humpyreddy96assist";
var password = "friends123";
var PATH = "/api/v2/tickets?include=description&include=requester";
var URL =  "https://" + FD_ENDPOINT + ".freshdesk.com"+ PATH;
API_KEY = window.btoa(API_KEY);
let headers = new Headers();
headers.append('Authorization', 'Basic ' +API_KEY + ":" + password)
let TicketDetails;

//Viewing Tickets - Rendering Tickets
const viewTicket = async()=>{

  const result = await fetch(URL,{
      method:'GET',
      mode:'cors',
      headers: {
          'Content-Type' : 'application/json', 
          'Authorization' : 'Basic ' + API_KEY + ':' + password
      },      
  });
      const tickets = await result.json();
      console.log(tickets)
      renderTickets(tickets)
 
}

viewTicket();


let renderTickets = (tickets)=>{

  let ticket_container = document.getElementById("ticket-container");

 for(let i=0;i<tickets.length;i++){

        let subject= tickets[i].subject;
        let id = tickets[i].id;
        let name = tickets[i].requester.name;
        let email = tickets[i].requester.email;
        let phone = tickets[i].requester.phone;

        addRow(subject,name);
        let row = document.createElement("div");
        row.classList.add("row","my-row");
        ticket_container.append(row);
        let col = document.createElement("col");
        col.classList.add("col-lg-12")
        row.append(col);
        let card = document.createElement("div")
        card.classList.add("card")
        col.append(card);
        let card_body = document.createElement("div");
        card_body.classList.add("card-body");
        card.append(card_body);
        let sub = document.createElement("p");
        sub.classList.add("card-title");
        sub.innerText = subject;
        card_body.append(sub);
        let username = document.createElement("p");
        username.classList.add("card-subtitle" , "text-muted");
        username.innerText=name;
        card_body.append(username)
  }

}

let addRow =()=>{}



//retrieving specific ticket details



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

