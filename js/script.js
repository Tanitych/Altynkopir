$(document).ready(function () {
    $('.header__burger, .header__link').click(function (event) {
        $('.header__burger,.header__menu, .header__link').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$(function () {
    $("#phone").mask("+7(999) 999-9999");
});

$(function () {
    $("#phone2").mask("+7(999) 999-9999");
});



$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 2,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});



var map;

DG.then(function () {
    map = DG.map('map', {
        center: [43.24, 76.89],
        zoom: 13
    });

    // DG.marker([43.24, 76.89]).addTo(map);
});