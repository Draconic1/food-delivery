
<img src=”https://raw.githubusercontent.com/Draconic1/food-delivery/main/img/foodpage.jpg” alt="Скриншот страницы"> 
![Image](https://github.com/Draconic1/food-delivery/blob/main/img/foodpage.jpg) 

Запуск приложения:  
1. cd frontend
   npm start
2. cd backend
   npm start
  
Запуск админки бэкенда:  
 cd backend  
 cd npm run mysql-admin  
 http://127.0.0.1:8082/  
 admin  
 QQqq33  


3. После запуска бэкенда создать базу данных и заполнить ее данными из файла food.sql  
  CREATE DATABASE food;  
  GRANT ALL PRIVILEGES ON food.* TO user@'localhost';  

4. Для пересоздания БД при старте должны быть строки в server.js  
  db.sequelize  
  .sync({ <b>force: true</b>})  
  .then(() => {  
    console.log("Drop and re-sync db.");  
    <b>initial()</b>;  
  })  
  .catch((err) => {  
    console.log("Failed to sync db: " + err.message);  
  });   
    
  Для отключения перезапуска force:true и initial() стоит убрать.  
