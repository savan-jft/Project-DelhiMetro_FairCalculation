var stationList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Selecting Source and getting its value
var selectSource = document.getElementById("sourceStation"), stationList;

for(let i=0; i<stationList.length; i++){
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(stationList[i]);
    option.appendChild(txt);
    option.setAttribute("value", stationList[i]);
    selectSource.insertBefore(option,selectSource.lastChild);
}

function onSelectSource(){
    var source = document.getElementById('sourceStation').selectedIndex;
    console.log(source);
}
//console.log(source);



// Selecting Destination and getting its value
var selectDestination = document.getElementById("destStation"), stationList;

for(let i=0; i<stationList.length; i++){
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(stationList[i]);
    option.appendChild(txt);
    option.setAttribute("value", stationList[i]);
    selectDestination.insertBefore(option,selectDestination.lastChild);
}

function onSelectDest(){
    var destination = document.getElementById('destStation').selectedIndex;
    console.log(destination);
}



//getting payment method

function paymentMethod(){
    var payMethod = document.getElementById('payMethod').selectedIndex;
    var method = document.getElementsByTagName("option")[payMethod].value;
    console.log(method);
}

//console.log(method);


// calculating fare between stations

var a = 10;
var b = 1;
var value = Math.abs(b-a);
//console.log(value)



