(function() {
	let value1 = document.getElementById("btn1");
	let value2 = document.getElementById("btn2");
	let value3 = document.getElementById("btn3");
	let value4 = document.getElementById("btn4");
	let value5 = document.getElementById("btn5");
	let val1 = document.getElementById("btn1").value;
	let val2 = document.getElementById("btn2").value;
	let val3 = document.getElementById("btn3").value;
	let val4 = document.getElementById("btn4").value;
	let val5 = document.getElementById("btn5").value;
	let r = document.getElementById("variable");
	let s = document.getElementById("subbtn");
	let cC = document.getElementById("cC");
	function display() {
		cC.style.display = "initial";
	}
	s.addEventListener("click", display);
	function clicker1() {
		r.innerHTML = `${val1}`;
	}
	function clicker2() {
		r.innerHTML = `${val2}`;
	}
	function clicker3() {
		r.innerHTML = `${val3}`;
	}
	function clicker4() {
		r.innerHTML = `${val4}`;
	}
	function clicker5() {
		r.innerHTML = `${val5}`;
	}
	value1.addEventListener("click", clicker1);
	value2.addEventListener("click", clicker2);
	value3.addEventListener("click", clicker3);
	value4.addEventListener("click", clicker4);
	value5.addEventListener("click", clicker5);
	function color1() {
		value1.style.background = "gray";
		value1.style.color = "white";
		value2.style.background = "rgba(200, 200, 200, 0.15)";
		value3.style.background = "rgba(200, 200, 200, 0.15)";
		value2.style.color = "gray";
		value3.style.color = "gray";
		value4.style.background = "rgba(200, 200, 200, 0.15)";
		value4.style.color = "gray";
		value5.style.background = "rgba(200, 200, 200, 0.15)";
		value5.style.color = "gray";
	}
	function color2() {
		value2.style.background = "gray";
		value2.style.color = "white";
		value1.style.background = "rgba(200, 200, 200, 0.15)";
		value1.style.color = "gray";
		value3.style.background = "rgba(200, 200, 200, 0.15)";
		value3.style.color = "gray";
		value4.style.background = "rgba(200, 200, 200, 0.15)";
		value4.style.color = "gray";
		value5.style.background = "rgba(200, 200, 200, 0.15)";
		value5.style.color = "gray";
	}
	function color3() {
		value3.style.background = "gray";
		value3.style.color = "white";
		value2.style.background = "rgba(200, 200, 200, 0.15)";
		value2.style.color = "gray";
		value1.style.background = "rgba(200, 200, 200, 0.15)";
		value1.style.color = "gray";
		value4.style.background = "rgba(200, 200, 200, 0.15)";
		value4.style.color = "gray";
		value5.style.background = "rgba(200, 200, 200, 0.15)";
		value5.style.color = "gray";
	}
	function color4() {
		value4.style.background = "gray";
		value4.style.color = "white";
		value2.style.background = "rgba(200, 200, 200, 0.15)";
		value2.style.color = "gray";
		value1.style.background = "rgba(200, 200, 200, 0.15)";
		value1.style.color = "gray";
		value3.style.background = "rgba(200, 200, 200, 0.15)";
		value3.style.color = "gray";
		value5.style.background = "rgba(200, 200, 200, 0.15)";
		value5.style.color = "gray";
	}
	function color5() {
		value5.style.background = "gray";
		value5.style.color = "white";
		value2.style.background = "rgba(200, 200, 200, 0.15)";
		value2.style.color = "gray";
		value1.style.background = "rgba(200, 200, 200, 0.15)";
		value1.style.color = "gray";
		value3.style.background = "rgba(200, 200, 200, 0.15)";
		value3.style.color = "gray";
		value4.style.background = "rgba(200, 200, 200, 0.15)";
		value4.style.color = "gray";
	}
	value1.addEventListener("click", color1);
	value2.addEventListener("click", color2);
	value3.addEventListener("click", color3);
	value4.addEventListener("click", color4);
	value5.addEventListener("click", color5);
}());