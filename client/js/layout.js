const title = document.querySelector(".title");
const name = document.querySelector(".name");
const content = document.querySelector(".content")

ascyn function fetchData() {
    const url = "http://localhost:3000/posts"
    let postData;
    await fetch(url)
      .then((res) => { 
        if (!res.ok) {
            throw new Error("Network response not OK");
        }
        return res.json()
        })
      .then((data) => {
        postData = data;
      });
    return postData
}

function displayElements(postData) {
    title.textContent = postData.title;
    name.textContent = postData.name;
    content.textContent = postData.content;
}