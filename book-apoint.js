const form = document.getElementById("appointmentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    message.innerHTML =
    `✅ Thank you <b>${name}</b>! <br>
    Your appointment with <b>${doctor}</b><br>
    has been booked for <b>${date}</b> at <b>${time}</b>.`;

    form.reset();

});