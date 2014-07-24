//
// Article
//
// The reason is not a plural form, because in accordance with the MongoDB manual.
// http://docs.mongodb.org/manual/reference/operator/aggregation/project/
//
(function(coll){
  coll.remove();
  coll.insert({
    author: 'bob',
    title: 'this is my title',
    body: 'this is my body',
    tags: ['fun', 'good', 'fun']
  });
})(db.article);
