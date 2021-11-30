let object=new Object();
object.meta= {"totalPages":13};
object.data=new Array();
object.data.attributes=new Object;

object.data[0]={
            
            "type": "articles",
            "id": 3
    
};
object.data.attributes={
    
    "title": "JSON:API paints my bikeshed!",
    "body": "The shortest article. Ever.",
    "created": "2015-05-22T14:56:29.000Z",
    "updated": "2015-05-22T14:56:28.000Z"
    
};
object.links={
    
    "self": "http://example.com/articles?page[number]=3&page[size]=1",
    "first": "http://example.com/articles?page[number]=1&page[size]=1",
    "prev": "http://example.com/articles?page[number]=2&page[size]=1",
    "next": "http://example.com/articles?page[number]=4&page[size]=1",
    "last": "http://example.com/articles?page[number]=13&page[size]=1"  
};
console.log(object);
/*
  {  "meta": {
      "totalPages": 13
    },
    "data": [
      {
        "type": "articles",
        "id": "3",
        "attributes": {
          "title": "JSON:API paints my bikeshed!",
          "body": "The shortest article. Ever.",
          "created": "2015-05-22T14:56:29.000Z",
          "updated": "2015-05-22T14:56:28.000Z"
        }
      }
    ],
    "links": {
      "self": "http://example.com/articles?page[number]=3&page[size]=1",
      "first": "http://example.com/articles?page[number]=1&page[size]=1",
      "prev": "http://example.com/articles?page[number]=2&page[size]=1",
      "next": "http://example.com/articles?page[number]=4&page[size]=1",
      "last": "http://example.com/articles?page[number]=13&page[size]=1"
    }
}
*/