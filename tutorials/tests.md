# MongoDB Tutorial - Tests

気になった点の動作確認集


## 存否不明の配列の要素数が1以上という条件

```
bin/gendb events
mongo mongo_tutorial
```

```
// 一致ならこれ
db.events.find({
  members: {
    $size: 1
  }
}).length();

// $where を使えば可能だが
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
```
