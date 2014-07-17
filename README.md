mongo_tutorial
==============


## Create a sample database

### Installation

```
git clone git@github.com:kjirou/mongo_tutorial.git
cd mongo_tutorial
cp generator/conf.example.js generator/conf.js
vi generator/conf.js  # Edit to adjust your environments
```

### Database Creation

```
mongo your_db_name path/to/generator/conf.js path/to/generator/generators/sample_database_name.js
```


### TODO

- `mongo script.js` と `node script.js` の実行と異なる点
  - `console.log` は無かった、代替で `print`
- シェルで遊ぶ用にダミーデータを生成できるようにする
  - http://www.json-generator.com/
- `mongoimport`, `mongoexport`
  - http://d.hatena.ne.jp/m-hiyama/20130913/1379036064
- Aggregation 全般に慣れる
  - `$unwind`
- `explain`
