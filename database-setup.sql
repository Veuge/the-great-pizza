CREATE TABLE menu (
    menuId INTEGER NOT NULL AUTO_INCREMENT,
    restaurant VARCHAR(255),
    PRIMARY KEY (menuId)
);

CREATE TABLE pizza (
    pizzaId INTEGER NOT NULL AUTO_INCREMENT,
    price DECIMAL(6,2),
    name VARCHAR(255),
    menuId INTEGER,
    PRIMARY KEY (pizzaId),
    FOREIGN KEY (menuId) REFERENCES menu(id) ON DELETE CASCADE
);

CREATE TABLE ingredient (
    ingredientId INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY (ingredientId)
);

CREATE TABLE pizza_ingredient (
    pizzaIngredientId INTEGER NOT NULL AUTO_INCREMENT,
    pizzaId INTEGER NOT NULL,
    ingredientId INTEGER NOT NULL,
    FOREIGN KEY (pizzaId) REFERENCES pizza(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredientId) REFERENCES ingredient(id) ON DELETE CASCADE,
    PRIMARY KEY (pizzaIngredientId)
);

INSERT INTO menu (restaurant) VALUES ("The Great Pizza");
INSERT INTO pizza (price, name, menuId) VALUES (15.5, "Hawaiian", 1);
INSERT INTO pizza (price, name, menuId) VALUES (18.5, "Pepperoni", 1);
INSERT INTO pizza (price, name, menuId) VALUES (10.5, "Irish", 1);
INSERT INTO pizza (price, name, menuId) VALUES (18.5, "Meat", 1);
INSERT INTO ingredient (name) VALUES ("Cheese");
INSERT INTO ingredient (name) VALUES ("Ham");
INSERT INTO ingredient (name) VALUES ("Pineapple");
INSERT INTO ingredient (name) VALUES ("Pepperoni");
INSERT INTO ingredient (name) VALUES ("Potato");
INSERT INTO ingredient (name) VALUES ("Cabbage");
INSERT INTO ingredient (name) VALUES ("Bacon");
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (1,1);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (2,1);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (3,1);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (4,1);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (1,3);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (1,2);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (2,4);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (2,2);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (3,4);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (3,5);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (4,2);
INSERT INTO pizza_ingredient (pizzaId, ingredientId) VALUES (3,7);

select * from menu;
select * from pizza;
select * from ingredient;
select * from pizza_ingredient;