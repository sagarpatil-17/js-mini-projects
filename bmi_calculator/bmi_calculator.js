const onCalculate = () => {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const scoreElement = document.getElementById('score');
    const resultElement = document.getElementById('result');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    const calculation = (weight / (height * height)) * 10000;
    const score = calculation.toFixed(1);
    scoreElement.innerText = score;

    if (score < 18.5) {
        resultElement.innerText = 'Underweight!';
    } else if (score < 25.0) {
        resultElement.innerText = 'Healthy Weight!';
    } else if (score < 30.0) {
        resultElement.innerText = 'Overweight!';
    } else {
        resultElement.innerText = 'Obesity!';
    }
}