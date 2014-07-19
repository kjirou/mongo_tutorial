mongo_tutorial
==============


## Create a sample database

### Installation

```
git clone git@github.com:kjirou/mongo_tutorial.git
cd mongo_tutorial
npm install
```

### Generator Command's Usage

Usage:

```
path/to/bin/gendb [-d db-name] generator-script-name
```

For example:

```
path/to/bin/gendb blog
```


### TODO

- シェルで遊ぶ用にダミーデータを生成できるようにする
  - http://www.json-generator.com/
- `mongoimport`, `mongoexport`
  - http://d.hatena.ne.jp/m-hiyama/20130913/1379036064
- Aggregation 全般に慣れる
  - `$unwind`
- `explain`
