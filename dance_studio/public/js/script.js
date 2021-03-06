var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

function goToNext(id){
  if(animating) return false;
  animating = true;
  current_fs = $(id).parent();
  next_fs = $(id).parent().next();
  	
	//activate next step on progressbar using the index of next_fs
	$("#progressBar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
  });
}

$("#firstNext").click(function(){

  if(validateStepOne()){
  goToNext("#firstNext");
}
})
$("#secondNext").click(function(){
  if(validateStepTwo()){
  goToNext("#secondNext");
  }
})
$("#thirdNext").click(function(){
  if(validateStepThree()){
  goToNext("#thirdNext");
  }
})
$("#submit").click(function(){
  console.log(validateStepFour());
  if(validateStepFour()){
  submitForm();
  }
})

function goToPrev(id){
      if(animating) return false;
    animating = true;
    
    current_fs = $(id).parent();
    previous_fs = $(id).parent().prev();
    
    //de-activate current step on progressbar
    $("#progressBar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
      step: function(now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = ((1-now) * 50)+"%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({'left': left});
        previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
      }, 
      duration: 800, 
      complete: function(){
        current_fs.hide();
        animating = false;
      }, 
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  // });
  
  // $("#submit").click(function(){
  //   return false;
  // })

}
$("#firstPrevious").click(function() {
  goToPrev('#firstPrevious');
})
$("#secondPrevious").click(function() {
  goToPrev('#secondPrevious');
})
$("#secondPrevious").click(function() {
  goToPrev('#secondPrevious');
})

var secondStudentAdded = false;
var thirdStudentAdded = false

//setting max for date of birth selector dynamically
$(document).ready(function() {
  
  $('#studentDob').datepicker({
    maxDate: "-3y"
  }
  );
  $('#secondStudentDob').datepicker({
    maxDate: "-3y"
  }
  );
  $('#thirdStudentDob').datepicker({
    maxDate: "-3y"
  }
  );
});

$(document).ready(function () {
  $('.anotherStudent').hide();
   $('.thirdStudent').hide();
   $('#mySecondButton').hide();
  $('#removeSecondButton').hide();
  $('#removeThirdButton').hide();
  

  $('#myAddButton').on('click', () => {
       $('.anotherStudent').show();
       $('#myAddButton').hide();
       $('#mySecondButton').show();
       $('#removeSecondButton').show();
      secondStudentAdded = true
      //setting required fields when the addbutton clicked
      $('#secondStudentName').prop('required', true);
      $('#secondStudentDob').prop("required", true);
      $('#secondStudentGender').prop('required', true);
      $('#secondStudentClass').prop("required", true);
      
   });
   $('#removeSecondButton').on('click', ()=> {
    $('.anotherStudent').hide();
    $('#removeSecondButton').hide();
    $('#mySecondButton').hide();
    $('#myAddButton').show();
    secondStudentAdded = false
    console.log(secondStudentAdded)
    //removing required fields when the remove button clicked
    $('#secondStudentName').prop('required', false);
    $('#secondStudentDob').prop("required", false);
    $('#secondStudentGender').prop('required', false);
    $('#secondStudentClass').prop("required", false);
    //clearing the value of the fields
    $('.anotherStudent input:nth-child(n)').val("");
    $('.anotherStudent select:nth-child(n)').val("");

   });
   
  $('#mySecondButton').on('click', () => {
      $('.thirdStudent').show();
      $('#mySecondButton').hide();
      $('#removeThirdButton').show();
      thirdStudentAdded = true;
      //setting required fields when the second button clicked
      $('#thirdStudentName').prop('required', true);
      $('#thirdStudentDob').prop("required", true);
      $('#thirdStudentGender').prop('required', true);
      $('#thirdStudentClass').prop("required", true);
    });

    $('#removeThirdButton').on('click', ()=> {
      $('.thirdStudent').hide();
       //removing required fields for third student when the remove button clicked
      $('#thirdStudentName').prop('required', false);
      $('#thirdStudentDob').prop("required", false);
      $('#thirdStudentGender').prop('required', false);
      $('#thirdStudentClass').prop("required", false);
      $('.thirdStudent input:nth-child(n)').val("");
      $('.thirdStudent select:nth-child(n)').val("");
      thirdStudentAdded = false
      $('#removeThirdButton').hide();
      if (document.getElementById('myAddButton').style.display === "block") {
        $('#mySecondButton').hide();
      } else {
        $('#mySecondButton').show();
      }
     });

});

var calculated_age=0;

var today_date = new Date();
console.log(today_date);
var today_day = today_date.getDate();
var today_month = today_date.getMonth() + 1;
var today_year = today_date.getFullYear();


// function to calculate age based on date of birth
const getAge = function (id){
var birth_date = document.getElementById(id).value;

var split_dob = birth_date.split("/");
var birth_date_year = split_dob[2];
var birth_date_month = split_dob[0];
var birth_date_day = split_dob[1];
console.log(birth_date);
console.log(split_dob);
console.log(birth_date_year);
console.log(birth_date_month);
console.log(birth_date_day);

if (today_month > birth_date_month) {
  calculated_age = today_year - birth_date_year;
} else if (today_month == birth_date_month) {
  if (today_day >= birth_date_day) {
    calculated_age = today_year - birth_date_year;
  } else {
    calculated_age = today_year - birth_date_year - 1;
  };
} else {
  calculated_age = today_year - birth_date_year - 1;
}

console.log(calculated_age);
}

//function to match given date of birth and selected class, if not match, alert will be thrown

function matchAgeClass (id) {
  var ageMatched = false
  var classSelection = document.getElementById(id);
  var selectedProductFirst=classSelection.options[classSelection.selectedIndex].value;
  if (calculated_age < 8 && selectedProductFirst !== 'price_1H9GmTI3Lsj8gCRgTwHvc2Ji' ){
    ageMatched = false;
    alert('You have selected incorrect class, please choose the proper class');
  }else if (calculated_age >=8 && calculated_age < 31 && selectedProductFirst !== 'price_1H9GnfI3Lsj8gCRg0O529L9l' ){
    alert('You have selected incorrect class, please choose the proper class');
    ageMatched = false;
  }else if (calculated_age >=31 && calculated_age < 56 && selectedProductFirst !== 'price_1H9GoHI3Lsj8gCRgXpfmSk6O' ){
    alert('You have selected incorrect class, please choose the proper class');
    ageMatched = false;
  }else if (calculated_age >=56 && selectedProductFirst !== "price_1H9Gp8I3Lsj8gCRgKiRTUDrd" ){
    alert('You have selected incorrect class, please choose the proper class');
    ageMatched = false;
  }else {
    return ageMatched = true;
  }

  if (!ageMatched) {
    classSelection.selectedIndex = 0;
  }
}

//link to stripe payment gateway

const stripe = Stripe('pk_test_51GxExtI3Lsj8gCRgV5MKtnvl6tSUYqqLjCWQHSrE26DC72jO3KA6ubhrlC750eMg3AzDcKoaBZzNxnzRy1ZiWGEQ00ujwlRJ4K');

const redirectToCheckout = (response) => {
    if(response.error) {
        console.log(response.error)
    } else {
        stripe.redirectToCheckout({sessionId: response.session_id})
    }
};

const payForDanceClass = (lineItems) => {
    var response = fetch(`/stripe/checkout/`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
              lineItems:lineItems
            })
        }).then(function(response) {
            
        if (response.status != 200) {
            return {error: response.statusText}
        } else {
            return response.json();
        }
        
    }).then(redirectToCheckout);

}



