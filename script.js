// Basic functionality for booking and handling form submission
document.getElementById("ride-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const pickup = document.getElementById("pickup").value;
    const dropoff = document.getElementById("dropoff").value;
    const rideType = document.getElementById("ride-type").value;
    const rideTime = document.getElementById("ride-time").value;

    alert(`Ride booked!\nPick-up: ${pickup}\nDrop-off: ${dropoff}\nRide Type: ${rideType}\nTime: ${rideTime}`);
});

// Payment form submission (mock)
document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const UPINumber = document.getElementById("card").value;
    const cardNumber = document.getElementById("UPI Number").value;
    const expiryDate = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    alert(`Payment processed!\nCard: ${cardNumber} \nUPI: ${UPI Number} \nExpiry: ${expiryDate}\nCVV: ${cvv}`);
});
