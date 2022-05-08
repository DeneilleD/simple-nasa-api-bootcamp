//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getDate)

function getDate(){
    let dateVal = document.querySelector('input').value
    console.log(dateVal)
    let url = `https://api.nasa.gov/planetary/apod?api_key=ltXt6Ncdp9fMttHDALAZTnTocVOqGcHHJj9ZRp5i&date=${dateVal}`
    console.log(url)
    fetch(url)
    .then(res => res.json())

 //parse response as JSON
       .then(data => {
    console.log(data)

    document.querySelector('h2').
    innerText = data.title

    document.querySelector('h3').
    innerText = data.explanation

    document.querySelector('img').src =  data.url
    
    if(data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl
    }else if( date.media_type === 'video'){
        document.querySelector('iframe').src = data.url
    }else{
        alert('Unspponsored Media Type')
    }
     })
     .catch(err => {
        console.log(`error ${err}`)
    });

 
}