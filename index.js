

var questionsArr = [ 
    {
        question: 'Hue refers to the dominant color family.',
        answer: true
    },
    {
        question: 'Chroma means the brightnss of a color.',
        answer: false
    },
    {
        question: 'The Value of a color is its lightness or darkness.',
        answer: true
    },
    {
        question:('Creating a color shade means you are adding white.'),
        answer: false
    },
    {
        question:('Addind Tint to a color means you are adding black.'),
        answer: false
    },
    {
        question:('To use complementary colors means to use colors from the opposite sides of the color wheel.'),
        answer: true
    },
    {
        question: ('The three primary colors are red, yellow and blue.'),
        answer: true
    },
    {   question:'The three secondary colors are orange, pink, and green.',
        answer: false
    },
    {
        question: 'Analogous colors are those next to each other on the color wheel.',
        answer: true
    },
    {
        question: 'OpenType fonts are designed to be functional across both Mac and PC platforms.',
        answer: true
    }, 
];

function runQuiz() {
    var numOfTrue = 0;
    var numOfFalse = 0;
    for (let index = 0; index < questionsArr.length; index++) {
        var questions = questionsArr[index]
        var yourAnswer = confirm(questions.question)        
        if (yourAnswer == questions.answer){
            numOfTrue++
        } else {
            numOfFalse++    
        }
    }

    var scorePercent = Math.round((numOfTrue / questionsArr.length) * 100);
        alert(`You answered ${numOfTrue} questions correctly.`);
        console.log (numOfTrue)
        alert(`You scored ${scorePercent}% of the questions correct.`);
        console.log (scorePercent)      
} 


    
    

    
   

       
      
       
         
        
        
        


        


        
    
   


