mongo_tutorial
==============


## Installation

```
git clone git@github.com:kjirou/mongo_tutorial.git
cd mongo_tutorial
npm install
```


## Use Sample Database Generator

Usage:

```
path/to/mongo_tutorial/bin/gendb [-d db-name] generator-script-name
```

For example:

```
path/to/mongo_tutorial/bin/gendb blog
```


## Development

### Testing

```
npm test
```


## Todo

- シェルで遊ぶ用にダミーデータを生成できるようにする
  - http://www.json-generator.com/
- `mongoimport`, `mongoexport`
  - http://d.hatena.ne.jp/m-hiyama/20130913/1379036064
- Aggregation 全般に慣れる
  - `$unwind`
- `explain`
