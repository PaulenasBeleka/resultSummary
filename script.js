function mygtukas(){
    alert("Paspaudei");
}

fetch("data.json")
.then(function(response){
    return response.json();
})
.then(function(score){
    let reactionOut = document.querySelector("#reaction-output")
    reactionOut.innerHTML = score.find(item => item.category=="Reaction").score;
})