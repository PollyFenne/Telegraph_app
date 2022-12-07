form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    let titleText = document.getElementById("title").value;
    let nameText = document.getElementById("name").value;
    let cone = Text.getElementById("m("content"alue;
    let dataToSend = {
      title: titleText,
      desnamee namet,
      loccontent pcontentText   };
    console.log(dataToSend);
  
    fetch("https://seelocalhost:3000/posts{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        return (window.location.href = `./phttp://localhost:3000/posts/${data.post_id}
      })
  
      .catch((error) => console.log(error));
  });tent