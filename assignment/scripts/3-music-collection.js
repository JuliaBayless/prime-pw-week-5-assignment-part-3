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
  return collection
}

//checking to see if function addToCollection works.
console.log('in addToCollection', addToCollection('Enjoy the Silence', 'Depeche Mode', '1990'));
