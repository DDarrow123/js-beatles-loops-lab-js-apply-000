function theBeatlesPlay(musicians, instruments){
  var i;
  var emptyArray = [];
  for (i = 0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  var i = 0;
  var emptyArray = [];
  
  while (i < 4) {
    emptyArray.push(facts[i] + '!!!'; 
    i++;
  }
  return emptyArray;
}


// add solution here
