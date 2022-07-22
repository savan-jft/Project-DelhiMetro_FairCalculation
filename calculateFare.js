function dropDown(){
    var stationList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i=0;i<=stationList.length-1;i++)
    {
    document.getElementById('sourceStation').innerHTML+=`<option value=${i+1}>${stationList[i]}</option>`;
 
    document.getElementById('destStation').innerHTML+=`<option value=${i+1}>${stationList[i]}</option>`;
    }
}
dropDown();



function calculateFair(){
    let initialDest = document.getElementById('sourceStation').value;
    // console.log(initialDest);
    let finalDest = document.getElementById('destStation').value;
    // console.log(finalDest);

    let noOfStations =Math.abs(initialDest - finalDest);

    var fair = 0;

    if(noOfStations>=0 && noOfStations<=4){
        fair = 10;
    } 
    else if(noOfStations>=5 && noOfStations<=8){
        fair = 20;
    }
    else if(noOfStations>=9 && noOfStations<=12){
        fair = 30;
    }
    else if(noOfStations>=13 && noOfStations<=16){
        fair = 40;
    }
    else if(noOfStations>=17 && noOfStations<=20){
        fair = 50;
    }
    else if(noOfStations>=21 && noOfStations<=24){
        fair = 60;
    }
    else{s
        fair = 70;
    }



    let card = document.getElementById('card').value;
    let token = document.getElementById('token').value;

    console.log(card);
    console.log(token);
    let discount = 10;
    
    function disc(fair){
        if(noOfStations <= 4){
            return fair;
        }
        else
        {
            if(card){
                return fair-(Math.floor((fair*discount)/100));
            }
            else{
                return fair;
            }
        }
    }


    let final_fair = disc(fair);
    console.log(final_fair);
    document.getElementById('fare').value = final_fair;
}
 




 