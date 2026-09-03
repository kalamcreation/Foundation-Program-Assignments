// Question No. 1: Value Detective

function describeValue(value) {
  
  let type = typeof value;
  if (value === null) {
    type = "object";
  }

  let truthyOrFalsy = value ? "truthy" : "falsy";

  return type + " | " + truthyOrFalsy;
}

console.log(describeValue(NaN)); 


