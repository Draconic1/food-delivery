# Веб приложение доставки из столовой

  Данное приложение представляет собой онлайн-сервис доставки продуктов из стловой, где пользователь может просмотреть меню и добавить понравившиеся позиции в корзину, после чего оплатить.    
  Администратор принимает заказы и назначает доставку пользователю, а также может редактировать меню.  
    
  Стек технологий:
  Frontend: React, Redux-tookit, axios
  Backend: Node.js + Express  
  Database: MySQL  
    
<img src="https://github.com/Draconic1/food-delivery/blob/main/img/startpage.jpg" alt="Скриншот стартовой страницы" height="80%" width="80%"> 
  
<img src="https://github.com/Draconic1/food-delivery/blob/main/img/foodpage.jpg" alt="Скриншот страницы с выбором меню" height="80%" width="80%"> 
  
<details><summary>Скриншоты других страниц:</summary>
<img src="https://github.com/Draconic1/food-delivery/blob/main/img/search.png" alt="Поиск" height="80%" width="80%"> 
   
<img src="https://github.com/Draconic1/food-delivery/blob/main/img/cart.png" alt="Корзина" height="80%" width="80%"> 
  
<img src="https://github.com/Draconic1/food-delivery/blob/main/img/admin.png" alt="Интерфейс администратора" height="80%" width="80%">
  
<img src="https://github.com/Draconic1/food-delivery/blob/main/img/cart.png" alt="Изменение статуса доставки" height="80%" width="80%"> 
</details>
 
**Гость:** имеет возможность зарегистрироваться и авторизоваться, просмотреть главную страницу с категориями блюд и доступное меню.  
**Авторизованный пользователь:** имеет дополненный функционал гостя с возможностью добавлять заказы в корзину, отменять или оплачивать их, а так же просматривать свои заказы.  
**Администратор:** имеет возможность редактирования меню и добавления нового, просмотра заказов пользователя и изменения их статуса, фильтрации заказов по статусу, дате и пользователю.  
  
  
### Запуск приложения    
1. ```console
   cd frontend   
   npm start
   ```

       
2. ```console
   cd backend    
   npm start
   ```
 
 ### Запуск админки    
```console
  cd backend    
  cd npm run mysql-admin 
```

   http://127.0.0.1:8082/  
   Логин: admin  
   Пароль: QQqq33  

  
  ```sql
  CREATE DATABASE food;    
  GRANT ALL PRIVILEGES ON food.* TO user@'localhost'; 
  ```

 ### Пересоздание БД в коде:       
  ```javascript
  db.sequelize    
  .sync({ <b>force: true</b>})   
  .then(() => {    
    console.log("Drop and re-sync db.");    
    <b>initial()</b>;    
  })    
  .catch((err) => {    
    console.log("Failed to sync db: " + err.message);    
  });
```

  
  Для отключения перезапуска force:true и initial() стоит убрать. 
