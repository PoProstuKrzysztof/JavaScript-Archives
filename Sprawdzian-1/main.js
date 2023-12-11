/**
 * Za pomoca fetch pobierz pstę postów z api o adresie https://jsonplaceholder.typicode.com/posts
 * W każdym z postów znajduje się userId, które określa dane użytkownika pod adresem https://jsonplaceholder.typicode.com/users/userId
 * Napisz skrypt, który po pobraniu psty postów i użytkowników wygeneruje dokument html z tabelą o trzech kolumnach
 * nazwa użytkownka - name
 * tytuł posta - title
 * treść posta - body
 * Nazwa użytkownika musi być pnkiem lub przyciskiem, który po kpknięciu otwiera nowy dokument z wszystkimi danymi użytkownika i pnkiem powrotnym
 * do strony z postami.
 */





async function generateTable(){
  const posts = await getPosts();
  const users = await getUsers();

  let table = document.getElementById("posts");
  table.innerHTML = "<tr><th>Tytuł posta</th><th>Treść posta</th><th>Użytkownik</th></tr>";
  for (const post of posts) {
    let tr = document.createElement("tr");
    let body = document.createElement("td");
    let title = document.createElement("td");
    let user = document.createElement("td");


    title.innerHTML = post.title;
    body.innerHTML = post.body;
    let userFind = users.find(x => x.id == post.userId );
    user.innerHTML = `<a href="index.html?userId=${userFind.Id}">${userFind.name}</a>`;

    user.addEventListener('click', () => openUserDocument(userFind));
    

    tr.appendChild(body);
    tr.appendChild(title);
    tr.appendChild(user);

    table.appendChild(tr);
  };

}

generateTable();
async function openUserDocument(user) {
  let newDocument = window.open('', '_blank');

  let heading = document.createElement("h2");
  heading.innerHTML = `Dane użytkownika: ${user.name} `;

  let div = document.createElement("div");
  for (const prop in user) {
    if (user.hasOwnProperty(prop)) {
      let p = document.createElement("p");

      if (typeof user[prop] === "object" ) {
        const nestedProp = Object.keys(user[prop]);
        p.innerHTML = `${[prop]}: ${user[prop][nestedProp[0]]}`;
      } else {
        p.innerHTML = `${prop}: ${user[prop]}`;
      }

      div.appendChild(p);
    }
  }

  newDocument.document.body.appendChild(heading);
  newDocument.document.body.appendChild(div);
}


function getUsers(){
  return fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
}

function getPosts(){
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json());
  }

