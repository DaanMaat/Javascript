const Player1 = prompt('Type de naam van player 1'); 
const Player2 = prompt('Type de naam van player 2'); 
document.querySelector('.p1').textContent = `${Player1}`; 
document.querySelector('.p2').textContent = `${Player2}`; 
let Dices = [0,0,0,7,-7] 
let holdDices = [0, 0, 0, 0, 0]; 
const turn = document.querySelector('#turn'); 
let turnSelector = Math.floor(Math.random()*5)+1; 
let rollsLeft = 3; 
const rollButton = document.querySelector('#rollAgain'); 
const worpen = document.querySelector('#rollsLeft'); 
rollButton.textContent = `Worpen over: ${rollsLeft}`; 
const D1 = document.querySelector('.dice1'); 
const D2 = document.querySelector('.dice2'); 
const D3 = document.querySelector('.dice3'); 
const D4 = document.querySelector('.dice4'); 
const D5 = document.querySelector('.dice5'); 
const Die = [D1, D2, D3, D4 ,D5]; 
D1.src = 'Dice0.png'; 
D2.src = 'Dice0.png'; 
D3.src = 'Dice0.png'; 
D4.src = 'Dice0.png'; 
D5.src = 'Dice0.png'; 
 
let p1scoreTop = 0; 
let p1scoreBottom = 0; 
let p1bonus = 0; 
let p1totalScore = 0; 
let p1score1 = 0; 
let p1score2 = 0; 
let p1score3 = 0; 
let p1score4 = 0; 
let p1score5 = 0; 
let p1score6 = 0; 
let p1ToK = 0; 
let p1Caree = 0; 
let p1FullHouse = 0; 
let p1KStraat = 0; 
let p1GStraat = 0; 
let p1Yahtzee = 0; 
let p1Chance = 0; 
 
let p2scoreTop = 0; 
let p2scoreBottom = 0; 
let p2bonus = 0; 
let p2totalScore = 0; 
let p2score1 = 0; 
let p2score2 = 0; 
let p2score3 = 0; 
let p2score4 = 0; 
let p2score5 = 0; 
let p2score6 = 0; 
let p2ToK = 0; 
let p2Caree = 0; 
let p2FullHouse = 0; 
let p2KStraat = 0; 
let p2GStraat = 0; 
let p2Yahtzee = 0; 
let p2Chance = 0; 
 
let ToKP1 = false; 
let CareeP1 = false;  
let FullHouseP1 = false; 
let kStreetP1 = false; 
let gStreetP1 = false; 
let YahtzeeP1 = false; 
 
let ToKP2 = false; 
let CareeP2 = false; 
let fullHouseP2 = false; 
let kStreetP2 = false; 
let gStreetP2 = false; 
let YahtzeeP2 = false; 

const score1P1 = document.querySelector('.p1score-enen'); 
const score2P1 = document.querySelector('.p1score-tweeën'); 
const score3P1 = document.querySelector('.p1score-drieën'); 
const score4P1 = document.querySelector('.p1score-vieren'); 
const score5P1 = document.querySelector('.p1score-vijfen'); 
const score6P1 = document.querySelector('.p1score-zessen'); 
 
const p1ToKP = document.querySelector('.p1ToKP'); 
const p1CareeP = document.querySelector('.p1CareeP'); 
const p1FullHouseP = document.querySelector('.p1FullHouseP'); 
const p1KStraatP = document.querySelector('.p1KStraatP'); 
const p1GStraatP = document.querySelector('.p1GStraatP'); 
const p1YahtzeeP = document.querySelector('.p1YahtzeeP'); 
const p1ChanceP = document.querySelector('.p1ChanceP'); 
const p1BottomScoredP = document.querySelector('.p1BottomScoredP'); 
const p1TopScoredP = document.querySelector('.p1TopScoredP'); 
const p1TopScoredWBP = document.querySelector('.p1TopScoredWBP'); 
const p1BonusP = document.querySelector('.p1BonusP'); 
const p1TotaalP = document.querySelector('.p1TotaalP');

