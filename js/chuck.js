let icon = null;
$( document ).ready(function() {
    getJoke();
    $('#random-joke-button').click(e => {
        getJoke()
    });
});

function getJoke() {
    let div = document.getElementById('joke');
    div.innerHTML = '';
    $.ajax({
        type: 'get',
        url: 'https://api.chucknorris.io/jokes/random',
        // data: $('form').serialize(),
        statusCode: {
            200: function (res) {
                let joke = res.value;
                let p = document.createElement('p');
                p.innerHTML = joke;
                let img = document.createElement('img');
                if (!icon) {
                    icon = res.icon_url;

                }
                img.src = icon;
                img.classList.add("icon");



                div.appendChild(img);
                div.appendChild(p);
            }
        },
        success: function (res) {
        },
        error: function (res) {
            alert("Something went wrong getting the joke!")
        }
    });
}
