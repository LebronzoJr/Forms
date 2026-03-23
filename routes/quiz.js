const express = require('express');
const router = express.Router();
const {readFile} = require('fs').promises;




//Work goes here

router.get("/", async (req, res) =>{
    //Get 4 words, with their pos and def and send back to the other page
    let chosenWords = await getwords();
    //send thoose back and render quiz.ejs
    console.log("Chosen Words: ", chosenWords);
});

let getwords = async ()=>{
    //get a random part of speech
    let randomPart = getRandomPart();
    //from that, pick 4 words that match
    let allWords = await readfile('resources/allwords.txt', 'utf8'); //Reads allwords as 1 giant string
    let wordArray = allWords.split('\n');//splits single string into an array, where each line is an index
    shuffle(wordArray);//shuffle it

    let choices = [];
    while(choices.length < 5) {
        //keep looping until we get 5 choices
        let line = wordArray.pop();
        let tokens = line.split('\t');
        let word = tokens[0];
        let part = tokens[1];
        let def = def = tokens[2];
        if(part === randomPart){
            choices.push(line);
        }
    }
    return choices;

}
let getRandomPart =()=>{
    let parts = ['noun', 'verb','adjective']
    let randomIndex = Math.floor(Math.random()*parts.length);
    let randomPart = parts[randomIndex];
    return randomPart;
}
let shuffle = (array)=>{
    for(let i = array.length-1;i>0; i--)
    {
        let randomNumber = Math.floor(Math,random()*(i+1));
        [array[i], array[randomNumber]] = [array[randomNumber], array[i]];
    }
}


module.exports = router;