
var phoneRegx= /^\d{10}$/;

function validateStepOne() {
    var name = document.forms["registrationForm"]["name"].value;
    var phone = document.forms["registrationForm"]["phone"].value;
    var address = document.forms["registrationForm"]["address"].value;
    var postal=document.forms["registrationForm"]["postal"].value;
    var city = document.forms["registrationForm"]["parentCity"].value;
    var email=document.forms["registrationForm"]["email"].value;
  
    
    var studentName = document.forms["registrationForm"]["studentName"].value;
    var studentDob = document.forms["registrationForm"]["studentDob"].value;
    var genderOne = document.getElementById("studentGender").value;
    var classOne=document.getElementById("studentClass").value;
    var regx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
      
    if (name == "") {
      $('#nameError').html("*Name must be filled out");
       return false
    } else if (!isNaN(name)){
      $('#nameError').html("*Name cannot be a number");
       return false
    }
      if (isNaN(phone) || phone < 0 || phone > 9999999999 || phone < 999999999) {
      $('#phoneError').html("*Phone number is not valid")
      return false
    }
    if(address ==""){
      $('#addressError').html("*Address must be filled out");
      return false
    }
    if(postal==""){
      $('#postalError').html("*Postal code is required");
      return false
    }
    if(city==""){
      $('#cityError').html("*City is required");
      return false
    }
    if(email==""){
      $('#emailError').html("*Email is required");
      return false
    }else if (!regx.test(email)){
      $('#emailError').html("*Please enter valid email");
      return false
    }
    if(studentName==""){
      $('#fsnameError').html("*Student name is required");
      return false
    }else if (!isNaN(studentName)){
      $('#fsnameError').html("*Name cannot be a number");
        return false
    }
    if(studentDob==""){
      $('#fsdobError').html("*Date of birth is required");
      return false
    }
    if(genderOne=="Gender"){
      $('#fsgError').html("*Gender is required");
      return false
    }
    if(classOne=="Class Selection"){
      $('#fsclassError').html("*Class selection is required");
      return false
    }
    if(secondStudentAdded==true){
    var secondStudentName = document.forms["registrationForm"]["secondStudentName"].value;
    var secondStudentDob = document.forms["registrationForm"]["secondStudentDob"].value;

    var genderTwo = document.getElementById("secondStudentGender").value;
    var secondClassTwo=document.getElementById("secondStudentClass").value;
           
        if(secondStudentName==""){
          $('#ssnError').html("*Student Name is required");
            return false
          }else if (!isNaN(secondStudentName)){
            $('#ssnError').html("*Student name cannot be a number");
            return false
          }
        if(secondStudentDob==""){
          $('#ssdobError').html("*Date of birth is required");
            return false
          }
        if(genderTwo=="Gender"){
          $('#ssgError').html("*Gender is required");
            return false
          }
          if(secondClassTwo=="Class Selection"){
            $('#ssclassError').html("*Class selection is required");
            return false
          }
  
    }
    if(thirdStudentAdded==true){
        var thirdStudentName = document.forms["registrationForm"]["thirdStudentName"].value;
        var thirdStudentDob = document.forms["registrationForm"]["thirdStudentDob"].value;

        var genderThree = document.getElementById("thirdStudentGender").value;
        var classThree=document.getElementById("thirdStudentClass").value;
        

         if(thirdStudentName==""){
          $('#tsnError').html("*Student name is required");
                return false
          }else if (!isNaN(thirdStudentName)){
            $('#tsnError').html("*Name cannot be a number");
            return false
        }
        if(thirdStudentDob==""){
          $('#tsdobError').html("*Date of Birth is required");
                return false
              }
        if(genderThree=="Gender"){
          $('#tsgError').html("*Gender is required");
                return false
        }
        if(classThree=="Class Selection"){
          $('#tsclassError').html("*Class selection is required");
                return false
              }
      
        }
    return true;
  }


function validateStepTwo(){
var mainName = document.forms["registrationForm"]["mainEmergencyContactName"].value;
var mainRel = document.getElementById("mainEmergencyContactRelation").value;
var mainPhone= document.forms["registrationForm"]["mainEmergencyContactPhone"].value;
var studentHealth= document.forms["registrationForm"]["studentHealthConcern"].value;
var secondName = document.forms["registrationForm"]["secondaryEmergencyContactName"].value;
var secRel = document.getElementById("secondaryEmergencyContactRelation").value;
var secondPhone = document.forms["registrationForm"]["secondaryEmergencyContactPhone"].value;
var agreeEmer = document.getElementById("MainContent_AcknowledgeCheckBox").checked ;

if(mainName==""){
  $('#mnError').html("*Emergency Contact Name is required");
    return false
}else if (!isNaN(mainName)){
  $('#mnError').html("*Name cannot be a number");
    return false
}
if(mainRel=="Relation"){
  $('#mrError').html("*Relation is required");
    return false
}
if(mainPhone==""){
  $('#mpError').html("*Phone is required");
    return false
}
    if(!phoneRegx.test(mainPhone)){
      $('#mpError').html("*Main Emergency Phone Number is not valid") 
      return false
    }
if(!agreeEmer){
  $('#checkOneError').html("*please check the checkbox to proceed");
  return false
}
if(studentHealth==""){
  $('#textAreaError').html("Student Health Information is required");
  return false
}
if(secondName==""){
  $('#secnameError').html("*Secondary Emergency Contact Name is required");
    return false
}else if (!isNaN(secondName)){
  $('#secnameError').html("*Name cannot be a number");
    return false
  }
  if(secRel=="Relation"){
    $('#secrelError').html("*Relation is required");
    return false
  }
if(secondPhone==""){
  $('#secphoneError').html("*Phone number is required");
    return false
  }

if(!phoneRegx.test(secondPhone)){
  $('#secphoneError').html("*Phone Number is not valid") 
  return false
}
return true
}

function validateStepThree(){
    var agreeLiability =document.getElementById("MainContent_AcknowledgeCheckBox2").checked ;
    if(!agreeLiability){
        alert("please check the box to proceed")
            return false
    }
    return true
}
function validateStepFour(){
    var agreePolicy = document.getElementById("inlineCheckboxPolicy").checked;
    var agreeName = document.getElementById("agreeFullName").value;
    if(!agreePolicy){
      $('#checkbox2Error').html("*Please check the box to proceed")
            return false
    }
    if(agreeName==""){
      $('#agreeNameError').html("*Name is required");
        return false
    }else if (!isNaN(agreeName)){
      $('#agreeNameError').html("*Name cannot be a number");
        return false
      }
      
      return true
    }
