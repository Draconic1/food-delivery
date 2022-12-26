1. для пересоздания БД должны быть строки в server.js  
  db.sequelize  
  .sync({ <b>force: true</b>})  
  .then(() => {  
    console.log("Drop and re-sync db.");  
    <b>initial()</b>;  
  })  
  .catch((err) => {  
    console.log("Failed to sync db: " + err.message);  
  });  