const score1P2 = document.querySelector('.p2score-enen'); 
const score2P2 = document.querySelector('.p2score-tweeën'); 
const score3P2 = document.querySelector('.p2score-drieën'); 
const score4P2 = document.querySelector('.p2score-vieren'); 
const score5P2 = document.querySelector('.p2score-vijfen'); 
const score6P2 = document.querySelector('.p2score-zessen'); 
 
const p2ToKP = document.querySelector('.p2ToKP'); 
const p2CareeP = document.querySelector('.p2CareeP'); 
const p2FullHouseP = document.querySelector('.p2FullHouseP'); 
const p2KStraatP = document.querySelector('.p2KStraatP'); 
const p2GStraatP = document.querySelector('.p2GStraatP'); 
const p2YahtzeeP = document.querySelector('.p2YahtzeeP'); 
const p2ChanceP = document.querySelector('.p2ChanceP'); 
const p2BottomScoredP = document.querySelector('.p2BottomScoredP'); 
const p2TopScoredP = document.querySelector('.p2TopScoredP'); 
const p2TopScoredWBP = document.querySelector('.p2TopScoredWBP'); 
const p2BonusP = document.querySelector('.p2BonusP'); 
const p2TotaalP = document.querySelector('.p2TotaalP');


Player1Scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

Player1TotalScores = [0, 0, 0];

Player2Scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

Player2TotalScores = [0, 0, 0];

function turnFunction(){ 
if(turnSelector % 2 == 0){ 
rollsLeft = 3; 
turn.textContent = `${Player1} is aan de beurt!`; 
turnSelector++; 
rollButton.textContent = `Worpen over: ${rollsLeft}`; 
rollButton.classList.remove('hidden'); 
D1.src = 'Dice0.png'; 
D2.src = 'Dice0.png'; 
D3.src = 'Dice0.png'; 
D4.src = 'Dice0.png'; 
D5.src = 'Dice0.png'; 
for(let z = 0; z < 5; z++){ 
Die[z].classList.add('notSelected'); 
holdDices[z] = 0; 
}
document.querySelectorAll('.p2Possible').forEach(element => {element.textContent = 0});
} else {
rollsLeft = 3; 
turn.textContent = `${Player2} is aan de beurt!`; 
rollButton.textContent = `Worpen over: ${rollsLeft}`;  
turnSelector++ 
rollButton.classList.remove('hidden'); 
D1.src = 'Dice0.png';
D2.src = 'Dice0.png'; 
D3.src = 'Dice0.png'; 
D4.src = 'Dice0.png'; 
D5.src = 'Dice0.png'; 
for(let z = 0; z < 5; z++){ 
Die[z].classList.add('notSelected'); 
holdDices[z] = 0;
document.querySelectorAll('.p1Possible').forEach(element => {element.textContent = 0;});
}}}; 

turnFunction(); 
 
