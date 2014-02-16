upstream
========

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

