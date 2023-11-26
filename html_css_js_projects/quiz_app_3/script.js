listofQuestions = [
    {'Who has most number of centuries in ODI Cricket?': ['Virat Kohli','Sachin Tendulkar','Rohit Sharma','Steve Smith']} ,
    { 'Who has won the ODI Cricket WorldCup 2023?': ['India','Australia','Newzealand','Srilanka']},
    {'When is the electiona date in Telangana?':['30 November','21 November','22 November','3 December'] },
    { 'What is the capital of UttarPradesh?' : ['Lucknow','Ghaziabad','Varanasi','Kanpur']}
];

let pagecount = 1; //default page number

answers = [

]

//default values when page loaded

var questionelement = document.getElementById('question');
questionelement.innerText = Object.keys(listofQuestions[pagecount-1])[0];
loadAnswersForQuestion(questionelement.innerText,pagecount);

function loadAnswersForQuestion(question,pagecount){
for(let i=0;i<4;i++){
   document.getElementById(`answer${i+1}`).innerHTML = listofQuestions[pagecount-1][`${question}`][i]
}
}


document.getElementById('next').addEventListener('click',()=>{
    pagecount++;
    if(pagecount-1 < listofQuestions.length){
        questionelement.innerText = Object.keys(listofQuestions[pagecount-1])[0];
    }
    loadAnswersForQuestion(questionelement.innerText,pagecount);
})

if(pagecount === listofQuestions.length + 1){
    pagecount++;
    document.getElementById('next').style.display = "none";
    document.getElementsByClassName('answer-container')[0].style.display = "none";
    questionelement.innerText = 'You have submitted the quiz';
}


