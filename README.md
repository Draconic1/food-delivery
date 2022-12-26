1. дропнуть БД в воркбенче и создать заново  
  DROP DATABASE food;  
  CREATE DATABASE food;  
  GRANT ALL PRIVILEGES ON food.* TO arina@'localhost';  

2. для пересоздания БД должны быть строки в server.js  
  db.sequelize  
  .sync({ <b>force: true</b>})  
  .then(() => {  
    console.log("Drop and re-sync db.");  
    <b>initial()</b>;  
  })  
  .catch((err) => {  
    console.log("Failed to sync db: " + err.message);  
  });  
    
  после можно их убрать  

3. запустить бэк  
4. заполнить данные из файла arina.sql  
5. запустить фронтенд  
