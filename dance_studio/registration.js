// form validation
$(document).ready(function(){
  // Smart Wizard
  $('#smartwizard').smartWizard({onLeaveStep:leaveAStepCallback,
                              onFinish:onFinishCallback});

  function leaveAStepCallback(obj){
    var step_num= obj.attr('rel'); // get the current step number
    return validateSteps(step_num); // return false to stay on step and true to continue navigation
  }

  function onFinishCallback(){
   if(validateAllSteps()){
    $('form').submit();
   }
  }

  // Your Step validation logic
  function validateSteps(stepnumber){
    var isStepValid = true;
    // validate step 1
    if(stepnumber == 1){
      // Your step validation logic
      // set isStepValid = false if has errors
    }
    // ...
  }
  function validateAllSteps(){
    var isStepValid = true;
    // all step validation logic
    return isStepValid;
  }

});

// end of form validation
function disclaimerFunction() {
    $(".AcknowledgeOuterDiv").scroll(function() {
        var outerDiv = $(this);
        var innerDiv = $(".AcknowledgeInnerDiv", $(this));
        var ScrollMod = 1;
        if (outerDiv.offset().top < innerDiv.outerHeight()) {
            ScrollMod = -1;
        }
        if (Math.round((ScrollMod * innerDiv.offset().top) + outerDiv.height() + outerDiv.offset().top) >= innerDiv.outerHeight() && Math.abs(innerDiv.offset().top) != 0) {
            $(".AcknowledgeCheckBox input").removeAttr("disabled");
            $(this).unbind("scroll");
        } else {
            $(".AcknowledgeCheckBox input").attr("disabled", true);
        }
    });
};

document.getElementById("myCity").defaultValue = "Calgary";



// <!-- TODO: Add SDKs for Firebase products that you want to use
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

  // document.getElementById('form').addEventListener('submit', submitForm);

  const paymentButton = document.getElementById('submit');
  paymentButton.onclick = submitForm;

  function getFormInput(id){
    return document.getElementById(id).value;
  };
  function postToFirebase (obj){
    var ref = firebase.database().ref('testForm').push();
    ref.set({
      // address: obj.address,
      // agreeFullName: obj.agreeFullName,
      // anotherStudent: obj.address,
      // address: obj.address,
      // email: obj.email,
      // phone: obj.phone,
      // parentName : obj.parentName,
      // postalCode:obj.postalCode,
      agreeFullName: obj.agreeFullName
    });
  };
 
  function submitForm(){
    // event.preventDefault();
    var obj = {
      // parentName:getFormInput('name'),
      // email:getFormInput('email'),
      // phone:getFormInput('phone'),
      // address:getFormInput('address'),
      // postalCode: getFormInput('postal'),
      agreeFullName: getFormInput('agreeFullName')
    };
    postToFirebase(obj);
   
    document.getElementById('form').value =null;

    // document.getElementById('name').value=null;
    // document.getElementById('email').value=null;
    // document.getElementById('phone').value=null;
    // document.getElementById('comment').value=null;
  };

 

// $('.AcknowledgeOuterDiv').scroll(function () {
//     if ($(this).scrollTop() == $(this)[0].scrollHeight - $(this).height()) {            
//         $('.AcknowlegeCheckBox input').removeAttr('disabled');
//     }
// });

// $('.lateHeader').on('click', () => {
//     $('.login-form').show();
//   });


