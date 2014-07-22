var ENTRY_COUNT = 1000;
var COMMENT_RATE = 0.5;


//
// Entries
//
(function(){
  db.entries.remove();
  var createdAt = moment('2000-01-01 +0000');
  for (var i = 0; i < ENTRY_COUNT; i += 1) {
    var no = i + 1;
    db.entries.insert({
      created_at: createdAt.toDate(),
      title: 'Title ' + no,
      body: 'Boby ' + no
    });
    createdAt.add('days', 1);
  }
})();


//
// Comments
//
db.comments.remove();
(function(){
  var no = 1;
  db.entries.find().sort({created_at:1}).forEach(function(entry){
    var commentCount = utils.accumulateRandomly(COMMENT_RATE, 1);
    var createdAt = moment(entry.created_at).clone();
    for (var i = 0; i < commentCount; i++) {
      db.comments.insert({
        created_at: createdAt.add('days', 1).toDate(),
        entry: entry._id,
        body: 'Comment ' + no
      });
      no += 1;
    }
  });
})();
