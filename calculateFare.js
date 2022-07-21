var noOfStations = Math.abs(source-destination);
var initialfair = 0;

if(noOfStations>=0 || noOfStations<=4){
    initialfair = 10;
  } 
  else if(noOfStations>=5 || noOfStations<=8){
    initialfair = 20;
  }
  else if(noOfStations>=9 || noOfStations<=12){
    initialfair = 30;
  }
  else if(noOfStations>=13 || noOfStations<=16){
    initialfair = 40;
  }
  else if(noOfStations>=17 || noOfStations<=20){
    initialfair = 50;
  }
  else if(noOfStations>=21 || noOfStations<=24){
    initialfair = 60;
  }
  else{
    initialfair = 70;
  }

//let initialfair = 20;
let disc = 10;
paymentMethod = 'A';
function disc(fair){
    if(noOfStations == 0){
        return initialfair;
    }
    else
    {
        if(paymentMethod == 'A'){
            return fair-(Math.floor((fair*disc)/100));
          }
        else{
            return fair;
          }
    }
}

let final_fair = desc(initialfair);
console.log(final_fair);