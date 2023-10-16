/******************
 * YOUR CODE HERE *
 ******************/

function colorDeconstructor(color){
  switch(color){
    case 'purple':{
      return 'red and blue'
    }
    case 'orange': {
      return 'red and yellow'
    }
    case 'green': {
      return 'blue and yellow'
    }
  }
}

// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
