# MongoDB Tutorial - Tips

気になったことの調査など。


## 配列の要素数がn個以上という条件は？

- 配列は undefined の可能性もある
- 結論: とりあえずは `$where` を使う

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
