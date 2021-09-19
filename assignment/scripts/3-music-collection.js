console.log('***** Music Collection *****')
let collection = [];

//creating fucntion to push object into collection
function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
  return console.log('new album added', collection)
}

//checking to see if function addToCollection works.
addToCollection('Violater', 'Depeche Mode', '1990');
addToCollection('Amor Prohibido', 'Selena', '1994');
addToCollection('All Eyez on Me', 'Tupac Shakur', '1996');
addToCollection('Songs of Faith and Devotion', 'Depeche Mode', '1993');
addToCollection('Energía', 'J Balvin', '2016');
addToCollection('A Day at the Races', 'Queen', '1976')

//creating a function to log each album
function showCollection(arrayP) {
  console.log('The number of albums logged is', arrayP.length);
  for(let i = 0; i < arrayP.length; i++){
    console.log(arrayP[i].title, 'by', arrayP[i].artist, 'published in', arrayP[i].yearPublished);
  } //I feel like there is an easier way to write this log out...
};
showCollection(collection);

//this function does not work and I couldn't figure it out. It seems like I'm so close! maybe anyway... ha.
function findByArtist(artist) { //set parameter
  let artistFound = []; //create empty array
for(album of collection){ //create the loop
  if(artist === album.artist){ // set the condition for what I'm looking for in the loop. I think here is where its wrong.
    artistFound.push(album.artist); // push findings into empty array
    return console.log(artistFound); //return array or No results
  } else {
    return 'No results'; //I continue to get a 'Depeche Mode' but only x1 along with undefined on the console or
// no results depending on how I tweak it.
    }
  }
}

console.log('In findByArtist function', findByArtist( 'Depeche Mode'));
//also tried switching everything over to using a basic index loop and === to collection[i].artist. No success.

//function findByArtist( artist ) {
//  let artistFound = [];
//for( let i = 0; i < collection.length; i++ ){
//  if( artist === collection[i].artist ) {
//    artistFound.push( collection[i].artist );
//    return console.log( artistFound );
//  } else {
//    return 'No results';
//    }
//  }
//}
