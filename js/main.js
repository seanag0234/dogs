$( document ).ready(function() {
    $('#random-dog-button').click(function (e) {
        console.log("CLICKED");
        $.ajax({
            type: 'get',
            url: 'https://dog.ceo/api/breeds/image/random',
            // data: $('form').serialize(),
            statusCode: {
                200: function (res) {
                    var img = res.message;
                    var div = document.getElementById("dog-photo");
                    div.innerHTML = '';
                    var photo = document.createElement('img');
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
    });
});
