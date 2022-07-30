let input = document.getElementById("search")
input.addEventListener("keyup",search)

function search(){
    let input_value = input.value;
    let li = document.getElementsByTagName("li")
    for(i = 0; i<li.length; i++){
        if(li[i].innerHTML.toLowerCase().includes(input_value)){
            li[i].style.display = "";
        }

        else{
            li[i].style.display = "none"
        }
    }
}