// tbody        :    table-data-js
// Input fields :    fname lname age email phone
// Buttons      :    reset save
//foot          :   table-foot-js

let Answer = [];// initialize a user array
const AnswerProperties=['text','type','isCorrect','imageUrl'];// input fileds

const btn_addAnswer = () => {

    if(document.getElementById('addAnswerForm')[0].checkValidity()){//check if data is valid or not
        Answer.push({
            text:document.getElementById('c-ans-txt').value,// pushes a new user to user array
            type:document.getElementById('c-answer-type').value,
            isCorrect:document.getElementById('radio-${idx}').value,
            imageUrl:document.getElementById('c-file-image-answer').value,
        });

        let tableElement = document.getElementById('c-mcq-table');// Selecting relevent div

        let tBodyElement = document.getElementById('c-mcq-tbody');// Selecting table body <tbody> to remove existing data
        tBodyElement.innerHTML = null;

        let rowElement,tdElement ;


        for(let i=0; i<Answer.length;i++){
            rowElement = document.createElement('tr');//New row <tr>

            tdElement = document.createElement('td');//each field <td>
            tdElement.innerText=i+1;//to show row number
            rowElement.append(tdElement);// add <td> to <tr>

            for(let j=0; j<AnswerProperties.length; j++){ // this adds each property and its values to <td>s
                tdElement = document.createElement('td');
                tdElement.innerText=Answer[i][AnswerProperties[j].toString()];
                rowElement.append(tdElement);
            }
        }

        tableElement.append(rowElement);// <tr> to <table>

        //clearText();// Clears all text fields after clicking on button.

        let tfootElement = document.getElementById('c-mcq-tfoot');
        tfootElement.innerText='Total Number of Records : '+Answer.length;

        alert('New Answer \''+Answer[Answer.length-1].text+'\' Added Successfully.!');
    } else{
        alert('You haven\'t entered any data or Data is not in correct format.\n Please check data and try again.');
    }
}

const clearText = ()=>{

    document.getElementById('fname').value='';
    document.getElementById('lname').value='';
    document.getElementById('age').value='';
    document.getElementById('email').value='';
    document.getElementById('mobile').value='';
}

// const btn_Clear = () =>{
//     clearText();
// }