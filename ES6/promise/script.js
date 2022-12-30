/*
  Promises
a. Make your own interface to create tabs and display usernames by requesting users from the link below using Ajax ES6 fetch function: https://jsonplaceholder.typicode.com/users
Note: handle the response with promises using then and catch methods.

*/

var u = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    res.json().then((res) => {
      createUser(res);
    });
  })
  .catch((e) => {
    throw "error te get user";
  });
let ul1 = document.getElementsByTagName("ul")[0];

function createUser(users) {
  users.forEach((el) => {
    let li = document.createElement("li");
    li.innerText = el.name;
    li.id = el.id;
    ul1.append(li);
  });
  document.querySelectorAll("li").forEach((el) => {
    el.addEventListener("click", ({ target: t }) => {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${t.id}`)
        .then((res) => {
          res.json().then((res) => {
            let ulContent = document.getElementsByClassName("content")[0];
            ulContent.innerHTML = "";
            res.forEach((el) => {
              let li = document.createElement("li");
              li.innerText = el.body;
              ulContent.append(li);
            });
          });
        })
        .catch((e) => {
          throw "error to get tittle";
        });
    });
  });
}

//////////////////////////////////////////////////////ajax

/*
  b. When a user tab is clicked display its posts’ titles by requesting the posts from the link below using Ajax ES6 fetch function: 
https://jsonplaceholder.typicode.com/posts?userId=userId
Note: 
-	handle the response with promises using Async and await.
-	do not get the posts of all users on page load, the user tab must be clicked to request its posts.

*/
/*
let ul2 = document.getElementsByTagName("ul")[0];
let ulContent = document.getElementsByClassName("content")[0];

async function getUsers() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();
  users.forEach((el) => {
    let li = document.createElement("li");
    li.innerText = el.name;
    li.id = el.id;
    ul2.append(li);
  });
  document.querySelectorAll("li").forEach((el) => {
    el.addEventListener("click", async ({ target: t }) => {
      await getPosts(t.id);
    });
  });
}

async function getPosts(id) {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  let posts = await res.json();
  ulContent.innerHTML = "";
  posts.forEach((el) => {
    let li = document.createElement("li");
    li.innerText = el.body;
    ulContent.append(li);
  });
}
getUsers();
*/
