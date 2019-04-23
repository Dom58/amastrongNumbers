var isEnabled = false; 

			// 1. Checking 3 inputed digits
			function checkLength()
			{
				var i =document.getElementById("checkNumber");
				if (i.value.length <3 || i.value.length >3)
				{
					document.getElementById("checkbutton").style = "background-image: none; background-color: #aad0ee; cursor: not-allowed;";
					isEnabled = false;
				}

				else
				{
					document.getElementById("checkbutton").style = " background-image: none; background-color:  #2196f3;";
					isEnabled = true;
				}
			}
	
		 // 2. Show alert  

		  function showAlert()
		  {
		    if(!isEnabled)
		    {
		    number = Number(document.getElementById("checkNumber").value);
		    alert("Check button is already deactivated, because the digit(s) you entered "+ " ( " + number +" ) " +" are less or greater than 3 digits!");
		    }
		  }

	
		// 3. Check if inputed is an Armstrong number or not 
	
		function isArmstrongNumber(){

			if(isEnabled) 
			{


				var pivotnumber,number,themodulus,addition = 0;
				number = Number(document.getElementById("checkNumber").value);

				pivotnumber = number;

				while(number > 0)
				{
					themodulus = number%10;
					addition = addition + themodulus*themodulus*themodulus;
					number = parseInt(number/10);
				}

				if(addition == pivotnumber)
				{
					document.getElementById('theresult').innerHTML="The inputed number " + " ( " + pivotnumber + " ) " + " is an Armstrong number." ;
				}

				else
				{
					document.getElementById('theresult').innerHTML="The inputed number " + " ( " + pivotnumber + " ) " + " is not Armstrong number !" ;
				}
			}

			else
			{
				showAlert();
			}

		}