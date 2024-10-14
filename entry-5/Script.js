document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded"); // This checks if the script runs

    const car = document.createElement("div");
    car.className = "car";
    document.querySelector(".animation-container").appendChild(car);

    function moveCar() {
        console.log("Car Animation Started"); // Check if the animation runs
        const animationDuration = 20; // Adjust animation duration (in seconds)
        car.style.animation = `moveCar ${animationDuration}s linear infinite`;
    }

    moveCar();
});
