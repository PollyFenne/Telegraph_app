const createForm = () => {
  
  const body = document.querySelector(".wrapall");
  //wrapped
  body.innerHTML =
    '<h1>Rainy Days</h1><form><div class="wrapper"><div><input dir="auto" id="title" contenteditable="true" type="text" placeholder="Title"></div><div><input dir="auto" id="name" contenteditable="true" type="text" placeholder="Your name"></div><div><input dir="auto" id="content" contenteditable="true" type="text" placeholder="Your story..."></div><button class="button" onsubmit="postEntry()">PUBLISH</button><div id="postSection"></div></div></form><div class = "backgroundScene"><div class="land"></div> <div class="rain"></div> <div class="tree"> <span></span> <span></span> <span></span> <span></span>';
  }

  const getStory = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        resolve([data.title, data.name, data.content]);
      } catch (err) {
        alert(err.message);
        reject(err);
      }
    });
  };


async function postEntry(e) {
  e.preventDefault();
  if (!e.target.title.value) {
    console.log("no post title");
    return;
  }
  try {
    const postData = {
      title: e.target.title.value,
      name: e.target.name.value,
      content: e.target.content.value,
    };
    console.log(postData)
    const options = {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch('http://localhost:3000/posts', options)
    .then(r => r.json())
    .then(data =>{
        data.title = postData.title;
        data.name = postData.name;
        data.content = postData.content;
        console.log(data.post_id);
        window.location.hash = `${data.post_id}`;
    })
} catch (err) {
    console.warn(err);
  }
}

  // create the title
const createTitle = (text) => {
  const div = document.createElement("h3");
  div.classList.add("title");
  div.innerText = text;

  return div;
};


// create the name
const createName = (text) => {
  const div = document.createElement("h4");
  div.classList.add("name");
  div.innerText = text;

  return div;
};


// create the content
const createContent= (text) => {
  const div = document.createElement("p");
  div.classList.add("content");
  div.innerText = text;
  return div;
};
    
//create post body
const createPost = (title, name, content) => {
  const body = document.querySelector("body");
  body.innerHTML = "";
  const newHeader = document.createElement('h4');
  newHeader.classList.add("newHead");
  const topDiv = document.createElement("div");
  newHeader.innerHTML = "Your Telegram is sent";
  topDiv.appendChild(newHeader);
  topDiv.appendChild(createTitle(title));
  topDiv.appendChild(createName(name));
  const div = document.createElement("div");
  
  div.classList.add("postBody");
  div.appendChild(topDiv);
  div.appendChild(createContent(content));

  body.appendChild(div);


};

// function fadeIn() {
//   setInterval(show, 200);
// }
// function show() {
  
//   var body = document.getElementById("body");
//   opacity = Number(window.getComputedStyle(body)
//                    .getPropertyValue("opacity"));
//   if (opacity < 1) {
//       opacity = opacity + 0.1;
//       body.style.opacity = opacity
//   } else {
//       clearInterval(intervalID);
//   }
// }


const updateContent = async () => {
  try {
    let hash = window.location.hash;
    if (!hash) throw new Error();
    let response = await getStory(hash.slice(1));
    createPost(...response);
  } catch (err) {
    createForm();
    const form = document.querySelector("form");
    form.addEventListener("submit", postEntry);
  }
};


updateContent();

window.addEventListener("hashchange", updateContent);



  

  