// Database confirguration
//      https://firebase.google.com/docs/web/setup#available-libraries -->


  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCymrEUP0loYUBuZEmuTw0CIHOoDXM0bIQ",
    authDomain: "form-c070c.firebaseapp.com",
    databaseURL: "https://form-c070c.firebaseio.com",
    projectId: "form-c070c",
    storageBucket: "form-c070c.appspot.com",
    messagingSenderId: "260607029387",
    appId: "1:260607029387:web:b78be910d40c4f5945a48e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

document.getElementById('registrationForm').addEventListener('submit', submitForm);

  const paymentButton = document.getElementById('submit');
  paymentButton.onclick = submitForm();
 
  function getFormInput(id){
    return document.getElementById(id).value;
  };
  function postToFirebase (obj){
    var ref = firebase.database().ref('danceForm').push();
    ref.set(
    {
      //setting parent object
    parentName: obj.parentName,
    parentPhone: obj.parentPhone,
    parentEmail: obj.parentEmail,
    parentAddress: obj.parentAddress,
    postalCode: obj.postalCode,
    parentCity:obj.parentCity,
    //setting first student object
    studentName: obj.studentName,
    studentDob: obj.studentDob,
    studentGender: obj.studentGender,
    studentClass: obj.studentClass,
    //setting first student object
    secondStudentName: obj.secondStudentName,
    secondStudentDob: obj.secondStudentDob,
    secondStudentGender: obj.secondStudentGender,
    secondStudentClass: obj.secondStudentClass,
    //setting first student object
    thirdStudentName: obj.thirdStudentName,
    thirdStudentDob: obj.thirdStudentDob,
    thirdStudentGender: obj.thirdStudentGender,
    thirdStudentClass: obj.thirdStudentClass,
   //setting Emergency Contact object
    mainEmergencyContactName: obj.mainEmergencyContactName,
    mainEmergencyContactRelation: obj.mainEmergencyContactRelation,
    mainEmergencyContactPhone: obj.mainEmergencyContactPhone,
    studentHealthConcern:obj.studentHealthConcern,
    secondaryEmergencyContactName: obj.secondaryEmergencyContactName,
    secondaryEmergencyContactRelation: obj.secondaryEmergencyContactRelation,
    secondaryEmergencyContactPhone: obj.secondaryEmergencyContactPhone,
    agreeFullName: obj.agreeFullName

    }
    );
  };   
