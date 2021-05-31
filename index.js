function writeCards (namesArray, event) {
    let cards = [] 
    for (let i = 0; i < namesArray.length; i++ ) {
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}


function countDown (startingNiumber) {
    while (startingNiumber > 0 ) {
        console.log(startingNiumber); 
        startingNiumber -= 1; 

    }
    console.log(startingNiumber);
}