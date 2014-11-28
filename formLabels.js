//This object makes the labels for text fields in a form to appear when the field is clicked
//while the value or the palceholder displayed in the filed disappears.
//
//Labels must be in the <label> html tag intitialised with a "nolabel" class.
//the <label> tag must be a previous sibling of the form field

"use strict";

function FormWithLabels(el) {
	var inputs = el.getElementsByTagName('input'),
		textareas= el.getElementsByTagName('textarea'),
		i;
		
	this.textFields = [];
	
	for (i=0; i<inputs.length; i++) {
		if (inputs[i].type == 'text') {
			this.textFields.push(inputs[i]);
		}
	}
	
	for (i=0; i<textareas.length; i++) {
		this.textFields.push(textareas[i]);
	}
	
	for (i=0; i<this.textFields.length; i++) {
		this.textFields[i].onclick = function() {
			var label = getLabel(this);
			label.className = label.className.replace(/nolabel/, '');
			if (this.value) {
				this.value = '';
			}
			if (this.placeholder) {
				this.placeholder='';
			}
		}
	}
	
	function getLabel(n)
	{
		var x = n.previousSibling;
		
		while (x && x.tagName!='LABEL')
		{
			x = x.previousSibling;
		}
		return x;
	}
}

//an example of initialisation
new FormWithLabels(document.getElementsByTagName('form')[0]);
