function orderFood(foodName) {
    alert(
        "Great choice! 🍽️\n\n" +
        foodName +
        " has been selected.\n\n" +
        "Please contact us to complete your order."
    );
}


function bookTable(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const guests = document.getElementById("guests").value;
    const date = document.getElementById("date").value;

    alert(
        "Reservation Successful! 🎉\n\n" +
        "Thank you, " + name + "!\n" +
        "Guests: " + guests + "\n" +
        "Date: " + date
    );
}