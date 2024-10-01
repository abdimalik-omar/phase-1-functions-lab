// Function 1: Calculate distance from HQ in blocks
function distanceFromHqInBlocks(pickupLocation) {
    const headquarters = 42;
    const distance = Math.abs(pickupLocation - headquarters);
    return distance;
  }
  
  // Function 2: Convert block distance to feet
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feet = blocks * 264;
    return feet;
  }
  
  // Function 3: Calculate distance traveled in feet
  function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }
  
  // Function 4: Calculate fare price based on distance
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  // Exporting the functions for testing purposes
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  