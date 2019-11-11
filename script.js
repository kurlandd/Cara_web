var boto = true;

    function menu() {
    if (boto == true){
        document.getElementById("hamburger").style.display = "flex";
        boto = false;
    } else  {
        document.getElementById("hamburger").style.display= "none";
        boto = true;
        document.getElementById("hamburger1").style.opacity = "1";
        boto = true;
        
    }
        
        
}
        