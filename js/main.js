let breed = null;
$( document ).ready(function() {
    setDocPic();
    getBreeds();
    $('#random-dog-button').click(function (e) {
        setDocPic(breed);
    });
    $('#breed-select').change(function (e) {
        breed = document.getElementById('breed-select').value;
        setDocPic(breed);
    });
});

function setDocPic() {
    let url = !breed ? `https://dog.ceo/api/breeds/image/random` : `https://dog.ceo/api/breed/${breed}/images/random`;

    $.ajax({
        type: 'get',
        url: url,
        // data: $('form').serialize(),
        statusCode: {
            200: function (res) {
                let img = res.message;
                let div = document.getElementById("dog-photo");
                div.innerHTML = '';
                let photo = document.createElement('img');
                photo.src = img;
                photo.alt = "Amazing dog photo";
                photo.classList.add('dog-photo');
                div.appendChild(photo);
            }
        },
        success: function (res) {
        },
        error: function (res) {
            alert("Something went wrong getting the dog photo!")
        }
    });
}

function getBreeds() {
    $.ajax({
        type: 'get',
        url: 'https://dog.ceo/api/breeds/list',
        // data: $('form').serialize(),
        statusCode: {
            200: function (res) {
                let breeds = res.message;
                let select = document.getElementById('breed-select');
                breeds.forEach(breed => {
                    let option = document.createElement('option');
                    option.value = breed;
                    option.innerHTML = breed.charAt(0).toUpperCase() + breed.slice(1);;
                    select.appendChild(option);
                });
            }
        },
        success: function (res) {
        },
        error: function (res) {
            alert("Something went wrong getting the dog photo!")
        }
    });
}
