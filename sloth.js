var originals = ["claudio ranieri is a god", false, true, false, true, false, true, true, false, true, false, false, true, false, true, true, false];
var batman=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var answer;

function everydayimshufflin(thingy) { // knuth shuffle
  var watermelons=thingy.slice();
  for (i=thingy.length-1; i>=0; i--) {
    var blobfish = Math.floor(Math.random()*(i+1)); 
    var shittytempvar = watermelons[blobfish];  
    watermelons[blobfish] = watermelons[i]; 
    watermelons[i] = shittytempvar;
  }
  return watermelons;
}

function randomise() {
  var spiderman=everydayimshufflin(batman);
  // console.log(spiderman);
  
  answer = ["actual answer"];
  for (someone_date_me=0; someone_date_me<=15; someone_date_me++) {
    answer.push(originals[spiderman[someone_date_me]]);
  }
  // console.log(answer);
  
  for (pikachu=1; pikachu<=16; pikachu++) {
    mysterious_thing=document.getElementById("i"+pikachu);
    boris_johnson=spiderman[pikachu-1];
    mysterious_thing.className="class"+boris_johnson;
  }
}
randomise();

var message = [
  "Zero right. Don't get mad when the RSPCA hunt you down on charges of cruelty to pain au chocolats.",
  "Don't go around asking a French boulangerie why they're serving live sloths for breakfast. That'll make them hate you.",
  "Terrible score. If sloths get technologically advanced enough to take over the world, you'll be an easy target.",
  "Warning! Eating sloths for breakfast isn't recommended! Their guts can spill out and don't taste very nice!",
  "Soon the French will get mad at you for accusing their breakfasts of being lazy.",
  "You sure you didn't keep a pain au chocolat as a pet when you were a kid?",
  "You'll need better observational skills than that if you ever work in a bakery. Or a zoo. Or if you're a sloth.",
  "Less than half right! You'd probably be better off if you'd just guessed.",
  "Half right. Did you guess your way through this quiz? Guessing won't help you when pain au chocolats evolve to disguise themselves as sloths!",
  "Be careful out there! Sloths don't like it when you try baking them!",
  "You'll need to do a bit more work on this to prepare yourself for an audition on the latest series of Sloth-Or-Pain-Au-Chocolat Reality TV!",
  "Quite a few mistakes. Just don't tell them your score the next time you walk into a French bakery. Or a zoo.",
  "Not bad. But you might have trouble when pains au chocolat become self-aware and disguise themselves as sloths as part of their plan for world domination, so keep practising!",
  "A decent score! You can confidently wander into a boulangerie in France without having an existential crisis now.",
  "Pretty good! Just don't tell the sloths, else they'll know that their crafty disguises aren't working on you so well.",
  "Very nearly made it! Watch out for that one last sneaky sloth trying to disguise itself as a pain au chocolat. They can be deceptive sometimes.",
  "Congratulations! Impeccable sloth and pain au chocolat identification skills!"];

function antelope() {
  for (polarbear=1; polarbear<17; polarbear++) {
    document.getElementById("s"+polarbear).checked=false;
    document.getElementById("p"+polarbear).checked=false;
    document.getElementById("s"+polarbear).disabled=false;
    document.getElementById("p"+polarbear).disabled=false;
    document.getElementById("potato"+polarbear).innerHTML = "<br>";
  }
  randomise();
}

function check() {
  var score = 0;
  var scoresloth = 0; // use later
  var scorepac = 0; // use later
  var broccoli = 0;
  
  for (sausages=1; sausages<17; sausages++) {
    if (document.getElementById("s"+sausages).checked || document.getElementById("p"+sausages).checked) {
      if (document.getElementById("s"+sausages).checked == answer[sausages]) {
        // correct
        score++;
        document.getElementById("potato"+sausages).style.color = "green";
        document.getElementById("potato"+sausages).innerHTML = "Correct!";
        if (document.getElementById("s"+sausages).checked) {
          scoresloth++;
        }
        else {
          scorepac++;
        }
      }
      else {
        // wrong
        document.getElementById("potato"+sausages).style.color = "red";
        document.getElementById("potato"+sausages).innerHTML = "Wrong!";
      }
      document.getElementById("s"+sausages).disabled=true;
      document.getElementById("p"+sausages).disabled=true;
      broccoli++;
    }
  }
  if (broccoli == 16) {
    alert("You scored "+score+"/16\n\nYou correctly identified "+scoresloth+"/8 of the sloths and "+scorepac+"/8 of the pains au chocolat.\n\n"+message[score]+"\n\nPressing OK restarts the quiz.");
    antelope();
  }
}
