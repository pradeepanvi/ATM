var btn = document.querySelector('.btn');
var inputV = document.querySelector('.form-control');

//notes
var notes = document.querySelectorAll('[class^=note_]')

//total_notes
var total_notes = document.querySelector('.total_notes');
var notesArray = [2000,500,200,100,50,10,5,2,1];

btn.addEventListener('click', function(){
    var inputVal = inputV.value;
    if(inputVal != ''){
        for(var i=0; i<notesArray.length; i++){
            if(inputVal > notesArray[i]){
                var notes = 0;
                for(var x=0; x<notesArray[i]; x++){
                    var myVal = inputVal - notesArray[i];
                    document.querySelector('.note_'+notesArray[i]).innerHTML = parseInt(notes);
                    notes++;
                    inputVal = Math.abs(myVal);
                }
            }
        }
        for(var z=0; z<notesArray.length; z++){
            total_notes.innerHTML + document.querySelector('.note_'+notesArray[z]).innerHTML;
            total_notes.innerHTML;
        }
    } else {
        alert('please enter value');
    }
    console.log(inputVal);

})    
