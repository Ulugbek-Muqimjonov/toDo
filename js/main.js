var elform = document.querySelector(".form");
var elinp = document.querySelector(".form-inp");
var eltime =document.querySelector(".form-time");
var ellist = document.querySelector(".list");

var myArray = [];

function random(array) {
    ellist.innerHTML = "";

    array.forEach(function(item, index, arr) {
        var elitem = document.createElement("li");
        var eltitle = document.createElement("p");
        var eltime = document.createElement("p");

        elitem.classList.add("item");
         
        eltitle.textContent = item.title; 
        eltitle.classList.add("title");
        
        eltime.textContent = item.time;
        eltime.classList.add("time");
        
        elitem.appendChild(eltitle);
        elitem.appendChild(eltime);

        ellist.appendChild(elitem);
    });
}

random(myArray)

elform.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var elinpvalue = elinp.value.trim();
    var eltimevalue = eltime.value;

    var myobj = {
        title : elinpvalue,
        time : eltimevalue
    }
    
    myArray.unshift(myobj);
    random(myArray);

    elinp.value = "";
    eltime.value = "";
});
