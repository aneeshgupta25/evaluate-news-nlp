function updateViewFromResponse(res) {
    const subjectivity = res.subjectivity;
    const polarity = res.score_tag;        
    if(subjectivity == "OBJECTIVE") {
        document.querySelector('#results .subjectivity .value').innerHTML = `${subjectivity} - the text does not have any subjectivity marks.`        
    } else {
        document.querySelector('#results .subjectivity .value').innerHTML = `${subjectivity} - the text has subjective marks.`                    
    }
    document.querySelector('#results .irony .value').innerHTML = res.irony;
    //set polarity
    const polarity_value = updatePolarity(polarity);
    document.querySelector('#results .polarity .value').innerHTML = polarity_value;         
    document.querySelector('#results .confidence .value').innerHTML = `${res.confidence} - The confidence associated with the sentiment analysis performed on the text.`;
    document.querySelector('#results .sentence-list').replaceChildren(updateListOfSentences(res.sentence_list))       
}

function updatePolarity(polarity) {
    let polarity_value = "P"
    if(polarity == "P+") {
        polarity_value = "Strong Positive"
    } else if(polarity == "P") {
        polarity_value = "Positive"
    } else if(polarity == "NEU") {
        polarity_value = "Neutral"
    } else if(polarity == "N") {
        polarity_value = "Negative"
    } else if(polarity == "N+") {
        polarity_value = "Strong Negative"
    } else {
        polarity_value = "Without Polarity"
    }
    return polarity_value;
}

function updateListOfSentences(list) {
    console.log(list)
    const container = document.createElement('div');
    container.classList.add('sentence-list-contiainer')
    for(let i = 0; i < list.length; i++) {
        const tempCon = document.createElement('div');
        tempCon.classList.add('sentence-list-item')

        const textPara = document.createElement('p');
        textPara.innerText = `${i+1}. ${list[i].text}`; 
        tempCon.appendChild(textPara);

        container.appendChild(tempCon);
    }
    return container;
}

export { updateViewFromResponse }