
const search = function(event) {
    if(event.key === 'Enter'){
        console.log(event.target.value)
        getPhotos(event.target.value)
    }
}

const getPhotos = function(searchString) {
    fetch("http://www.splashbase.co/api/v1/images/search?query=" + searchString)

    .then(response => response.json())
    .then(images => renderPhotos(images))
}

const renderPhotos = function(images) {

    let mainSection = document.querySelector('#main')

    mainSection.innerHTML = ''

    console.log(images.images)

    if(images.images.length > 0) {
        for(let c=0; c<images.images.length; c++){

            console.log(images.images[c].title)

            mainSection.innerHTML = mainSection.innerHTML + `
            <div class="media" onclick="hideImage(this)">
              <img src=${images.images[c].url}>
            </div>
            `
        }
    }
}

function hideImage(id) {
  id.style.display = 'none';

}
