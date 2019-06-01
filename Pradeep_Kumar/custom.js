var form = document.querySelector('form');
var inputV = document.querySelector('.form-control');

//total_notes
var total_notes = document.querySelector('.total_notes');
var notesArray = [2000,500,200,100,50,10,5,2,1];
var finalArray = [];
var total_notes_q = 0;

form.onsubmit = function(){
    var inputVal = inputV.value;
    if(inputVal != ''){
        for(var i=0; i<notesArray.length; i++){
                finalArray.push(Math.floor(inputVal / notesArray[i]));
                inputVal = inputVal % notesArray[i];
        }
        for(var x=0; x<finalArray.length; x++){
            document.querySelector('.note_'+notesArray[x]).innerHTML = finalArray[x];
        }        
        for(var z=0; z<finalArray.length; z++){
            total_notes_q += finalArray[z];
        }
        total_notes.innerHTML = total_notes_q;
    } else {
        alert('please enter value');
    }
    return false;
};
