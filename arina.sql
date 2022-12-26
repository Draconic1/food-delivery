use food;

INSERT food_types(name, image, createdAt, updatedAt) 
VALUES ('Напитки', 'https://aif-s3.aif.ru/images/010/998/2bb7cda0ab8787133ea8a79874ff89ce.jpg', '2022-12-11 18:26:00', '2022-12-11 18:26:00');
INSERT food_types(name, image, createdAt, updatedAt) 
VALUES ('Первые блюда', 'https://ethnomir.ru/upload/medialibrary/1b3/soup.jpg', '2022-12-11 18:26:00', '2022-12-11 18:26:00');
INSERT food_types(name, image, createdAt, updatedAt) 
VALUES ('Вторые блюда', 'https://wowcook.net/wp-content/uploads/2019/12/ng-recepti.jpg', '2022-12-11 18:26:00', '2022-12-11 18:26:00');
INSERT food_types(name, image, createdAt, updatedAt) 
VALUES ('Салаты', 'https://vku.life/wp-content/uploads/2020/12/vkusnye-salaty-bez-majoneza-1140x755.jpg', '2022-12-11 18:26:00', '2022-12-11 18:26:00');

use food;
INSERT food(name, price, weight, image, food_type_id, createdAt, updatedAt) 
VALUES ('Черный чай', 50, 150, 'https://tea.ru/upload/blog/0920/14/1.jpg', 1, '2022-12-11 18:26:00', '2022-12-11 18:26:00');
INSERT food(name, price, weight, image, food_type_id, createdAt, updatedAt) 
VALUES ('Зеленый чай', 50, 150, 'https://77.rospotrebnadzor.ru/images/CHAI.jpg', 1, '2022-12-11 18:26:00', '2022-12-11 18:26:00');
INSERT food(name, price, weight, image, food_type_id, createdAt, updatedAt) 
VALUES ('Борщ', 60, 150, 'https://2recepta.com/recept/borshh/borshh.jpg', 2, '2022-12-11 18:26:00', '2022-12-11 18:26:00');
INSERT food(name, price, weight, image, food_type_id, createdAt, updatedAt) 
VALUES ('Куриный суп', 60, 150, 'https://aif-s3.aif.ru/images/013/788/4fc475dcc8aada55269d2a7bd92401fb.jpg', 2, '2022-12-11 18:26:00', '2022-12-11 18:26:00');
INSERT food(name, price, weight, image, food_type_id, createdAt, updatedAt) 
VALUES ('Гороховый суп', 60, 150, 'https://www.chefmarket.ru/blog/wp-content/uploads/2019/05/pea-soup-with-meat-e1557133968622.jpg', 2, '2022-12-11 18:26:00', '2022-12-11 18:26:00');
INSERT food(name, price, weight, image, food_type_id, createdAt, updatedAt) 
VALUES ('Курица', 70, 200, 'https://s1.eda.ru/StaticContent/Photos/160115152344/160123074316/p_O.jpg', 3, '2022-12-11 18:26:00', '2022-12-11 18:26:00');
INSERT food(name, price, weight, image, food_type_id, createdAt, updatedAt) 
VALUES ('Рыба с овощами', 100, 150, 'https://img.povar.ru/uploads/37/49/7c/1c/losos_s_ovoshnim_garnirom-508631.jpg', 3, '2022-12-11 18:26:00', '2022-12-11 18:26:00');
INSERT food(name, price, weight, image, food_type_id, createdAt, updatedAt) 
VALUES ('Пюре', 55, 100, 'https://aif-s3.aif.ru/images/015/220/742915aeb4cfb19590dac3dd65dd2d19.jpg', 3, '2022-12-11 18:26:00', '2022-12-11 18:26:00');
INSERT food(name, price, weight, image, food_type_id, createdAt, updatedAt) 
VALUES ('Цезарь с курицей', 70, 100, 'https://static.1000.menu/res/640/img/content-v2/eb/79/19516/salat-cezar-klassicheskii-s-kuricei_1611309331_16_max.jpg', 4, '2022-12-11 18:26:00', '2022-12-11 18:26:00');
INSERT food(name, price, weight, image, food_type_id, createdAt, updatedAt) 
VALUES ('Овощной салат', 50, 100, 'https://lafoy.ru/photo_s/ovoshchnye-salaty-recepty-1217-0.jpg', 4, '2022-12-11 18:26:00', '2022-12-11 18:26:00');