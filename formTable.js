document.getElementById('myform').addEventListener('submit', 
function(event) {
	event.preventDefault(); 
  var formFields = document.forms["myform"];
  
   var fName = formFields["first-name"].value;
   var lName = formFields["last-name"].value;
   var gender = formFields["gender"].value;
   var address = formFields["address"].value;
   var birthdate = formFields["birthdate"].value;
   
   const tRow = document.createElement('tr')
   const tData = document.createElement('td')
   
    const userFName = document.createElement("td")
    userFName.textContent = fName;
    const userLName = document.createElement("td")
    userLName.textContent = lName;
     const userGender = document.createElement("td")
    userGender.textContent = gender;
     const userAddress = document.createElement("td")
    userAddress.textContent = address;
     const userBirthdate = document.createElement("td")
    userBirthdate.textContent = birthdate;
    
  	tRow.appendChild(userFName);
    tRow.appendChild(userLName);
    tRow.appendChild(userGender);
    tRow.appendChild(userAddress);
    tRow.appendChild(userBirthdate);
    
   document.getElementById("tableBody").appendChild(tRow);

});