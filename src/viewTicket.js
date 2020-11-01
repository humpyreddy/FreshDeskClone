let API_KEY = "eBpzeQu1HtIAZl8A9CTn";
API_KEY = window.btoa(API_KEY);
let FD_ENDPOINT = "humpyreddy96assist";
let password = "friends123";
let ticket_id = getId();
let PATH = "/api/v2/tickets/"+ticket_id+"?include=requester";
let URL =  "https://" + FD_ENDPOINT + ".freshdesk.com"+ PATH;


function getId (){
    return getParameterByName("id");
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const ticketDescription = async ()=>{

        const result = await fetch(URL,{
            method:'GET',
            mode:'cors',
            headers: {
                'Content-Type' : 'application/json', 
                'Authorization' : 'Basic ' + API_KEY + ':' + password
            },   
        });
        const ticketData = await result.json();
        console.log(ticketData.requester.name)
        console.log(ticketData.description_text);
        console.log(ticketData.subject)
        
        document.getElementById("name").innerText = ticketData.requester.name;
        document.getElementById("subject").innerText = ticketData.subject;
        document.getElementById("description").innerText = ticketData.description_text;

}
ticketDescription();

PATH = "/api/v2/tickets/"+ticket_id;
URL1 =  "https://" + FD_ENDPOINT + ".freshdesk.com"+ PATH;

let deleteTicket = ()=>{
    deleteTicketData();
}

const deleteTicketData  = async ()=>{
    const result = await fetch(URL1,{
        method:'DELETE',
        mode:'cors',
        headers: {
            'Content-Type' : 'application/json', 
            'Authorization' : 'Basic ' + API_KEY + ':' + password
        },   
    });
    console.log(result)
}