function Countnumbers(number, diceScore){ 
    let count = 0; 
    for (let i = 0; i < Dices.length; i++) { 
      if (Dices[i] === number) { 
        count += 1; 
      } 
    } 
    const punten = count * number; 
    if(diceScore.classList.contains('p1Possible')){diceScore.textContent = punten;}
    else if(diceScore.classList.contains('p2Possible')){diceScore.textContent = punten;}
};
function ToKFunction(diceScore){
    let ToK = false;
    const punten = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4];
    for(let i = 1;i <= 6; i++){ 
        let sameDices = 0; 
        for(let j = 0; j < 5; j++){ 
            if(i == Dices[j]){ 
                sameDices++;
            }
            if(sameDices >= 3){ 
                ToK = true; 
            }  
        }
    }
        if(ToK){
        diceScore.textContent = punten;
        diceScore.value = true;
        }
        else{diceScore.textContent = 0}
};
function CareeFunction(diceScore){
    let Caree = false;
    const punten = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4];
    for(let i = 1;i <= 6; i++){ 
        let sameDices = 0; 
        for(let j = 0; j < 5; j++){ 
            if(i == Dices[j]){ 
                sameDices++ 
                
            }
        }
            if(sameDices >= 4){ 
                Caree = true; 
            }  
    }
        if(Caree){
        diceScore.textContent = punten;
        diceScore.value = true;
        }
        else{diceScore.textContent = 0}
};
function FullHouseFunction(diceScore){
    const punten = 25;
    let FullHouse = false;
    let ThreeFH = false;
    let TwoFH = false;
    for(let i = 0;i <= 6; i++){ 
        let sameDices = 0; 
        for(let j = 0; j < 5; j++){ 
            if(i == Dices[j]){ 
            sameDices++ 
            } 
           
        }
        if(sameDices == 3){ 
            ThreeFH = true;
        }
    }
    for(let i = 0;i <= 6; i++){ 
        sameDices = 0; 
        for(let j = 0; j < 5; j++){ 
            if(i == Dices[j]){ 
                sameDices++ 
            } 
            
        }
        if(sameDices == 2){ 
            TwoFH = true;
        }
    }
    if(ThreeFH && TwoFH){FullHouse = true;}
    if(FullHouse){
        diceScore.textContent = `${punten}`;
        diceScore.value = true;
    } else {diceScore.textContent = 0}
};
function kStreetFunction(diceScore){
    const punten = 30;
    let kStreet = false;
    let straat = [6];
    for(let i = 0; i < 5;i++){
        let value = Dices[i];
        straat[value - 1] = 1;
        let opEenVolgendeWaarden = 0;
        for(let j = 0;j < 6;j++){
            if(straat[j] == 1){
                opEenVolgendeWaarden++;
                console.log(opEenVolgendeWaarden);
            } else {
                opEenVolgendeWaarden = 0;
            }
            if(opEenVolgendeWaarden >= 4){ 
                kStreet = true;  
            }
        } 
        if(kStreet){
            diceScore.textContent = punten;
            diceScore.value = true;
        }
    }
};
function gStreetFunction(diceScore){
    const punten = 40;
    let gStreet = false;
    let straat = [6];
    for(let i = 0; i < 5;i++){
        let value = Dices[i];
        straat[value-1] = 1;
        let opEenVolgendeWaarden = 0;
        for(let j = 0;j < 6;j++){
            if(straat[j] == 1){
                opEenVolgendeWaarden++;
            } else {
                opEenVolgendeWaarden = 0
            }
        }   
        if(opEenVolgendeWaarden == 5){ 
            gStreet = true;    
        }
        if(gStreet){
            diceScore.textContent = punten;
            diceScore.value = true;
        }
    }
};
function YahtzeeFunction(diceScore){
    let Yahtzee = false;
    const punten = 50;
    for(let i = 1;i <= 6; i++){ 
        let sameDices = 0; 
        for(let j = 0; j < 5; j++){ 
            if(i == Dices[j]){ 
                sameDices++ 
            }
        }
            if(sameDices == 5){ 
                Yahtzee = true; 
            }  
    }
        if(Yahtzee){
        diceScore.textContent = punten;
        diceScore.value = true;
        }
        else{diceScore.textContent = 0}
};
function ChanceFunction(diceScore){
const punten = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4];
diceScore.textContent = punten;
};
function TopScore (diceScore, PlayerScore1, PlayerScore2, PlayerScore3, PlayerScore4, PlayerScore5, PlayerScore6,){
    const punten =  PlayerScore1 +  PlayerScore2 + PlayerScore3 +  PlayerScore4 +  PlayerScore5 + PlayerScore6;
    diceScore.textContent = punten;
};
function Bonus (diceScore, PlayerScoreTop){
if(PlayerScoreTop >= 63){
    diceScore.textContent = 35;
    diceScore.value = true;
}
};
function TopScoreWB (diceScore, PlayerscoreTop, PlayerBonus){
    const punten = PlayerscoreTop + PlayerBonus;
    diceScore.textContent = Number(punten);
};
function BottomScore (diceScore, ToK, Caree, FullHouse, KStraat, GStraat, Yahtzee, Chance){
    const punten = ToK + Caree + FullHouse + KStraat + GStraat + Yahtzee + Chance;
    diceScore.textContent = Number(punten);
};
function TotaleScore (diceScore, scoreTop, scoreBottom, bonus){
    diceScore.textContent = Number(scoreTop + scoreBottom + bonus);
}

