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

console.log(getDayType("MoNdaY")); 


