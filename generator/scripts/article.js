//
// Authors
//
(function(coll){
  coll.remove();
  for (var i = 0; i < 10; i += 1) {
    var no = i + 1;
    coll.insert({
      name: 'Author ' + no
    });
  }
})(db.authors);


//
// Article
//
// The reason is not a plural form, because in accordance with the MongoDB manual.
// http://docs.mongodb.org/manual/reference/operator/aggregation/project/
//
(function(coll){
  coll.remove();
  var authors = db.authors.find().toArray();
  for (var i = 0; i < 1000; i += 1) {
    var no = i + 1;
    coll.insert({
      title: 'Title ' + no,
      author: authors[_.random(0, authors.length - 1)]._id,
      pageViews: _.random(1, 100) * _.random(1, 100),
      posted: new Date(2000, 1, 1 + parseInt(no / 100, 10)),
      other: {
        foo: 'Foo ' + no
      }
    });
  }
})(db.article);