rollButton.addEventListener('click', function(){ 
    TopScore(p1TopScoredP, Player1TotalScores[0], Player1Scores[0], Player1Scores[1], Player1Scores[2], Player1Scores[3], Player1Scores[4], Player1Scores[5]);
    Bonus(p1BonusP, Player1TotalScores[0]);
    TopScoreWB(p1TopScoredWBP, Player1TotalScores[0], Player1Scores[13]);
    BottomScore(p1BottomScoredP, Player1Scores[6], Player1Scores[7], Player1Scores[8], Player1Scores[9], Player1Scores[10], Player1Scores[11], Player1Scores[12]);
    TotaleScore(p1TotaalP, Player1TotalScores[0], Player1TotalScores[1], Player1Scores[13]);
    
    TopScore(p2TopScoredP, Player2Scores[0], Player2Scores[1], Player2Scores[2], Player2Scores[3], Player2Scores[4], Player2Scores[5]);
    Bonus(p2BonusP, Player2TotalScores[0]);
    TopScoreWB(p2TopScoredWBP, Player2TotalScores[0], Player2Scores[13]);
    BottomScore(p2BottomScoredP, Player2Scores[6], Player1Scores[7], Player2Scores[8], Player2Scores[9], Player2Scores[10], Player2Scores[11], Player2Scores[12]);
    TotaleScore(p2TotaalP, Player2TotalScores[0], Player2TotalScores[1], Player2Scores[13]);
    rollsLeft--; 
    rollButton.textContent = `Worpen over: ${rollsLeft}`;  
    if (rollsLeft == 0){ 
        rollButton.classList.add('hidden'); 
    } 
    for (let i = 0; i < 5; i++) { 
        if (holdDices[i] == 0) { 
            Dices[i] = Math.floor(Math.random() * 6) + 1; 
            Die[i].src = `Dice${Dices[i]}.png` 
        } 
    } 
    if(turnSelector % 2 !== 0){ 
        Countnumbers(1, score1P1); 
        Countnumbers(2, score2P1); 
        Countnumbers(3, score3P1); 
        Countnumbers(4, score4P1); 
        Countnumbers(5, score5P1); 
        Countnumbers(6, score6P1);  
        ToKFunction(p1ToKP);
        CareeFunction(p1CareeP);
        FullHouseFunction(p1FullHouseP);
        kStreetFunction(p1KStraatP);
        gStreetFunction(p1GStraatP);
        YahtzeeFunction(p1YahtzeeP);                   
        ChanceFunction(p1ChanceP);
    } else {    //Else voor turnselector 
        Countnumbers(1, score1P2); 
        Countnumbers(2, score2P2); 
        Countnumbers(3, score3P2); 
        Countnumbers(4, score4P2); 
        Countnumbers(5, score5P2); 
        Countnumbers(6, score6P2); 
        ToKFunction(p2ToKP);
        CareeFunction(p2CareeP);
        FullHouseFunction(p2FullHouseP);
        kStreetFunction(p2KStraatP);
        gStreetFunction(p2GStraatP);
        YahtzeeFunction(p2YahtzeeP);
        ChanceFunction(p2ChanceP);                 
    }});                   
 
D1.addEventListener('click', () => {
        if (D1.classList.contains('notSelected')) {
            D1.classList.remove('notSelected');
            holdDices[0] = Dices[0];
        } else {
            D1.classList.add('notSelected');
            holdDices[0] = 0;
        }
    }); 
