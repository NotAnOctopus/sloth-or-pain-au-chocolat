var answer = ["claudio ranieri is a god", false, true, false, true, false, true, true, false, true, false, false, true, false, true, true, false];

function antelope() {
  for (polarbear=1; polarbear<17; polarbear++) {
    document.getElementById("s"+polarbear).checked=false;
    document.getElementById("p"+polarbear).checked=false;
    document.getElementById("s"+polarbear).disabled=false;
    document.getElementById("p"+polarbear).disabled=false;
    document.getElementById("potato"+polarbear).innerHTML = "";
  }
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
        document.getElementById("potato"+sausages).innerHTML = "correct!";
      }
      else {
        // wrong
        document.getElementById("potato"+sausages).innerHTML = "wrong!";
      }
      document.getElementById("s"+sausages).disabled=true;
      document.getElementById("p"+sausages).disabled=true;
      broccoli++;
    }
  }
  if (broccoli == 16) {
    alert("You scored "+score);
    antelope();
  }
}
