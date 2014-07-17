mongo_tutorial
==============


## Create a sample database

### Installation

```
git clone git@github.com:kjirou/mongo_tutorial.git
npm install
cd mongo_tutorial
cp generator/conf.example.js generator/conf.js
vi generator/conf.js  # Edit to adjust your environments
```

### Database Creation

```
mongo your_db_name generator/conf.js generator/generators/sample_database_name.js
```


### TODO

- シェルで遊ぶ用にダミーデータを生成できるようにする
  - http://www.json-generator.com/
- `mongoimport`, `mongoexport`
  - http://d.hatena.ne.jp/m-hiyama/20130913/1379036064
- Aggregation 全般に慣れる
  - `$unwind`
- `explain`
