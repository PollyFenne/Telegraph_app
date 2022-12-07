const form = document.getElementById('submitForm')

submitForm.addEventListener('submit', async (e) => {
    try{
        e.preventDefault()
        console.log(e.target.title.value)
        const submitObject = { 
            title: e.target.title.value,
            name: e.target.name.value,
            story: e.target.story.value
        }

            const options = {
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(submitObject),           
            }
            
        await fetch('http://localhost:3000/api/', options )

        const data = await fetch('http://localhost:3000/api/posts/');
        const postData = await data.json();

        console.log(postData);
        console.log("This is the story of my Life",postData[postData.length-1]._id);
        const id = postData[postData.length-1]._id;
        const dataFromID = await fetch(`http://localhost:3000/api/posts/${id}`)
        const dataFromIDJsonified = await dataFromID.json();
        console.log(dataFromIDJsonified);

        location.href = "post.html";

    } catch (err) {
        console.log(err)
    }
})