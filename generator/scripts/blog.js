var ENTRY_COUNT = 1000;


//
// Entries
//
db.entries.remove();
var entryCreatedAt = moment('2000-01-01 +0000');
for (var i = 0; i < ENTRY_COUNT; i += 1) {
  var no = i + 1;
  db.entries.insert({
    created_at: entryCreatedAt.toDate(),
    title: 'Title ' + no
  });
  entryCreatedAt.add('days', 1);
}
