let API_KEY = "eBpzeQu1HtIAZl8A9CTn";
API_KEY = window.btoa(API_KEY);
let FD_ENDPOINT = "humpyreddy96assist";
let password = "friends123";
let ticket_id = getId();
let PATH = "/api/v2/tickets/"+ticket_id;
let URL =  "https://" + FD_ENDPOINT + ".freshdesk.com"+ PATH+"?include=requester";
let URL_ =  "https://" + FD_ENDPOINT + ".freshdesk.com"+ PATH



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
        
        document.getElementById("name").innerText = ticketData.requester.name;
        document.getElementById("subject").innerText = ticketData.subject;
        document.getElementById("description").innerText = ticketData.description_text;
        let name = ticketData.requester.name;
        let subject = ticketData.subject;
        let description = ticketData.description_text;

        let edit = document.getElementById("edit");
        edit.addEventListener("click",()=>{
            renderEditTicket(name,subject,description);
        })
        let update = document.getElementById("update");

        update.addEventListener("click",()=>{
            updateTicket();
        })

}
ticketDescription();

let renderEditTicket = (name,subject,description)=>{
        document.getElementById("name").style.visibility="hidden";
        document.getElementById("description").style.visibility="hidden"
        document.getElementById("subject").style.visibility="hidden"
        document.getElementById("update").disabled = false
        //name
        let name_input = document.createElement("input");
        name_input.setAttribute("id","name_input")
        name_input.setAttribute("type","text");
        name_input.setAttribute("value",name)
        let name_item = document.getElementById("name-")
        name_item.append(name_input)
        //subject
        let subject_input = document.createElement("input");
        subject_input.setAttribute("id","subject_input")
        subject_input.setAttribute("type","text");
        subject_input.setAttribute("value",subject);
        let subject_item = document.getElementById("sub");
        subject_item.append(subject_input);

        //description
        let desc_input = document.createElement("input");
        desc_input.setAttribute("id","desc_input");
        desc_input.setAttribute("type","textarea");
        desc_input.setAttribute("value",description);
        let desc_item = document.getElementById("desc");
        desc_item.append(desc_input)

}

let updateTicket = ()=>{
    let name = document.getElementById("name_input").value
    let subject = document.getElementById("subject_input").value
    let description = document.getElementById("desc_input").value
    updateTicketData(name,subject,description);

}

let updateTicketData = async (name,subject,description)=>{

    let result = await fetch(URL_,{
        method:'PUT',
        headers: {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin':'http://127.0.0.1:5500/',
            'Content-Type' : 'application/json', 
            'Authorization' : 'Basic ' + API_KEY + ':' + password
             },
        body: JSON.stringify({
            name : name,
            subject:subject,
            description:description
        })

    });

     result = await result.json();
     console.log(result)
}




let deleteTicket = ()=>{
    deleteTicketData();
    window.location = "/index.html"
}

const deleteTicketData  = async ()=>{
    const result = await fetch(URL_,{
        method:'DELETE',
        mode:'cors',
        headers: {
            'Content-Type' : 'application/json', 
            'Authorization' : 'Basic ' + API_KEY + ':' + password
        }   
    });
    console.log(result)
}

