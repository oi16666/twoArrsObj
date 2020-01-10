const userName = ["oi2019", "oi2018", "oi2017", "oi2016", "oi2015"];
const lastName = ["Ayran", "Johnson", "Doe", "Browns"];

function passUsers(users) {
  //pass in userName arr
  let user = [];
  for (let i = 0; i < users.length; i++) {
    user.push(users[i]);
  }
  return user;
}

function passLastName(lasts) {
  // Pass in const lastName as an argument
  let last = []; //initialize empty array
  for (let i = 0; i < lasts.length; i++) {
    //Loop until no more length
    last.push(lasts[i]);
  }
  return last;
}

let pass = passUsers(userName); //Storage value into variable pass

let last = passLastName(lastName); //Storage value into variable last

function zip(array_1, array_2) {
  const length =
    array_1.length > array_2.length ? array_1.length : array_2.length; // Get the longest array length to loop
  let zipped_array = [];
  for (let i = 0; i < length; ++i) {
    zipped_array.push({
      first: array_1[i] || null,
      second: array_2[i] || null
    });
  }
  return zipped_array;
}
console.log(zip(pass, last));
console.log(zip(pass, last));
