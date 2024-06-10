let registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let FullName = document.getElementById("fName");
  let Username = document.getElementById("uName");
  let Password = document.getElementById("pass");
  let ConfirmPassword = document.getElementById("cpass");
  let EmailAddress = document.getElementById("gmail");
  let PhoneNumber = document.getElementById("pnum");
  let DateOfBirth = document.getElementById("DOB");
  let gender = document.querySelector('input[name="gender"]:checked');
  let hobbies = document.querySelector('input[name="Hobbies"]:checked');
  let Bio = document.getElementById("info");
  let SelectYourCountry = document.getElementById("Ctry");
  let ProfilePicture = document.getElementById("picture");
 

  if (Username.value == "" || Password.value == "" || FullName == "" || ConfirmPassword == "" || EmailAddress == "" || PhoneNumber == "" || DateOfBirth == "" || Bio == "" || SelectYourCountry == "" || ProfilePicture == "") {
    alert("Ensure you input a value in both fields!");
  } else {
   
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a FullName of ${FullName.value}, username of ${Username.value} , Email of ${EmailAddress.value} , password of ${Password.value} PhoneNumber of ${PhoneNumber.value} DOB ${DateOfBirth.value} belongs to the ${SelectYourCountry.value} national and has a profile pictur ${ProfilePicture.value}`
    );
	console.log(gender.value,hobbies.value);

	FullName.value = "";
    Username.value = "";
    Password.value = "";
	ConfirmPassword.value = "";
	EmailAddress.value = "";
	PhoneNumber.value = "";
	DateOfBirth.value = "";
	Bio.value = "";
	SelectYourCountry.value = "";
	ProfilePicture.value = "";
	gender.value = "";
	hobbies.value = "";



  }
});