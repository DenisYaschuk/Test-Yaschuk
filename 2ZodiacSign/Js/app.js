window.onload = function () {
    document.getElementById("getZodiacSignBtn").onclick = function () {
		let BirthDate;
		let ZodiacSign;
		let Day;
		let Month;
		BirthDate=new Date(document.getElementById("BirthDate").value);
		Day=BirthDate.getDate();
		Month=BirthDate.getMonth();
		if((Day>=21 && Month==2)||(Day<=20 && Month==3)){
			ZodiacSign="Aries: The Ram";
		}
		else if((Day>=21 && Month==3)||(Day<=20 && Month==4)){
			ZodiacSign="Taurus: The Bull";
		}
		else if((Day>=21 && Month==4)||(Day<=21 && Month==5)){
			ZodiacSign="Gemini: The Twins";
		}
		else if((Day>=22 && Month==5)||(Day<=22 && Month==6)){
			ZodiacSign="Cancer: The Crab";
		}
		else if((Day>=23 && Month==6)||(Day<=23 && Month==7)){
			ZodiacSign="Leo: The Lion";
		}
		else if((Day>=24 && Month==7)||(Day<=23 && Month==8)){
			ZodiacSign="Virgo: The Maiden";
		}
		else if((Day>=24 && Month==8)||(Day<=23 && Month==9)){
			ZodiacSign="Libra: The Scales";
		}
		else if((Day>=24 && Month==9)||(Day<=22 && Month==10)){
			ZodiacSign="Scorpio: The Scorpion";
		}
		else if((Day>=23 && Month==10)||(Day<=21 && Month==11)){
			ZodiacSign="Sagittarius: The Archer";
		}
		else if((Day>=22 && Month==11)||(Day<=20 && Month==0)){
			ZodiacSign="Capricorn: The Mountain Sea-goat";
		}
		else if((Day>=21 && Month==0)||(Day<=20 && Month==1)){
			ZodiacSign="Aquarius: The Water-bearer";
		}
		else if((Day>=21 && Month==1)||(Day<=20 && Month==2)){
			ZodiacSign="Pisces: The Fish";
		}
		else{
			alert("Eror occured.Please enter a date or try again.");
			return ;
		}
		document.getElementById("ZodiacSign").value=ZodiacSign;
    };
};