/**
 * Created by kuldeeparora on 21/11/14.
 */

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/kyooboid', function(err, db){
    if(err) throw err;

    var query = { 'firstname': 'Kuldeep'};

    var cursor = db.collection('account').find(query);

    cursor.each(function(err, doc){
        if(err) throw err;

        if(doc == null){
            return db.close();
        }

        console.dir(doc.firstname);
    });

});