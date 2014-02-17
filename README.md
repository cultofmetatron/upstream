upstream
========

##This code is still being written - please come back later!!

migration framework for node - built on knex

####example migration
```javascript
{
  up: function(db) {
    db.create_table('User', {
      
    })
  },
  down: function(db) {
    db.drop_table('User');
  }
}
```

```
upstream init
```
initializes a db and db/migrations folder and a db/config.js where 
database access information is stored.



