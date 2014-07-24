//
// Members
//
(function(coll){
  coll.remove();
  for (var i = 0; i < 10; i += 1) {
    var no = i + 1;
    coll.insert({
      name: 'Member ' + no
    });
  }
})(db.members);


//
// Events
//
(function(coll){
  coll.remove();
  var members = db.members.find().toArray();
  for (var i = 0; i < 100; i += 1) {
    members = _.shuffle(members);
    var data = {};
    // Undefined or 0 <= length <= 5
    if (Math.random() > 0.25) {
      data.members = members.slice(0, _.random(0, 5)).map(function(v){ return v._id; });
    }
    coll.insert(data);
  }
})(db.events);
