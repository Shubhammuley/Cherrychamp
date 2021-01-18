module.exports = function makeGetSearch({
  algoliasearch,
  gamesCollection,
  _,
}) {
  async function getSearch({
    searchString,
  }) {
    const client = algoliasearch('YE86VM9ZI1', '86349eddbec36560919b7c995e52c43d');
    const index = client.initIndex('name-new');
  
    const objects = [{
      firstname: 'Jimmie',
      lastname: 'Barninger'
    }, {
      firstname: 'Warren',
      lastname: 'Speach'
    },{
      firstname: 'Shubham',
      lastname: 'Muley'
    }, {
      firstname: 'New',
      lastname: 'Shubham'
    },{
      firstname: 'add new name',
      lastname: 'New anem'
    }];
    

    const list = await gamesCollection.listGames();

    let dif;
    if(list.length){
      dif = _.differenceWith(objects, list, _.isEqual);
    } else {
      dif = objects;
    }
    if(dif.length){
        await gamesCollection.insertMany(dif);
        await index.saveObjects(dif, { autoGenerateObjectIDIfNotExist: true });
    }

    const result = [];
    await index.search(searchString).then(({ hits }) => {
      result.push(hits);
    });

    return result;
  }
  return getSearch;
};