D2.addEventListener('click', () => {
        if (D2.classList.contains('notSelected')) {
            D2.classList.remove('notSelected');
            holdDices[1] = Dices[1];
        } else {
            D2.classList.add('notSelected');
            holdDices[1] = 0;
        }
    }); 
D3.addEventListener('click', () => {
        if (D3.classList.contains('notSelected')) {
            D3.classList.remove('notSelected');
            holdDices[2] = Dices[2];
        } else {
            D3.classList.add('notSelected');
            holdDices[2] = 0;
        }
    }); 
D4.addEventListener('click', () => {
        if (D4.classList.contains('notSelected')) {
            D4.classList.remove('notSelected');
            holdDices[3] = Dices[3];
        } else {
            D4.classList.add('notSelected');
            holdDices[3] = 0;
        }
    }); 
D5.addEventListener('click', () => {
        if (D5.classList.contains('notSelected')) {
            D5.classList.remove('notSelected');
            holdDices[4] = Dices[4];
        } else {
            D5.classList.add('notSelected');
            holdDices[4] = 0;
        }
    }); 
 
//Point Calculation 
document.querySelector('.p1score1D').addEventListener('click', function(){ 
score1P1.classList.remove('p1Possible'); 
score1P1.classList.add('definitive'); 
score1P1.classList.remove('p1score-enen'); 
document.querySelector('.p1score1D').classList.remove('p1score1D'); 
Player1Scores[0] = Number(score1P2.textContent);  
turnFunction(); 
}); 
document.querySelector('.p1score2D').addEventListener('click', function(){ 
score2P1.classList.remove('p1Possible'); 
score2P1.classList.add('definitive'); 
score2P1.classList.remove('p1score-tweeën'); 
document.querySelector('.p1score2D').classList.remove('p1score2D'); 
Player1Scores[1] = Number(score2P1.textContent); 
turnFunction(); 
}); 
document.querySelector('.p1score3D').addEventListener('click', function(){ 
score3P1.classList.remove('p1Possible'); 
score3P1.classList.add('definitive'); 
score3P1.classList.remove('p1score-drieën'); 
document.querySelector('.p1score3D').classList.remove('p1score3D'); 
Player1Scores[2] = Number(score3P1.textContent); 
turnFunction(); 
}); 
document.querySelector('.p1score4D').addEventListener('click', function(){ 
score4P1.classList.remove('p1Possible'); 
score4P1.classList.add('definitive'); 
score4P1.classList.remove('p1score-vieren'); 
document.querySelector('.p1score4D').classList.remove('p1score4D'); 
Player1Scores[3] = Number(score4P1.textContent); 
turnFunction(); 

}); 
document.querySelector('.p1score5D').addEventListener('click', function(){ 
score5P1.classList.remove('p1Possible'); 
score5P1.classList.add('definitive'); 
score5P1.classList.remove('p1score-vijfen'); 
document.querySelector('.p1score5D').classList.remove('p1score5D'); 
Player1Scores[4] = Number(score5P1.textContent); 
turnFunction(); 
}); 
document.querySelector('.p1score6D').addEventListener('click', function(){ 
score6P1.classList.remove('p1Possible'); 
score6P1.classList.add('definitive'); 
score6P1.classList.remove('p1score-zessen'); 
document.querySelector('.p1score6D').classList.remove('p1score6D'); 
Player1Scores[5] = Number(score6P1.textContent); 
turnFunction(); 
}); 
document.querySelector('.p1ToKD').addEventListener('click', function(){ 
p1ToKP.classList.remove('p1Possible');  
p1ToKP.classList.add('definitive'); 
p1ToKP.classList.remove('p1ToKP'); 
document.querySelector('.p1ToKD').classList.remove('p1ToKD'); 
if(p1ToKP){Player1Scores[6] = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]};
turnFunction(); 
}); 
document.querySelector('.p1CareeD').addEventListener('click', function(){ 
p1CareeP.classList.remove('p1Possible');  
p1CareeP.classList.add('definitive'); 
p1CareeP.classList.remove('p1CareeP'); 
document.querySelector('.p1CareeD').classList.remove('p1CareeD'); 
if(p1CareeP){Player1Scores[7] = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]}; 
turnFunction(); 
}); 
document.querySelector('.p1FullHouseD').addEventListener('click', function(){ 
p1FullHouseP.classList.remove('p1Possible'); 
p1FullHouseP.classList.add('definitive'); 
p1FullHouseP.classList.remove('p1FullHouseP') 
document.querySelector('.p1FullHouseD').classList.remove('p1FullHouseD'); 
if(p1FullHouseP){Player1Scores[8] = 25;} 
turnFunction(); 
}); 
document.querySelector('.p1KStraatD').addEventListener('click', function(){ 
p1KStraatP.classList.remove('p1Possible'); 
p1KStraatP.classList.add('definitive'); 
p1KStraatP.classList.remove('p1KStraatP'); 
document.querySelector('.p1KStraatD').classList.remove('p1KStraatD'); 
if(p1KStraatP){Player1Scores[9] = 30;} 
turnFunction(); 
}); 
document.querySelector('.p1GStraatD').addEventListener('click', function(){ 
p1GStraatP.classList.remove('p1Possible'); 
p1GStraatP.classList.add('definitive'); 
p1GStraatP.classList.remove('p1GStraatP'); 
document.querySelector('.p1GStraatD').classList.remove('p1GStraatD'); 
if(p1GStraatP){Player1Scores[10] = 40;} 
turnFunction(); 
}); 
document.querySelector('.p1YahtzeeD').addEventListener('click', function(){ 
p1YahtzeeP.classList.remove('p1Possible');  
p1YahtzeeP.classList.add('definitive'); 
p1YahtzeeP.classList.remove('p1YahtzeeP'); 
document.querySelector('.p1YahtzeeD').classList.remove('p1YahtzeeD'); 
if(p1YahtzeeP){Player1Scores[11] = 50};
turnFunction(); 
}); 
document.querySelector('.p1ChanceD').addEventListener('click', function(){    
p1ChanceP.classList.remove('p1Possible');  
p1ChanceP.classList.add('definitive'); 
p1ChanceP.classList.remove('p1ChanceP'); 
document.querySelector('.p1ChanceD').classList.remove('.p1ChanceD'); 
Player1Scores[12] = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]; 
turnFunction(); 
}); 

