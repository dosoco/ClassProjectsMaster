/******************
 * YOUR CODE HERE *
 ******************/

function colorCombinator(color1, color2){
  if(color1 === 'red' && color2 === 'blue' || color2 === 'red' && color1 === 'blue'){
    return 'purple'
  }else if(color1 === 'yellow' && color2 === 'blue' || color2 === 'yellow' && color1 === 'blue'){
    return 'green'
  }else if(color1 === 'red' && color2 === 'yellow' || color2 === 'red' && color1 === 'yellow'){
    return 'orange'
  }
}


// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
