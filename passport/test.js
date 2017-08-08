var LocalStrategy   = require('passport-local').Strategy;
var Answer = require('../models/answer');
var bCrypt = require('bcrypt-nodejs');
var result;

module.exports = function(passport){

	passport.use('test', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, ans1, done) {
                Answer.findOne({ 'questionNum': 1 }), 
                    function(err, answer){
                    if (err)
                        return done(err);
                    if (!answer)
                        console.log('no ans to question ' + i);
                    if (ans1 = '')
                        result +=1.5;
                    if (!isRightAns(answer, ans)) {
                        console.log('ans to ' + i + ' is wrong');
                        result +=0;
                    }
                    if (isRightAns(answer, ans)) {
                        console.log('ans to ' + i + ' is right');
                        result += 6;
                    }
                }
        })
    );

    var isRightAns = function(questionNum, ans){
        return bCrypt.compareSync(ans, ans.ans);
    }
}



    // //- var answers = !{answers};
    // //- var answers = document.getElementsByName( answers.answers );
    // //- var answers = <%- JSON.stringify(answers) %>;
    //     //- tot = answers.length;
    //     tot = 3;
    //     //- console.log("tot is", tot);

    // function getCheckedValue( radioName ){
    //     var radios = document.getElementsByName( radioName ); // Get radio group by-name
    //     for(var y=0; y<radios.length; y++)
    //     if(radios[y].checked) return radios[y].value; // return the checked value
    // }

    // var isValidAnswer = function(questionNum, answer){
    //     return bCrypt.compareSync(answer, answer.ans);
    // }

    // function getScore(){
    // var score = 0;
    // for (var i=1; i<=tot; i++)
    //     //- if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
    //     if(isValidAnswer(getCheckedValue("question"+i+1)), answer) {
    //         score+=1;
    //     }
    // return score;
    // }

    // function returnScore(){
    // alert("Your score is "+ getScore() +"/"+ tot);
    // }