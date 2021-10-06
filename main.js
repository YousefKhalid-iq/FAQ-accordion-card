let faq1;
let faq2;
let faq3;
let faq4;
let faq5;

function show_hide_faq1() {
	if (faq1==1) {
		document.getElementById("faq-answer1").style.display="none";
		document.getElementById("open-arrow1").style.transform="rotate(0deg)";
		document.getElementById("question1").style.color="hsl(237, 12%, 33%)";
		document.getElementById("question1").style.fontWeight="400";
		return faq1=0;
	} else {
		document.getElementById("faq-answer1").style.display="block";
		document.getElementById("open-arrow1").style.transform="rotate(180deg)";
		document.getElementById("question1").style.color="hsl(100, 100%, 0%)";
		document.getElementById("question1").style.fontWeight="700";
		return faq1=1;
	}		
}

function show_hide_faq2() {
	if (faq2==1) {
		document.getElementById("faq-answer2").style.display="none";
		document.getElementById("open-arrow2").style.transform="rotate(0deg)";
		document.getElementById("question2").style.color="hsl(237, 12%, 33%)";
		document.getElementById("question2").style.fontWeight="400";
		return faq2=0;
	} else {
		document.getElementById("faq-answer2").style.display="block";
		document.getElementById("open-arrow2").style.transform="rotate(180deg)";
		document.getElementById("question2").style.color="hsl(100, 100%, 0%)";
		document.getElementById("question2").style.fontWeight="700";
		return faq2=1;
	}		
}

function show_hide_faq3() {
	if (faq3==1) {
		document.getElementById("faq-answer3").style.display="none";
		document.getElementById("open-arrow3").style.transform="rotate(0deg)";
		document.getElementById("question3").style.color="hsl(237, 12%, 33%)";
		document.getElementById("question3").style.fontWeight="400";
		return faq3=0;
	} else {
		document.getElementById("faq-answer3").style.display="block";
		document.getElementById("open-arrow3").style.transform="rotate(180deg)";
		document.getElementById("question3").style.color="hsl(100, 100%, 0%)";
		document.getElementById("question3").style.fontWeight="700";
		return faq3=1;
	}		
}

function show_hide_faq4() {
	if (faq4==1) {
		document.getElementById("faq-answer4").style.display="none";
		document.getElementById("open-arrow4").style.transform="rotate(0deg)";
		document.getElementById("question4").style.color="hsl(237, 12%, 33%)";
		document.getElementById("question4").style.fontWeight="400";
		return faq4=0;
	} else {
		document.getElementById("faq-answer4").style.display="block";
		document.getElementById("open-arrow4").style.transform="rotate(180deg)";
		document.getElementById("question4").style.color="hsl(100, 100%, 0%)";
		document.getElementById("question4").style.fontWeight="700";
		return faq4=1;
	}		
}

function show_hide_faq5() {
	if (faq5==1) {
		document.getElementById("faq-answer5").style.display="none";
		document.getElementById("open-arrow5").style.transform="rotate(0deg)";
		document.getElementById("question5").style.color="hsl(237, 12%, 33%)";
		document.getElementById("question5").style.fontWeight="400";
		return faq5=0;
	} else {
		document.getElementById("faq-answer5").style.display="block";
		document.getElementById("open-arrow5").style.transform="rotate(180deg)";
		document.getElementById("question5").style.color="hsl(100, 100%, 0%)";
		document.getElementById("question5").style.fontWeight="700";
		return faq5=1;
	}		
}