//change class name for database purpose
  function changeClassName(id){
    var studentClass = document.getElementById(id);
    var studentClassSelected = studentClass.options[studentClass.selectedIndex].value;
    
    if (studentClassSelected=="price_1H9GmTI3Lsj8gCRgTwHvc2Ji"){
      studentClassSelected = "Abhi Kids";
    }else if (studentClassSelected=="price_1H9GnfI3Lsj8gCRg0O529L9l"){
      studentClassSelected = "Abhi Youth";
    }else if (studentClassSelected =="price_1H9GoHI3Lsj8gCRgXpfmSk6O"){
      studentClassSelected = "Abhi Adult";
    }else if (studentClassSelected =="price_1H9Gp8I3Lsj8gCRgKiRTUDrd"){
        studentClassSelected = "Abhi Senior";
    }else {
      studentClassSelected = "none";
    }
    return studentClassSelected;
  }
 
  function submitForm(event){
  // event.preventDefault();
    var studentGender = document.getElementById('studentGender');
    var studentClass= document.getElementById('studentClass');
    var secondStudentGender = document.getElementById('secondStudentGender');
    var secondStudentClass = document.getElementById('secondStudentClass');
    var thirdStudentGender = document.getElementById('thirdStudentGender');
    var thirdStudentClass = document.getElementById('thirdStudentClass');

    var obj = {
      //getting value of parent informations
      parentName:getFormInput('name'),
      parentPhone:getFormInput('phone'),
      parentEmail:getFormInput('email'),
      parentAddress:getFormInput('address'),
      parentCity:getFormInput('parentCity'),
      postalCode: getFormInput('postal'),
      //getting value of first Student informations
      studentName:getFormInput('studentName'),
      studentDob:getFormInput('studentDob'),
      studentGender: studentGender.options[studentGender.selectedIndex].value,
      studentClass: changeClassName('studentClass'),
      //getting value of Second Student informations
      secondStudentName:getFormInput('secondStudentName'),
      secondStudentDob:getFormInput('secondStudentDob'),
      secondStudentGender:secondStudentGender.options[secondStudentGender.selectedIndex].value,
      secondStudentClass: changeClassName('secondStudentClass'),
      //getting value of Third Student informations
      thirdStudentName:getFormInput('thirdStudentName'),
      thirdStudentDob:getFormInput('thirdStudentDob'),
      thirdStudentGender:thirdStudentGender.options[thirdStudentGender.selectedIndex].value,
      thirdStudentClass:changeClassName('thirdStudentClass'),
      //getting value of Emergency Contact informations
      mainEmergencyContactName: getFormInput('mainEmergencyContactName'),
      mainEmergencyContactRelation: getFormInput('mainEmergencyContactRelation'),
      mainEmergencyContactPhone: getFormInput('mainEmergencyContactPhone'),
      studentHealthConcern:getFormInput ('studentHealthConcern'),
      secondaryEmergencyContactName:getFormInput ('secondaryEmergencyContactName'),
      secondaryEmergencyContactRelation:getFormInput ('secondaryEmergencyContactRelation'),
      secondaryEmergencyContactPhone:getFormInput ('secondaryEmergencyContactPhone'),
      agreeFullName: getFormInput('agreeFullName')
    };
   
    postToFirebase(obj) ;
    
    // document.getElementById('form').value =null;

    //selecting id and get the value selected from dropdown class menu
    var classSelection = document.getElementById("studentClass");
    var anotherStudentClass=document.getElementById("secondStudentClass");
    var thirdStudentClass=document.getElementById("thirdStudentClass");
    var selectedProductFirst=classSelection.options[classSelection.selectedIndex].value;
    var selectedProductSecond=anotherStudentClass.options[anotherStudentClass.selectedIndex].value;
    var selectedProductThird=thirdStudentClass.options[thirdStudentClass.selectedIndex].value;
    
//function to create a selected class and add it to the array of lineItems
    
  const lineItems = [];
  
    class classSelected {
      constructor(price){
       this.price = price;
       this.quantity = 1
  
      }
    }
  
    console.log(lineItems)
    let lineItem = new classSelected(selectedProductFirst);
    lineItems.push(lineItem);

    //second student creating class
  
    if (secondStudentAdded == true){
    let lineItemSecondStudent = new classSelected(selectedProductSecond)
    lineItems.push(lineItemSecondStudent)
    console.log(lineItems)
    console.log("second student was added")
    } else {
      console.log("second student wazs not added")
    }

    //third student creating class
    
    if (thirdStudentAdded == true){
      let lineItemThirdStudent = new classSelected(selectedProductThird)
      lineItems.push(lineItemThirdStudent)
      console.log(lineItems)
      console.log("third student was added")
      } else {
        console.log("third student wazs not added")
      }
    
       payForDanceClass(lineItems);
    

    };
