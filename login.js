
function compareText() {
    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;
    var text3="iain.walls@yahoo.com"
    var text4="RossCountyFC"

    if (text1 == text3 && text2== text4) {
        alert("Successful Login");
        location.href = 'home.html';
    } else {
        alert("Incorrect login Hint: The Staggies");
    }
}


function Reset(){

  var oldPasswordUserInput = document.getElementById("text2").value;

  var mumNameUserInput=document.getElementById("text4").value;
  var phoneNumberUserInput=document.getElementById("text5").value;


  var oldPassword="RossCountyFC"
  var mumName="Lofthouse"
  var mumName1="lofthouse"
  var phoneNumber="07756430637"

      if (oldPasswordUserInput == oldPassword &&(mumNameUserInput== mumName || mumNameUserInput== mumName1) && phoneNumberUserInput==phoneNumber) {
          alert("Successful Password Reset");
      }

      if (oldPasswordUserInput != oldPassword) {
        alert("Incorrect old password");
      }

      if (mumNameUserInput != mumName) {
        if (mumNameUserInput != mumName1) {
            alert("Incorrect Madain Name");
        }
      }

      if (phoneNumberUserInput != phoneNumber) {
        alert("Incorrect phone number");
      }

}


function challengeONEValidate(){
    var twitterHandleInput=document.getElementById("twitterHandleInput").value;
    var correctAnswer="@Iain_Walls11"

    if (twitterHandleInput == correctAnswer) {
        alert("Correct Answer: +5pts ");
        location.href = 'challenge2.html';
    }else {
      alert("Incorrect (Remember to add an @ to the start)");
    }

}


function challengeTWOValidate(){
    var cityInput=document.getElementById("cityInput").value;
    var correctAnswer="Dundee"

    if (cityInput == correctAnswer) {
        alert("Correct Answer: +5pts ");
        location.href = 'challenge3.html';
    }else {
      alert("Incorrect Answer");
    }

}

function challengeTHREEValidate(){
    var hotelInput=document.getElementById("hotelInput").value;
    var correctAnswer="Malmaison"

    if (hotelInput == correctAnswer) {
        alert("Correct Answer: +5pts ");
        location.href = 'challenge4.html';
    }else {
      alert("Incorrect Answer");
    }

}

function challengeFOURValidate(){
    var emailInput=document.getElementById("emailInput").value;
    var correctAnswer="iain.walls@yahoo.com"

    if (emailInput == correctAnswer) {
        alert("Correct Answer: +5pts ");
        location.href = 'challenge5.html';
    }else {
      alert("Incorrect Answer");
    }

}

function challengeFIVEValidate(){
    var passwordInput=document.getElementById("passwordInput").value;
    var correctAnswer="RossCountyFC"

    if (passwordInput == correctAnswer) {
        alert("Correct Answer: +5pts ");
        location.href = 'challenge6.html';
    }else {
      alert("Incorrect Answer: Check formatting as letters can be capitals");
    }

}


function challengeSIXValidate(){
    var maidenNameInput=document.getElementById("maidenNameInput").value;
    var correctAnswer="Lofthouse"

    if (maidenNameInput == correctAnswer) {
        alert("Correct Answer: +5pts ");
        location.href = 'challenge7.html';
    }else {
      alert("Incorrect Answer");
    }

}


function challengeSEVENValidate(){
    var pnumberInput=document.getElementById("pnumberInput").value;
    var correctAnswer="07756430637"

    if (pnumberInput == correctAnswer) {
        alert("Correct Answer: +5pts ");
        location.href = 'challenge8.html';
    }else {
      alert("Incorrect Answer");
    }

}
function challengeEIGHTValidate(){
    var authInput=document.getElementById("authInput").value;
    var correctAnswer="4172656e277420796f75206120636c6576657220636f6f6b6965"

    if (authInput == correctAnswer) {
        alert("Correct Answer: +5pts ");
        location.href = 'challenge9.html';
    }else {
      alert("Incorrect Answer");
    }

}
