// Code your solution in this file!

  function distanceFromHqInBlocks(block) {

    
    return Math.abs(block-42);

  }
  console.log(distanceFromHqInBlocks(43));

  function distanceFromBlock(block) {
    return Math.abs(block - 42);
  }
  console.log(distanceFromBlock(50));

  function distanceFromHqInFeet(block) {
    
    return Math.abs(block - 42)*264;
    }
  console.log(distanceFromHqInFeet(43));

  function distanceFromHqInFeet(block){
    return Math.abs(block - 42)*264;
  }
  console.log(distanceFromHqInFeet(50));

  function distanceFromHqInFeet(block){
    return Math.abs(block - 42)*264;
  }
  console.log(distanceFromHqInFeet(34));

  function distanceTravelledInFeet(start,end){
    return Math.abs(end-start)*264;
    return Math.abs(48-43)*264;

  }
  console.log(distanceTravelledInFeet(43,48));

  function calculatesFarePrice(start,destination){
const feet = Math.abs(destination-start)*264;
if (feet <=  400){
  return 0;
}else if(feet > 400 && feet <= 2000){
    return (feet - 400)*0.02;
}else if(feet > 2000 && feet <= 2500){
    return 25;
}else{
    return 'cannot travel that far';
}
}
console.log(calculatesFarePrice(43,44));
console.log(calculatesFarePrice(34,32));




  

//
 


   
   

                                 
  
  