document.querySelector('.p2score1D').addEventListener('click', function(){ 
score1P2.classList.remove('p2Possible'); 
score1P2.classList.add('definitive'); 
score1P2.classList.remove('p2score-enen'); 
document.querySelector('.p2score1D').classList.remove('p2score1D'); 
Player2Scores[0] = Number(score1P2.textContent); 
turnFunction(); 
}); 
document.querySelector('.p2score2D').addEventListener('click', function(){ 
score2P2.classList.remove('p2Possible'); 
score2P2.classList.add('definitive'); 
score2P2.classList.remove('p2score-tweeën'); 
document.querySelector('.p2score2D').classList.remove('p2score2D'); 
Player2Scores[1] = Number(score2P2.textContent); 
turnFunction(); 
}); 
document.querySelector('.p2score3D').addEventListener('click', function(){ 
score3P2.classList.remove('p2Possible'); 
score3P2.classList.add('definitive'); 
score3P2.classList.remove('p2score-drieën'); 
document.querySelector('.p2score3D').classList.remove('p2score3D'); 
Player2Scores[2] = Number(score3P2.textContent); 
turnFunction(); 
}); 
document.querySelector('.p2score4D').addEventListener('click', function(){ 
score4P2.classList.remove('p2Possible'); 
score4P2.classList.add('definitive'); 
score4P2.classList.remove('p2score-vieren'); 
document.querySelector('.p2score4D').classList.remove('p2score4D'); 
Player2Scores[3] = Number(score4P1.textContent); 
turnFunction(); 
}); 
document.querySelector('.p2score5D').addEventListener('click', function(){ 
score5P2.classList.remove('p2Possible'); 
score5P2.classList.add('definitive'); 
score5P2.classList.remove('p2score-vijfen'); 
document.querySelector('.p2score5D').classList.remove('p2score5D'); 
Player2Scores[4] = Number(score5P2.textContent); 
turnFunction(); 
}); 
document.querySelector('.p2score6D').addEventListener('click', function(){ 
score6P2.classList.remove('p2Possible'); 
score6P2.classList.add('definitive'); 
score6P2.classList.remove('p2score-zessen'); 
document.querySelector('.p2score6D').classList.remove('p2score6D'); 
Player2Scores[5] = Number(score6P2.textContent); 
turnFunction(); 
}); 
document.querySelector('.p2ToKD').addEventListener('click', function(){ 
p2ToKP.classList.remove('p2Possible');  
p2ToKP.classList.add('definitive'); 
p2ToKP.classList.remove('p2ToKP'); 
document.querySelector('.p2ToKD').classList.remove('p2ToKD'); 
if(ToKP2){Player2Scores[6] = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]}else{p2ToK = 0} 
turnFunction(); 
}); 
document.querySelector('.p2CareeD').addEventListener('click', function(){ 
p2CareeP.classList.remove('p2Possible');  
p2CareeP.classList.add('definitive'); 
p2CareeP.classList.remove('p2CareeP'); 
document.querySelector('.p2CareeD').classList.remove('p2CareeD'); 
if(CareeP2){Player2Scores[7] = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]}else{p2Caree = 0} 
turnFunction(); 
}); 
document.querySelector('.p2FullHouseD').addEventListener('click', function(){ 
p2FullHouseP.classList.remove('p2Possible'); 
p2FullHouseP.classList.add('definitive'); 
p2FullHouseP.classList.remove('p2FullHouseP') 
document.querySelector('.p2FullHouseD').classList.remove('p2FullHouseD'); 
if(fullHouseP2){Player2Scores[8] = 25;} 
turnFunction(); 
}); 
document.querySelector('.p2KStraatD').addEventListener('click', function(){ 
p2KStraatP.classList.remove('p2Possible'); 
p2KStraatP.classList.add('definitive'); 
p2KStraatP.classList.remove('p2KStraatP'); 
document.querySelector('.p2KStraatD').classList.remove('p2KStraatD'); 
if(p2KStraatP){Player2Scores[9] = 30;} 
turnFunction(); 
}); 
document.querySelector('.p2GStraatD').addEventListener('click', function(){ 
p2GStraatP.classList.remove('p2Possible'); 
p2GStraatP.classList.add('definitive'); 
p2GStraatP.classList.remove('p2GStraatP'); 
document.querySelector('.p2GStraatD').classList.remove('p2GStraatD'); 
if(p2GStraatP){Player2Scores[10] = 40;} 
turnFunction(); 
}); 
document.querySelector('.p2YahtzeeD').addEventListener('click', function(){ 
p2YahtzeeP.classList.remove('p2Possible');  
p2YahtzeeP.classList.add('definitive'); 
p2YahtzeeP.classList.remove('p2YahtzeeP'); 
document.querySelector('.p2YahtzeeD').classList.remove('p2YahtzeeD'); 
if(YahtzeeP2){Player2Scores[11] = 50};
turnFunction(); 
}); 
document.querySelector('.p2ChanceD').addEventListener('click', function(){    
p2ChanceP.classList.remove('p2Possible');  
p2ChanceP.classList.add('definitive'); 
p2ChanceP.classList.remove('p2ChanceP'); 
document.querySelector('.p2ChanceD').classList.remove('p2ChanceD'); 
Player2Scores[12] = Dices[0] + Dices[1] + Dices[2] + Dices[3] + Dices[4]; 
turnFunction(); 
}); 