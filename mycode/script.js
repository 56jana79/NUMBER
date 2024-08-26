const message=document.getElementById("message-input");

message.addEventListener("keydown",function(event){
    if(event.key="Enter");
    getmessage();
})

function getmessage(){

const messout = document.getElementById("message-output");
messout.innerHTML = message.value;


}