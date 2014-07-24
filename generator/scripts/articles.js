//
// Articles
//
(function(coll){
  coll.remove();
  [
    ['taro', 60],
    ['taro', 70],
    ['dave', 80],
    ['dave', 85],
    ['taro', 90]
  ].forEach(function(row, i){
    var no = i + 1;
    coll.insert({
      author: row[0],
      score: row[1]
    });
  });
})(db.articles);
