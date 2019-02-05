window.onload = function () {
    document.getElementById("ConvertBtn").onclick = function () {
		let getText;
		let SpeedKmh;
		let SpeedMs;
		getText=document.getElementById("SpeedKm/h").value;
		SpeedKmh=parseFloat(getText.replace(",","."));
		SpeedMs=SpeedKmh*10/36;
		if(isNaN(SpeedMs)){
			alert("Enter a number");
		}
		else{
		document.getElementById("SpeedM/s").value=SpeedMs;
		};
    };
};