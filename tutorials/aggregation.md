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
bin/gendb articles2
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


## $unwind
