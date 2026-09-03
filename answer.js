// Question No. 1: Value Detective

function describeValue(value) {
  
  let type = typeof value;
  if (value === null) {
    type = "object";
  }

  let truthyOrFalsy = value ? "truthy" : "falsy";

  return type + " | " + truthyOrFalsy;
}


// Question No. 2: Bangladesh Weekend Machine
function getDayType(dayName) {

  const lowerCaseDay = dayName.toLowerCase();

  switch (lowerCaseDay) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}


// Question No. 3: Username Gatekeeper
function validateUsername(username) {

  if (username.length < 4) {
    return "Too Short";
  }

  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }

  return "Available";
}


// Question No. 4: Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0) {

  let fare = 50;

  if (distance > 2) {
    const extraKm = distance - 2;
    fare += extraKm * 15;
  }

  fare += waitingMinutes * 2;

  if (isNight) {
    fare = fare * 1.2; // Adding 20% is the same as multiplying by 1.2
  }
  
  return fare;
}

console.log(getCngFare(5, true));
