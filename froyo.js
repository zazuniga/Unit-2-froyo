function submitOrder() {
    const flavorsInput = document.getElementById("flavors");
    const flavorsString = flavorsInput.value;
    const flavors = flavorsString.split(",");
  
    const uniqueFlavors = getUniqueFlavors(flavors);
    const flavorCount = countFlavors(flavors, uniqueFlavors);
  
    console.log("Froyo Order Summary:");
    for (let i = 0; i < uniqueFlavors.length; i++) {
      console.log(`${uniqueFlavors[i]}: ${flavorCount[i]}`);
    }
  }
  
  function getUniqueFlavors(flavors) {
    return [...new Set(flavors)]; // Using Set to get unique flavors
  }
  
  function countFlavors(flavors, uniqueFlavors) {
    const flavorCount = [];
  
    for (let i = 0; i < uniqueFlavors.length; i++) {
      let count = 0;
      for (const flavor of flavors) {
        if (flavor === uniqueFlavors[i]) {
          count++;
        }
      }
      flavorCount.push(count);
    }
  
    return flavorCount;
  }
  
