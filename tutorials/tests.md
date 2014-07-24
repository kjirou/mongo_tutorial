# MongoDB Tutorial - Tests

気になった点の動作確認集


## 存否不明の配列の要素数が1以上という条件

結論: とりあえずは `$where` を使う

```
bin/gendb events
mongo mongo_tutorial
```

```
// $where を使えば可能、他に方法が見つからない
db.events.find({
  $where: function(){
    return this.members && this.members.length >= 0;
  }
}).length();
db.events.find({
  $where: function(){
    return this.members && this.members.length >= 3;
  }
}).length();

// 歪にやる方法もある
db.events.find({
  'members.2': { $exists:true }
}).length();

// ちなみに、一致判定ならこれ
db.events.find({
  members: {
    $size: 1
  }
}).length();
```
