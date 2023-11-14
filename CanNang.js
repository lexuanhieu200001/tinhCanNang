let weight = +prompt('Can Nang');
let height = +prompt('Chieu cao');
let bmi = weight / (height ^ 2);
 if (30 <= bmi) {
    alert('obese'+ bmi );
} else if (25 <= bmi && bmi < 30) {
        alert('overweight' + bmi  );
} else if (18.5 <= bmi && bmi < 25) {
        alert('normal' + bmi);
} else {
    alert('underweight' + bmi);
}
/*if (bmi < 18) {
    document.write("Underweight" + bmi);
    } else if (bmi < 25.0) {
        document.write("Normal" + bmi);
    } else if (bmi < 30.0) {
        document.write("Overweight" + bmi);
} else {
    document.write("Obese" + bmi);
}*/