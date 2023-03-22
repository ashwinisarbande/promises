// const users = [
//   {
//     id: 2,
//     name: "Jonathon Haley",
//     username: "Monte.Weber2",
//     email: "Daphne43@yahoo.com",
//     phone: "1-563-675-1857 x11708",
//     website: "carmela.net",
//     password: "hashed_password",
//     ages: 34,
//   },
//   {
//     id: 3,
//     name: "Dean John",
//     username: "dd.1",
//     email: "deno@google.com",
//     phone: "1-123-543-1857 123212",
//     website: "dd.net",
//     password: "Dean_hashed_password",
//     ages: 23,
//   },
// ];

// Q1. Write a promise function to add a new record at the end of array users using
// spread operator,
// functions : addLast(users,temp)

// const addLast = (arrayUsers, temp) => {
//   return new Promise((resolve, reject) => {
//     if (arrayUsers.lenght === 0) {
//       reject({ msg: "Array is Empty" });
//     } else {
//       arrayUsers = [...arrayUsers, temp];
//       resolve(arrayUsers);
//     }
//   });
// };
// temp = {
//   id: 1,
//   name: "Jonathon Haley",
//   username: "Monte.Weber2",
//   email: "Daphne43@yahoo.com",
//   phone: "1-563-675-1857 x11708",
//   website: "carmela.net",
//   password: "hashed_password",
//   ages: 34,
// };
// console.log("problem1");
// addLast(users, temp)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res.msg);
//   });

// Q2. Write a promise function to add a new record at the begining of array users
// using spread operator,
// functions : addFirst(users,temp)

// const addFirst = (arrayUsers, temp) => {
//   return new Promise((resolve, reject) => {
//     if (arrayUsers.lenght === 0) {
//       reject({ msg: "Array is Empty" });
//     } else {
//       arrayUsers = [temp, ...arrayUsers];
//       resolve(arrayUsers);
//     }
//   }, 2000);
// };
// temp = {
//   id: 1,
//   name: "Jonathon Haley",
//   username: "Monte.Weber2",
//   email: "Daphne43@yahoo.com",
//   phone: "1-563-675-1857 x11708",
//   website: "carmela.net",
//   password: "hashed_password",
//   ages: 34,
// };
// console.log("problem2");
// addFirst(users, temp)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res.msg);
//   });

// Q3. Write a promise function to display all records only 3 fields id,name,
// username.
// functions : display(users)
// HINT : map

// const display = (users) => {
//   return new Promise((resolve, reject) => {
//     if (users.lenght === 0) {
//       reject({ msg: "rejected data" });
//     } else {
//       let res = "";
//       users.map((user) => {
//         res += user.id + "\t" + user.name + "\t" + user.username + "\n";
//       });

//       resolve(res);
//     }
//   });
// };
// console.log("problem3");
// display(users)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log(result.msg);
//   });

// Q4. Write a promise function which will display all records  with name ==='demon'
// function Name ---> findNameEquals(users)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with  the data in form of array
// HINT : Use filter.

// const findNameEquals = (users) => {
//   return new Promise((resolve, reject) => {
//     if (users.lenght === 0) {
//       reject({ msg: "rejected data" });
//     } else {
//       var filter = "name";
//       var keyword = "Dean John";
//       var result = users.filter(function (item) {
//         return item.name == keyword;
//       });
//       resolve(result);
//     }
//   });
// };
// console.log("problem4");
// findNameEquals(users)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log(result.msg);
//   });

// Q5. Write a promise function which will display all the records with only name & ages.
// function Name ---> findAll(users)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with  the data in form of array.
// HINT : Use map.

// const findAll = (arrayUsers) => {
//   return new Promise((resolve, reject) => {
//     if (users.lenght === 0) {
//       reject({ msg: "data not found" });
//     } else {
//       let res = "";
//       arrayUsers.map((user) => {
//         res += user.name + "\t" + user.ages + "\n";
//       });
//       resolve(res);
//     }
//   });
// };

// console.log("problem5");
// findAll(users)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log(result.msg);
//   });

// const family = [
//   {
//     name: "Jack",
//     age: 26,
//   },
//   {
//     name: "Jill",
//     age: 22,
//   },
//   {
//     name: "James",
//     age: 5,
//   },
//   {
//     name: "Jenny",
//     age: 2,
//   },
// ];

// Q6. Write a promise function which will display all the name with age > 26
// function Name ---> findAge(family)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array
// HINT : Use filter.

// const findAge = (family) => {
//   return new Promise((resolve, reject) => {
//     if (family.lenght === 0) {
//       reject({ msg: "No records Found" });
//     } else {
//       let ages = family.filter((a) => a.age > 20);
//       resolve(ages);
//     }
//   });
// };

// console.log("problem6");
// findAge(family)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res.msg);
//   });

// const data = [
//   {
//     name: "Butters",
//     age: 3,
//     type: "dog",
//   },
//   {
//     name: "Lizzy",
//     age: 6,
//     type: "dog",
//   },

//   {
//     name: "Red",
//     age: 1,
//     type: "cat",
//   },
//   {
//     name: "Joey",
//     age: 3,
//     type: "dog",
//   },
// ];
// Q7. Write a promise function which will display sum of all ages.
// function Name ---> findSumAges(data)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use reduce functions.

// const findNameAges = (data) => {
//   return new Promise((resolve, reject) => {
//     let result = 0;
//     result = data
//       .map(({ age }) => ({ age }))
//       .reduce((acc, curr) => {
//         return acc + curr.age;
//       }, 0);
//     if (data.length === 0) {
//       reject({ msg: "zero age" });
//     } else {
//       resolve({ msg: "Total age", count: result });
//     }
//   });
// };
// console.log("problem7");
// findNameAges(data, "B")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log(result.msg);
//   });
