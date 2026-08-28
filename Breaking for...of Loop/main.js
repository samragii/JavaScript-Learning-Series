const sports = ["Soccer", "Basketball", "Golf", "Cricket", "Tennis"];

// Loop through sports
for (let sport in sports) {

    // Display element in each iteration
    console.log(sports[sport])

    // Break loop if current element is "Golf"

      if(sports[sport]=="Golf"){
        
        break;
      }
    

}