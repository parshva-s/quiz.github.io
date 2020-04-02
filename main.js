//this is a Java file
"use script";

document.getElementById('button').addEventListener('click',check);//clicking button will check the answers on the quiz

function check() {
    let correct = 0;
    //all the answers in quiz
    let answer1 = document.getElementById('input1').value.toUpperCase();
    let answer2 = document.getElementById('input2').value.toUpperCase();
    let answer3 = document.getElementById('input3').value.toUpperCase();
    let answer4 = document.getElementById('input4').value.toUpperCase();
    console.log(answer1);
    //check answer for question 1
    if (answer1 == 'NAPOLEON'||answer1 == 'NAPOLEON BONAPORTE') {
        document.getElementById('sub-heading1').style.backgroundColor = 'rgba(90, 192, 90, 0.705)';
        document.getElementById('correct1').innerHTML = '';
        correct++;//adds to total correct
    } else {//incorrect->turns read and provides answer
        document.getElementById('sub-heading1').style.backgroundColor = 'rgba(199, 115, 115, 0.705)';
        document.getElementById('correct1').innerHTML = 'Correct Answer: Napoleon Bonaporte';
    }
    //checks answer for question 2
    if (answer2 == 'DARTH'||answer2 == 'VADER'||answer2 == 'DARTH VADER') {
        document.getElementById('sub-heading2').style.backgroundColor = 'rgba(90, 192, 90, 0.705)';
        document.getElementById('correct2').innerHTML = '';
        correct++;//adds to total correct
    } else {//incorrect->turns red and provides answer
        document.getElementById('sub-heading2').style.backgroundColor = 'rgba(199, 115, 115, 0.705)';
        document.getElementById('correct2').innerHTML = 'Correct Answer: Darth Vader';
    }
    //checks answer for question 3
    if (answer3 == 'PROCESSING') {
        document.getElementById('sub-heading3').style.backgroundColor = 'rgba(90, 192, 90, 0.705)';
        document.getElementById('correct3').innerHTML = '';
        correct++;//adds to total correct
    } else {//incorrect->turns red and provides answer
        document.getElementById('sub-heading3').style.backgroundColor = 'rgba(199, 115, 115, 0.705)';
        document.getElementById('correct3').innerHTML = 'Correct Answer: Processing';
    }
    //checks answer for question 4
    if (answer4 == 'EGG'||answer4 == 'EGGS') {
        document.getElementById('sub-heading4').style.backgroundColor = 'rgba(90, 192, 90, 0.705)';
        document.getElementById('correct4').innerHTML = '';
        correct++;//adds to total correct
    } else {//incorrect->turns red and provides answer
        document.getElementById('sub-heading4').style.backgroundColor = 'rgba(199, 115, 115, 0.705)';
        document.getElementById('correct4').innerHTML = 'Correct Answer: Eggs';
    }
    //print results
    let result = (correct/4)*100;//the percentage
    document.getElementById('para9').innerHTML = 'Your score is : ' + correct + '/4 ('+result+'%).';

    //ending message based on results
    document.getElementById('sub-heading5').innerHTML = 'Results';
    if (correct == 0) {
        document.getElementById('span1').innerHTML = 'Start studying now!';
    } else if (correct == 1) {
        document.getElementById('span1').innerHTML = 'Might want to study more!';
    } else if (correct == 2) {
        document.getElementById('span1').innerHTML = 'Better luck next time!';
    } else if (correct == 3) {
        document.getElementById('span1').innerHTML = 'Review a bit more and you should be good!';
    } else {
        document.getElementById('span1').innerHTML = 'Excellent job!';
    }

}
