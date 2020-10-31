let PATH = "/api/v2/tickets"
var API_KEY = "eBpzeQu1HtIAZl8A9CTn";
var FD_ENDPOINT = "humpyreddy96assist";
var password = "friends123";
var URL =  "https://" + FD_ENDPOINT + ".freshdesk.com"+ PATH;
API_KEY = window.btoa(API_KEY);
let headers = new Headers();
headers.append('Access-Control-Allow-Origin','Authorization', 'Basic ' +"humpy.reddy96" + ":" + password);
let name 
let email 
let phone 
let job_title 
let subject 
let description 
let ticketDetails

let submitTicket = ()=>{

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("contact-number").value;
    job_title = document.getElementById("job-title").value;
    subject = document.getElementById("subject").value;
    description = document.getElementById("description").value;
    ticketDetails = {
        name:name,
        email:email,
        phone:phone,
        job_title:job_title,
        subject:subject,
        description:description

    }

   
    createTicket(ticketDetails);
    
}


//created Ticket

const createTicket = async (ticketDetails)=>{
    let sending = {
        name:ticketDetails.name,
        email:ticketDetails.email,
        phone:ticketDetails.phone,
        subject:ticketDetails.subject,
        requester_id:1000,
        description:ticketDetails.description,
        priority:1,
        status:2
        
    }
    const result = await fetch(URL,{
        method:'POST',
        mode:'cors',
        headers: {
            'Content-Type' : 'application/json', 
            'Authorization' : 'Basic ' + API_KEY + ':' + password
        },      
          body:JSON.stringify(sending)
    });
    const data = await result.json();
    console.log(data)

}








