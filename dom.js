function dom(){
    let name=document.querySelector("#name").value;
    let city=document.querySelector("#city").value;
    document.querySelector("#sec").innerHTML=`<h1>${name} ${city}</h1>`
}
