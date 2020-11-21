const duraznoMinLongitude = -56.572319;
const duraznoMaxLongitude = -56.483763;
const duraznoMinLatitude = -33.362014;
const duraznoMaxLatitude = -33.400546;

$("#send-button").on("click", function () {
    // getLocation();
    submitMeasure();
})

function submitMeasure() {
    name = $("#nameData").val()
    id = $("#idData").val()
    startDate = $("#startDateData").val()
    endDate = $("#endDateData").val()
    amount = $("#amountData").val()
    $.ajax({
        method: "POST",
        url: "http://179.27.97.57:3306/register_data",
        crossDomain: true,
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            "name": name,
            "ci": id,
            "start_date": startDate,
            "end_date": endDate,
            "amount": amount
        })
    }).done(function () {
        console.log("Success")
    })
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    if(!isValidPosition(position.coords.latitude, position.coords.longitude))
        alert("Solo puede subir medidas para su ubicación.")
}

function isValidPosition(latitude, longitude) {
    if (duraznoMaxLatitude < latitude)
        return false;
    if (duraznoMinLatitude > latitude)
        return false;
    if (duraznoMaxLongitude < longitude)
        return false;
    if (duraznoMinLongitude > longitude)
        return false;
    return true;
}

