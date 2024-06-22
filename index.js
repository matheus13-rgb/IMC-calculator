document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let classification = '';

    if (bmi < 18.5) {
        classification = 'Abaixo do peso';
    } else if (bmi < 24.9) {
        classification = 'Peso normal';
    } else if (bmi < 29.9) {
        classification = 'Sobrepeso';
    } else {
        classification = 'Obesidade';
    }

    document.getElementById('result').innerText = `Seu IMC é ${bmi} (${classification}).`;
});
