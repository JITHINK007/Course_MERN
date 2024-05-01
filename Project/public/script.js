function submitHandle(){
    alert("Form Submitted!!");
}

function clickHandle(){
    alert("Button Clicked!!");
}

function nameChange(){
    var name=document.getElementById("name").value;
    if(name==""){
        document.getElementById("name-err").innerText="Name cannot be empty";
    }
    else{
        document.getElementById("name-err").innerText="";
    }

}