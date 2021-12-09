'use strict';

// List of sentences
var _CONTENT = [ "Dobro došli na moj sajt", "Ko sam ja ?", "Junior Front end & WordPress developer...", "Sa jednom godinom iskustva" , "Još pratite ovaj tekst ?", "Super ! Privukao sam vam pažnju" , "Otvoren sam za sve vaše prijedloge" , "Kontaktirajte me radi poslovne saradnje" ,"Uživajte na sajtu !" ];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 30);
		},500);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);




const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



window.onscroll = function() {myFunction()};
const up = document.getElementById("up");

function myFunction(){
    if(window.scrollY > 200){
		up.classList.remove("hidden");
        
    } else{
        up.classList.add("hidden");
        
    }
}



//////////////////Igra

let zamisljeniBroj = Math.trunc(Math.random()*20)+1;

let brojPokusaja = 6;

let najveciRezultat1 = 0;


document.querySelector('.provjeri').addEventListener('click' , function() {
	const pogodi = Number(document.querySelector('.pogodi').value);

	if(!pogodi) {
		document.querySelector('.poruka').textContent="Unesi broj od 1 do 20 !"
	}
	else if(pogodi === zamisljeniBroj) {
		document.querySelector('.poruka').textContent="BRAVO , POGODAK!";
		brojPokusaja--;
		document.querySelector('.rezultat1').textContent=brojPokusaja;
		document.querySelector('.broj').textContent = zamisljeniBroj;
		document.querySelector('.igraokvir').style.background = "green";
		document.querySelector('.igraokvir').style.color="white";
		

		if(brojPokusaja > najveciRezultat1) {
			 najveciRezultat1 = brojPokusaja;
			 document.querySelector('.najveciRezultat1').textContent = najveciRezultat1;
		}
	}
	else if (pogodi > zamisljeniBroj) {

		if(brojPokusaja > 1) {
			document.querySelector('.poruka').textContent="Pokusaj sa manjim brojem hmm...";
		brojPokusaja--;
		document.querySelector('.rezultat1').textContent=brojPokusaja;
		}
		else{
			document.querySelector('.poruka').textContent="IZGUBILI STE" ;
			document.querySelector('.igraokvir').style.background = "red";
			document.querySelector('.igraokvir').style.color = "white";
			document.querySelector('.broj').textContent = zamisljeniBroj;


		}
		
	}
	else if (pogodi < zamisljeniBroj) {

		if(brojPokusaja>1) {
			document.querySelector('.poruka').textContent="Pokusaj sa vecim brojem hmm...";
		brojPokusaja--;
		document.querySelector('.rezultat1').textContent=brojPokusaja;
		}
		else{
			document.querySelector('.poruka').textContent="IZGUBILI STE" ;
			document.querySelector('.igraokvir').style.background = "red";
			document.querySelector('.igraokvir').style.color = "white";
			document.querySelector('.broj').textContent = zamisljeniBroj;

		}


	}
})

document.querySelector('.igrajponovo').addEventListener('click' , function() {

	brojPokusaja = 6;
    zamisljeniBroj = Math.trunc(Math.random()*20)+1;
	document.querySelector('.poruka').textContent="Kreni pogađati..." ;
	document.querySelector('.rezultat1').textContent=6;
	document.querySelector('.broj').textContent = "?";
	document.querySelector('.pogodi').value = '';
	document.querySelector('.igraokvir').style.background = "white";
			document.querySelector('.igraokvir').style.color = "grey";


})

//navigacija
const sidebar=document.getElementById('sidebar');
		    const toggle=document.getElementById('toggle');
		    
		    
		    document.onclick=function(e)  
		    {
		        if(e.target.id !== 'sidebar' && e.target.id !== 'toggle') 
		        {
		            sidebar.classList.remove('active'); 
		            toggle.classList.remove('active'); 
		        }
		    };

		    toggle.onclick = function(){
				sidebar.classList.toggle('active');
				toggle.classList.toggle('active');
			}


