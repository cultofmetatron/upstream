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

