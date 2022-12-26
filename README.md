1. создать пользователя бд  
  имя arina  
  пароль 1234   
  localhost  
  authentication type: Standard !!!!

2. выполнить в воркбенче:  
  CREATE DATABASE food;  
  GRANT ALL PRIVILEGES ON food.* TO arina@'localhost';  

3. перенос проекта:  
  git init  
  git clone https://github.com/Draconic1/arinalab.git  
  npm i  

4. запустить бэк  
  запустить в воркбенче arina.sql  
 
5. после первого запуска бэка в файле server.js (бэк)  изменить строки:  
  30 строка: .sync({ force: true}) изменить на  .sync({ })    (убрать force: true)  
  удалить 33 строку  initial();

______________________________

1. админка:  
  cd backend  
  cd npm run mysql-admin  
  http://127.0.0.1:8082/  
  admin  
  QQqq33  

2. пользователь админ на фронтенде:  
  http://localhost:3000/  
  лог: admin  
  пароль: admin  
