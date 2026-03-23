const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const amPm = document.getElementById("ampm");
const dateDiv = document.getElementById("date");
const dayEl = document.getElementById("day");

let ampm;

const operations = () => {
    const date = new Date();

    //getting hours, minues and seconds
    let getHours = date.getHours();
    const getMins = date.getMinutes();
    const getSec = date.getSeconds();

    //converting hours into 12-hrs format
    ampm = getHours >= 12 ? "PM" : "AM";
    getHours = getHours % 12 || 12;

    //getting Date and Day
    const options = {
        month: "long",
        day: "numeric",
        year: "numeric",
    };
    const dateString = date.toLocaleDateString("en-US", options);

    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    hours.textContent = String(getHours).padStart(2, "0");
    minutes.textContent = String(getMins).padStart(2, "0");
    seconds.textContent = String(getSec).padStart(2, "0");
    amPm.textContent = ampm;
    dateDiv.textContent = dateString;
    dayEl.textContent = dayName;
};

operations();
// setInterval(operations, 1000);
