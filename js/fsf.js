
var liElements = document.getElementById('form-wrap').getElementsByTagName('li');


var onload = function(){
	for(var i=0; i < liElements.length; ++i){
		if(liElements[i].className !== 'current'){
			liElements[i].className = 'hide';
		}
	}

	//Add Event handlers
	document.getElementById('q1').addEventListener("keyup", function(e){
		if(e.which === 13){
			liElements[0].className = 'anim-up-out';
			liElements[0].addEventListener('transitionend', function(e){
				liElements[0].className = 'hide';
				liElements[1].className = 'current anim-up-in'
			});
		}

	});

	document.getElementById('q2').addEventListener("keyup", function(e){
		console.log("Submit q2");
		if(e.which === 13){
			liElements[1].className = 'anim-up';
			liElements[2].className = 'current anim-up'
		}
	});

};
