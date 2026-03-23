document.addEventListener("DOMContentLoaded", () => {
    const bmiForm = document.querySelector("#bmi-form");
    const weightInput = document.querySelector("#weight-input");
    const heightInput = document.querySelector("#height-input");
    const resultMessage = document.querySelector("#result-message");

    const clearInputs = () => {
        weightInput.value = "";
        heightInput.value = "";
    };

    const showBMIResult = (bmi) => {
        resultMessage.textContent = `Your BMI is ${bmi}.`;
    };

    const evaluateBMI = (weight, height) => {
        const heightInMeters = height / 100;
        const userBMI = weight / (heightInMeters * heightInMeters);
        showBMIResult(userBMI.toFixed(2));
    };

    const getUserInput = () => {
        const weight = parseFloat(weightInput.value);
        if (isNaN(weight) || weight == 0) {
            alert("Please enter valid weight");
            return;
        }

        const height = parseFloat(heightInput.value);
        if (isNaN(height) || height == 0) {
            alert("Please enter valid height");
            return;
        }

        evaluateBMI(weight, height);
        clearInputs();
    };

    bmiForm.addEventListener("submit", (e) => {
        e.preventDefault();
        getUserInput();
    });
});
