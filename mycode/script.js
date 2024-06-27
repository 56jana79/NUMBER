var variable=Math.floor(Math.random()*10 + 1); 
var total=10;
var number= document.getElementById("sc");
document.getElementById("btn").onclick=function(){
    var number= document.getElementById("sc");
    var input=document.getElementById("int").value 
    if(variable==input){
        alert("THE VALUE IS CORRECT BRO")
        total=total+1;
       document.body.style.backgroundColor="green"


       number.textContent="score:"+total;
    }else if(variable > input){
        alert("GIVE grater VALUE")
        total=total-1;
        document.body.style.backgroundColor="red"
        number.textContent="score:"+total;
    }else if(variable < input){
        alert("GIVE smaller VALUE")
        total=total-1;
        document.body.style.backgroundColor="red"
        number.textContent="score:"+total;
     } else{
        alert("THE VALUE IS WRONG")
        total=total-1;
        document.body.style.backgroundColor="red"
       number.textContent="score:"+total;
    }

}