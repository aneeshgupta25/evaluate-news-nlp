function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value    
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")    
    
    //fetch nlp data    
    fetch(`http://localhost:3000/test?t=${"hello"}&l=${"en"}`)    
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = res.subjectivity
    })
}

export { handleSubmit }