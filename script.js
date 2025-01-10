
document.addEventListener('DOMContentLoaded',()=>{
   const calculate_btn = document.getElementById("search_btn");
calculate_btn.addEventListener('click',()=>{
const stats_container = document.querySelector(".results");
const weight_input = document.getElementById("weight-input").value;
const height_input_ft = document.getElementById("height-input").value;
const height_input_inch = document.getElementById("height-put").value;
const age_input = document.getElementById('age-input');
const height = (height_input_ft*0.3048)+(height_input_inch*0.0254);
const bmi = (weight_input/height);
const BMI = bmi.toFixed(4);
stats_container.innerHTML = BMI;
const stats = document.querySelector('.stats');
document.querySelector('.age_out').innerHTML = age_input.value;
let gender;
var ele = document.querySelectorAll('#html');
for(let i=0;i<ele.length;i++){
    if(ele[i].type = 'radio'){
        if(ele[i].checked){
            gender = ele[i].value;
            break;
        }
    }
}
document.querySelector('.gender_out').innerHTML = gender;
const output = document.querySelector('.output');
if(BMI <= 18.5){
    output.innerHTML = "You are UnderWeight.Gain some weight. Good Luck!";
    output.style.backgroundColor = "Yellow";
}
if(BMI > 18.5 && BMI <= 25){
    output.innerHTML = "You are Fit and Fine. Good Luck!";
    output.style.backgroundColor = "green";
}
if(BMI > 25 && BMI <= 35){
    output.innerHTML = "You are Overweight. Do some work on your body. Good Luck!";
    output.style.backgroundColor = "Brown";
}
if(BMI > 35){
    output.innerHTML = "You have Obesity Problem. Please do some workout regularly. Good Luck!";
    output.style.backgroundColor = "Red"
}
stats.style.visibility = "visible";
document.querySelector('.age_output').style.visibility = "visible";
document.querySelector('.gender_output').style.visibility = "visible";
output.style.visibility = "visible";
}); 
})


