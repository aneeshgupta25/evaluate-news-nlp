function handleSubmit(event) {
    event.preventDefault()
    
    let formText = document.getElementById('name').value        
    console.log("::: Form Submitted :::")
    if(formText.length == 0) alert('Kindly Enter Some Text')
    
    //fetch nlp data
    if(formText.length != 0) {
        fetch(`http://localhost:3000/test?t=${formText}&l=${"en"}`)    
        .then(res => res.json())
        .then(function(res) {        
            Client.updateViewFromResponse(res)
        })
    }
}

export { handleSubmit }