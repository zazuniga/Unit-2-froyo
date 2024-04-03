function submitOrder() {
  const flavorsInput = document.getElementById("flavors");
  const flavors = flavorsInput.value.split(",");
  
  const flavorCount = {};
  for (const flavor of flavors) {
    flavorCount[flavor.trim()] = (flavorCount[flavor.trim()] || 0) + 1;
  }

  console.log("Froyo Order Summary:");
  for (const flavor in flavorCount) {
    console.log(`${flavor}: ${flavorCount[flavor]}`);
  }
}
