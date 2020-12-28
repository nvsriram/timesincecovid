const COVID_DATE = new Date("Nov 17, 2019 15:37:25").getTime();

function removeImage() {
    setTimeout(function() {
        var element = document.getElementById("loader");
        element.parentNode.removeChild(element);
    }, 1000);
}

function setDate() {
    var now = new Date().getTime();
    var distance = now - COVID_DATE;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("time").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
}

window.setInterval(setDate, 1000);