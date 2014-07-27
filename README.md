MongoDB Tutorial
================

This is a MongoDB tutorial for people who are not good at thinking.

考えるのが苦手な人のための MongoDB チュートリアルです。

[マニュアル](http://docs.mongodb.org/manual/) の任意の 1 ページを元に：

- マニュアルに記載のある、サンプルクエリ
- マニュアルのサンプルクエリが想定しているであろう、サンプル DB を生成するコマンド
- 自分が理解するために勝手に付けた、追加サンプルクエリ

これらの情報を抽出・追加して、「考えずに、読まずに、クエリを打ってるだけで理解できるマニュアル」を再構成する試みです。

Don't think, use.


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
path/to/mongo_tutorial/bin/gendb articles
```


## Tutorials

- [Aggregation](tutorials/aggregation.md)
- [Tips](tutorials/tips.md)


## Development

### Testing

```
npm test
```
