const API_KEY = "323e96d222308b88af0e20ec237d9979"
const base_url = "https://api.meaningcloud.com/sentiment-2.1"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value    
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")    
    // Client.getData({
    //     text: "I am Aneesh & am a good boy!!!",
    //     language: "en"
    // })    
    // .then(
    //     function(data) {            
    //         document.getElementById('results').innerHTML = data.subjectivity;
    //     }
    // )    
    fetch(`http://localhost:3000/test?t=${"hello"}&l=${"en"}`)    
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = res.subjectivity
    })
}

const getData = async (data) => {    
    const response = await fetch(`${base_url}?key=${API_KEY}&txt=${data.text}?lang=${data.language}`);
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }
    catch(e) {
        console.log("Error Occurred while Fetching NLP data...");
    }
}

export { handleSubmit, getData }
