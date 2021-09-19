console.log('***** Music Collection *****')
let collection = [];

addToCollection( title , artist , yearPublished ) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
  return collection
}
