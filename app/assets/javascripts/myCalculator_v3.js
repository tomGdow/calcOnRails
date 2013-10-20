var pane = document.getElementById('calcPanel');

$(dragDiv);

//Functions
function dragDiv() {
	$('#myCalculator').draggable();
	}

function btn_plus_fn () {

	if(pane.value.slice(-1) !="+" && pane.value.slice(-1) !="-" && pane.value.slice(-1) !="*" && pane.value.slice(-1) !="/" && pane.value.slice(-1) !="%")
		{	 
		pane.value += '+';

		}
 	} //Buttons (0-9)
 
function btn_subtract_fn () {

	if(pane.value.slice(-1) !="+" && pane.value.slice(-1) !="-" && pane.value.slice(-1) !="*" && pane.value.slice(-1) !="/" && pane.value.slice(-1) !="%")
		{	 
		pane.value += '-';

		}
 	}
	
function btn_multiply_fn () {

	if(pane.value.slice(-1) !="+" && pane.value.slice(-1) !="-" && pane.value.slice(-1) !="*" && pane.value.slice(-1) !="/" && pane.value.slice(-1) !="%")
		{	 
		pane.value += '*';

		}
 	}
	
function btn_divide_fn () {

	if(pane.value.slice(-1) !="+" && pane.value.slice(-1) !="-" && pane.value.slice(-1) !="*" && pane.value.slice(-1) !="/" && pane.value.slice(-1) !="%")
		{	 
		pane.value += '/';

		}
 	}
	
function btn_modulus_fn ()  {
	
		if(pane.value.slice(-1) !="+" && pane.value.slice(-1) !="-" && pane.value.slice(-1) !="*" && pane.value.slice(-1) !="/" &&  pane.value.slice(-1) !="%")
		{	 
		pane.value += '%';

		}
}

function btn_decimal_fn () {

	//if(pane.value.charAt(pane.value.length - 1) !=".")
	if(pane.value.slice(- 1) !=".")
		{	 
		pane.value += '.';

		}
 	}

function btn_cancelError_fn () {
	
	pane.value = pane.value.substring(0, pane.value.length - 1);
	
}
	
var evalAlt = function (fn) {
    return new Function('return ' + fn)();
};//An Alternative to eval
	
function btn_equals_fn () {
		
		pane.value = evalAlt(pane.value);
 		} // Evaluate the String 
		
function btn_cancel_fn () {
		
		pane.value = "";
 		}

function elementGenerate(myId, myClass,myContent, myElement) {
          var myElement = document.createElement(myElement);
          myElement.setAttribute("id", myId);
		  myElement.setAttribute("class", myClass);          
          //childNodes[0].nodeValue
          myElement.innerHTML = myContent;
          return myElement;
      }

//Generate Button Elements and Add to DOM

	//Row One	
for(i=1; i<=3; i++) {

	document.getElementById('calcRowOne').appendChild(elementGenerate(i,'mybtn', i, "button"))
};// (0-3)

document.getElementById('calcRowOne').appendChild(elementGenerate('btnMultiply','mybtn', '&times;', "button"));//multiply

	//Row Two	
for(i=4; i<=6; i++) {

	document.getElementById('calcRowTwo').appendChild(elementGenerate(i,'mybtn', i, "button")) 
};//(4-6)

document.getElementById('calcRowTwo').appendChild(elementGenerate('btnDivide','mybtn', '&#247;', "button"));//Divide

	//Row Three	
for(i=7; i<=9; i++) {

	document.getElementById('calcRowThree').appendChild(elementGenerate(i,'mybtn', i, "button")) 
};//(7-9)

document.getElementById('calcRowThree').appendChild(elementGenerate('btnSubtract','mybtn', '&#8211;', "button"));//Subtract

	//Row Four
document.getElementById('calcRowFour').appendChild(elementGenerate('0','mybtn', '0', "button"));//
document.getElementById('calcRowFour').appendChild(elementGenerate('btnDecPoint','mybtn', '&period;', "button"));
document.getElementById('calcRowFour').appendChild(elementGenerate('btnPlus','mybtnAlt', '+', "button"));

	//Row Five
document.getElementById('calcRowFive').appendChild(elementGenerate('(','mybtn', '(', "button"));//
document.getElementById('calcRowFive').appendChild(elementGenerate(')','mybtn', ')', "button"));
document.getElementById('calcRowFive').appendChild(elementGenerate('btnModulus','mybtn', 'mod', "button"));
document.getElementById('calcRowFive').appendChild(elementGenerate('btnCancelError','mybtn', 'Ce', "button"));

	//Row Six
document.getElementById('calcRowSix').appendChild(elementGenerate('btnCancel','mybtnAlt', 'C', "button"));
document.getElementById('calcRowSix').appendChild(elementGenerate('btnEquals','mybtnAlt', '=', "button"));


//EventHandlers and EventListeners
for(i=0; i<=9; i++) {
	
	document.getElementById(i).addEventListener("click", function () {pane.value += this.id}, false)
	
}//Buttons (0-9)

document.getElementById('(').addEventListener("click", function  () { pane.value += this.id}, false);
document.getElementById(')').addEventListener("click", function  () { pane.value += this.id}, false);

document.getElementById('btnPlus').onclick =  function  () { btn_plus_fn()};
document.getElementById('btnMultiply').onclick =  function  () { btn_multiply_fn()};
document.getElementById('btnDivide').onclick =  function  () { btn_divide_fn()};
document.getElementById('btnSubtract').onclick =  function  () { btn_subtract_fn()};
document.getElementById('btnEquals').onclick =  function  () { btn_equals_fn()};
document.getElementById('btnDecPoint').onclick =  function  () { btn_decimal_fn()};


document.getElementById('btnCancel').addEventListener("click", function  () {btn_cancel_fn()}, false); 
document.getElementById('btnCancelError').addEventListener("click", function  () {btn_cancelError_fn()}, false);
document.getElementById('btnModulus').addEventListener("click", function  () {btn_modulus_fn()}, false);


//Lucjen

document.addEventListener('keypress',function (e) {
  if (13 == e.keyCode) {
     btn_equals_fn()
  }
});

//Keep These

/*function btn_equals_fn () {
		
		document.getElementById('calcPanel').value = eval(pane.value.replace(/[^-()\d+.]/g, ''));
 		}*/
		
/*function btn_equals_fn () {
		
		document.getElementById('calcPanel').value = evalAlt(pane.value);
 		}*/
		
/*function btn_equals_fn () {
		
		document.getElementById('calcPanel').value = evalAlt(pane.value.replace(/[^-()\d/*+.]/g, ''));
 		}*/
		