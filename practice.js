/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  In this repo your job is to write functions to make each function call work properly.

  Here's an example of code that will be given to you:

  sayHi('Hi Katie', function(thingToSay){
    alert(thingToSay);
  });

  It would be your job to create the sayHi function:

  var sayHi = function(str, cb){
    cb(str);
  }
*/

////////// PROBLEM 1 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

function first(arr, cb){
arr[0], cb(arr[0]); 
cb(arr.length-1); 

}

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ' + firstName);
  return firstName;
});
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

function last(arr, cb){
  arr[arr.length-1], cb(arr[arr.length-1]);
  cb(arr.length-1);
}

// Do not edit the code below.
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
  return lastName;
});
// Do not edit the code above.



////////// PROBLEM 3 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

function multiply(num1, num2, cb){
  cb(num1, num2)
return cb(num1 * num2)

}

// Do not edit the code below.
multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});
// Do not edit the code above.



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

const contains = (array2, name, cb2) => {
  array2.map(val => val === name ? cb2(true): cb2(false));
};

// Do not edit the code below.
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});
// Do not edit the code above.



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
*/

function uniq(arr, cb) {
  // let uniqueArr = new Set(arr);
  // let uniqs = Array.from(uniqueArr);
  // let names = (any);
  // cb(uniqs);
  let uniqueNames = [];
  for(let i = 0; i < arr.length; i++) {
    if(uniqueNames.includes(arr[i]) === false) {
      uniqueNames.push(arr[i]);
    }
  }
  // console.log(uniqueNames);
  // for(let i = arr.length - 1; i >=0; i--) {
  //   if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
  //     arr.splice(i, 1);
  //   }
  // }
  cb (uniqueNames);
}

// uniq(names);

// Do not edit the code below.
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});
// Do not edit the code above.



////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

function each(arr, cb){
  for (i = 0; i < arr.length; i++){
    cb(arr[i], i)
}
}

// Do not edit the code below.
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});
// Do not edit the code above.



////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

function getUserById(users, id, cb) {
  for (let i = 0; i < users.length; i++) {
    if (users [i].id = id) {
    cb(users[i])
    }
  }
}

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});

function newFunction(cb, arr) {
  cb(arr);
}

function newFunction(cb, num1, num2) {
  const newLocal = (cb, num1, num2);
  return newLocal;
}

function newFunction(cb, num1, num2) {
  return cb(num1, num2);
}
// Do not edit the code above.