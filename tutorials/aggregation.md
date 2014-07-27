# MongoDB Tutorial - Aggregation

http://docs.mongodb.org/manual/reference/operator/aggregation-pipeline/


## $project

http://docs.mongodb.org/manual/reference/operator/aggregation/project/

```
bin/gendb article
mongo mongo_tutorial
```

```
db.article.aggregate(
    { $project : {
        title : 1 ,
        author : 1 ,
    }}
 );
```

```
db.article.aggregate(
    { $project : {
        _id : 0 ,
        title : 1 ,
        author : 1
    }}
);
```

```
db.article.aggregate(
    { $project : {
        title : 1,
        doctoredPageViews : { $add:["$pageViews", 10] }
    }}
);
```

```
db.article.aggregate(
    { $project : {
        title : 1,
        doctoredPageViews : { $add:["$pageViews", 10000] }
    }}
);
```

```
db.article.aggregate(
    { $project : {
        title : 1 ,
        page_views : "$pageViews" ,
        bar : "$other.foo"
    }}
);
```

```
db.article.aggregate(
    { $project : {
        title : 1 ,
        stats : {
            pv : "$pageViews",
            foo : "$other.foo",
            dpv : { $add:["$pageViews", 10] }
        }
    }}
);
```


## $match

http://docs.mongodb.org/manual/reference/operator/aggregation/match/

```
bin/gendb articles
mongo mongo_tutorial
```

```
db.articles.aggregate(
  [ { $match : { author : "dave" } } ]
);
```

```
db.articles.aggregate( [
                        { $match : { score : { $gt : 70, $lte : 90 } } },
                        { $group: { _id: null, count: { $sum: 1 } } }
                       ] );
```

```
db.articles.aggregate( [
                        { $match : { score : { $gt : 70, $lte : 90 } } },
                        { $match : { author : "taro" } }
                       ] );
```


## $redact

http://docs.mongodb.org/manual/reference/operator/aggregation/redact/


## $limit

http://docs.mongodb.org/manual/reference/operator/aggregation/limit/

```
bin/gendb article
mongo mongo_tutorial
```

```
db.article.aggregate(
  { $limit : 5 }
);
```


## $skip

http://docs.mongodb.org/manual/reference/operator/aggregation/skip/

```
bin/gendb article
mongo mongo_tutorial
```

```
db.article.aggregate(
  { $skip : 5 }
);
```

```
db.article.aggregate([
  { $skip : 5 },
  { $group: { _id: null, count: { $sum: 1 } } }
]);
```

```
db.article.aggregate([
  { $skip : 100 },
  { $group: { _id: null, count: { $sum: 1 } } }
]);
```


## $unwind

http://docs.mongodb.org/manual/reference/operator/aggregation/unwind/

```
bin/gendb tagged_articles
mongo mongo_tutorial
```

```
db.article.aggregate(
    { $project : {
        author : 1 ,
        title : 1 ,
        tags : 1
    }},
    { $unwind : "$tags" }
);
```


## $group

http://docs.mongodb.org/manual/reference/operator/aggregation/group/

```
bin/gendb article
mongo mongo_tutorial
```

```
db.article.aggregate([
  { $group: { _id : null,
              totalDocs: { $sum : 1 } } }
]);
```

```
db.article.aggregate([
  { $group: { _id : '$author',
              docsPerAuthor: { $sum : 1 } } }
]);
```

```
db.article.aggregate([
  { $group: { _id : '$author',
              avgPageViews: { $avg : '$pageViews' } } }
]);
```

```
db.article.aggregate([
  {
    $group: {
      _id : '$author',
      avgPageViews: { $avg : '$pageViews' },
      maxPageViews: { $max : '$pageViews' },
      minPageViews: { $min : '$pageViews' },
      docsPerAuthor: { $sum : 1 }
    }
  }
]);
```

```
db.article.aggregate(
  { $group: { _id : { author: '$author', pageViews: '$pageViews', posted: '$posted' } } }
);
```

```
db.article.aggregate([
  { $group: { _id : { author: '$author', pageViews: '$pageViews', posted: '$posted' } } },
  { $group: { _id : null, count: { $sum: 1 } } }
]);
```

```
db.article.aggregate([
  { $group: { _id : { author: '$author', posted: '$posted' } } },
  { $group: { _id : null, count: { $sum: 1 } } }
]);
```

```
db.article.aggregate([
  { $group: { _id : { author: '$author' } } },
  { $group: { _id : null, count: { $sum: 1 } } }
]);
```
