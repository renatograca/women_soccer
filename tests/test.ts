import connection from "../src/models/connection";
import request from "supertest";
import app from "../src/app";

require('mysql2/node_modules/iconv-lite').encodingExists('foo');

jest.setTimeout(30000);

const dropDatabase = async () => {
  await connection.execute('DROP SCHEMA IF EXISTS Trybesmith;');
};

const recreateDatabase = async () => {
  await dropDatabase();
  await connection.execute('CREATE SCHEMA Trybesmith;');
  await connection.execute('CREATE TABLE Trybesmith.Users (id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL, username TEXT NOT NULL, classe TEXT NOT NULL, level INTEGER NOT NULL, password TEXT NOT NULL);');
  await connection.execute('CREATE TABLE Trybesmith.Orders (id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL, userId INTEGER, FOREIGN KEY (userId) REFERENCES Trybesmith.Users (id));');
  await connection.execute('CREATE TABLE Trybesmith.Products (id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL, name TEXT NOT NULL, amount TEXT NOT NULL, orderId INTEGER, FOREIGN KEY (orderId) REFERENCES Trybesmith.Orders (id));');
};

afterAll(async () => {
  await recreateDatabase();
  try {
    await connection.end();
  } catch (err) {
    console.log(err);
  }
});

// Clean database before tests
beforeAll(async () => { await recreateDatabase(); });

describe("Requisito 1 - Criar user", () => {
  // Close connections and server after tests
  afterAll(async () => {
    await dropDatabase();
  });

  it('Será validado que o campo "username" é obrigatório', async () => {
    const result = await request(app).post("/users").send({
      level: 2,
      classe: "classe",
      password: "senha",
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Username is required");
  });

  it('Será validado que o campo "username" tem o tipo string', async () => {
    const result = await request(app).post("/users").send({
      username: 1,
      password: "senha",
      level: 2,
      classe: "classe",
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Username must be a string");
  });

  it('Será validado que o campo "username" não está vazio', async () => {
    const result = await request(app).post("/users").send({
      username: "",
      password: "senha",
      level: 2,
      classe: "classe",
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Username can't be empty");
  });

  it('Será validado que o campo "classe" é obrigatório', async () => {
    const result = await request(app).post("/users").send({
      username: "username",
      password: "senha",
      level: 2,
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Classe is required");
  });

  it('Será validado que o campo "classe" tem o tipo string', async () => {
    const result = await request(app).post("/users").send({
      username: "username",
      password: "senha",
      level: 2,
      classe: 1,
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Classe must be a string");
  });

  it('Será validado que o campo "classe" não está vazio', async () => {
    const result = await request(app).post("/users").send({
      username: "username",
      password: "senha",
      level: 2,
      classe: "",
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Classe can't be empty");
  });

  it('Será validado que o campo "level" é obrigatório', async () => {
    const result = await request(app).post("/users").send({
      username: "username",
      password: "senha",
      classe: "classe",
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Level is required");
  });

  it('Será validado que o campo "level" deve ser um número', async () => {
    const result = await request(app).post("/users").send({
      username: "username",
      password: "senha",
      level: "level",
      classe: "classe",
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Level must be a number");
  });

  it('Será validado que o campo "level" é maior que 0', async () => {
    const result = await request(app).post("/users").send({
      username: "username",
      password: "senha",
      level: 0,
      classe: "classe",
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Level must be greater than 0");
  });

  it('Será validado que o campo "password" é obrigatório', async () => {
    const result = await request(app).post("/users").send({
      username: "username",
      level: 2,
      classe: "classe",
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Password is required");
  });

  it('Será validado que o campo "password" tem o tipo string', async () => {
    const result = await request(app).post("/users").send({
      username: "username",
      password: 1,
      level: 2,
      classe: "classe",
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Password must be a string");
  });

  it('Será validado que o campo "password" não está vazio', async () => {
    const result = await request(app).post("/users").send({
      username: "username",
      password: "",
      level: 2,
      classe: "classe",
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Password can't be empty");
  });

  it('Será validado que um token será retornado', async () => {
    const result = await request(app).post("/users").send({
      username: "catiau",
      password: "senha",
      level: 2,
      classe: "classe",
    });
    expect(result.statusCode).toEqual(201);
    expect(result.body).toBeDefined();
  });
});

describe("Requisito 2 - Login", () => {
  // Clean database and create one user before tests
  beforeAll(async () => {
    await recreateDatabase();
    await request(app).post("/users").send({
      username: "username",
      password: "senha",
      level: 2,
      classe: "classe",
    });
  });

  it('Será validado que o campo "username" é obrigatório', async () => {
    const result = await request(app).post("/login").send({
      password: "senha",
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Username is required");
  });

  it('Será validado que o campo "password" é obrigatório', async () => {
    const result = await request(app).post("/login").send({
      username: "username",
    });
    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Password is required");
  });

  it('Será validado que não é possível fazer login com um username inválido',
    async () => {
      const result = await request(app).post("/login").send({
        username: "user",
        password: "senha",
      });
      expect(result.statusCode).toEqual(401);
      expect(result.body.error).toEqual("Username or Password invalid");
    }
  );

  it('Será validado que não é possível fazer login com ums senha inválida',
    async () => {
      const result = await request(app).post("/login").send({
        username: "username",
        password: "sen",
      });
      expect(result.statusCode).toEqual(401);
      expect(result.body.error).toEqual("Username or Password invalid");
    }
  );

  it('Será validado que um token será retornado', async () => {
    const result = await request(app).post("/login").send({
      username: "username",
      password: "senha",
    });
    expect(result.statusCode).toEqual(200);
    expect(result.body.token).toBeDefined();
  });
});

describe("Requisito 3 - Criar produto", () => {
  let token: string;
  // Clean database and create one user before tests
  beforeEach((done) => {
    recreateDatabase()
      .then(async () => {
        await request(app).post("/users").send({
          username: "username",
          password: "senha",
          level: 2,
          classe: "classe",
        });
      })
      .then(() => {
        request(app).post("/login").send({
          username: "username",
          password: "senha",
        }).then((result) => {
          token = result.body.token;
          done();
        });
      });
  });

  it('Será validado que não é possível cadastrar um produto com um token inválido', async () => {
    const result = await request(app).post("/products").send({
      name: "name",
      amount: "amount",
    }).set("Authorization", "Bearer 123");

    expect(result.statusCode).toEqual(401);
    expect(result.body.error).toEqual("Invalid token");
  });

  it('Será validado que não é possível cadastrar um produto sem informar o token', async () => {
    const result = await request(app).post("/products").send({
      name: "name",
      amount: "amount",
    });

    expect(result.statusCode).toEqual(401);
    expect(result.body.error).toEqual("Token not found");
  });

  it('Será validado que não é possível cadastrar um produto sem o campo "name"', async () => {
    const result = await request(app).post("/products").send({
      amount: "amount",
    }).set("Authorization", token);

    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Name is required");
  });

  it('Será validado que não é possível cadastrar um produto se o campo "name" não for string', async () => {
    const result = await request(app).post("/products").send({
      name: 1,
      amount: "amount",
    }).set("Authorization", token);

    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Name must be a string");
  });

  it('Será validado que não é possível cadastrar um produto com o campo "name" vazio', async () => {
    const result = await request(app).post("/products").send({
      name: "",
      amount: "amount",
    }).set("Authorization", token);

    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Name can't be empty");
  });

  it('Será validado que não é possível cadastrar um produto sem o campo "amount"', async () => {
    const result = await request(app).post("/products").send({
      name: "name",
    }).set("Authorization", token);

    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Amount is required");
  });

  it('Será validado que não é possível cadastrar um produto se o campo "amount" não for string', async () => {
    const result = await request(app).post("/products").send({
      name: "name",
      amount: 1,
    }).set("Authorization", token);

    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Amount must be a string");
  });

  it('Será validado que não é possível cadastrar um produto com o campo "amount" vazio', async () => {
    const result = await request(app).post("/products").send({
      name: "name",
      amount: "",
    }).set("Authorization", token);

    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Amount can't be empty");
  });

  it('Será validado que é possível cadastrar um produto com sucesso', async () => {
    const result = await request(app).post("/products").send({
      name: "name",
      amount: "amount",
    }).set("Authorization", token);
    expect(result.statusCode).toEqual(201);
    expect(result.body.item.id).toBeDefined();
    expect(result.body.item.name).toEqual("name");
    expect(result.body.item.amount).toEqual("amount");
  });
});

describe("Requisito 4 - Listar produtos", () => {
  let token: string;

  beforeEach(async () => {
    await recreateDatabase();
    await request(app).post("/users").send({
      username: "username",
      password: "senha",
      level: 2,
      classe: "classe",
    });
    const result = await request(app).post("/login").send({
      username: "username",
      password: "senha",
    });
    token = result.body.token;
    await request(app).post("/products").send({
      name: "name",
      amount: "amount",
    }).set("Authorization", token);
    await request(app).post("/products").send({
      name: "name2",
      amount: "amount2",
    }).set("Authorization", token);
  });

  it('Será validado que não é possível listar todos os produtos sem token', async () => {
    const result = await request(app).get("/products");

    expect(result.statusCode).toEqual(401);
    expect(result.body.error).toEqual("Token not found");
  });

  it('Será validado que não é possível listar todos os produtos com um token inválido', async () => {
    const result = await request(app).get("/products").set("Authorization", "Bearer 123");

    expect(result.statusCode).toEqual(401);
    expect(result.body.error).toEqual("Invalid token");
  });

  it('Será validado que é possível listar todos os produtos com sucesso', async () => {
    const result = await request(app).get("/products").set("Authorization", token);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeDefined();
    expect(result.body.length).toEqual(2);
    expect(result.body[0].id).toBeDefined();
    expect(result.body[0].name).toEqual("name");
    expect(result.body[0].amount).toEqual("amount");
    expect(result.body[1].id).toBeDefined();
    expect(result.body[1].name).toEqual("name2");
    expect(result.body[1].amount).toEqual("amount2");
  });
});

describe("Requisito 5 - Criar pedido", () => {
  let token: string;

  beforeEach(async () => {
    await recreateDatabase();
    await request(app).post("/users").send({
      username: "username",
      password: "senha",
      level: 2,
      classe: "classe",
    });
    const result = await request(app).post("/login").send({
      username: "username",
      password: "senha",
    });
    token = result.body.token;
  });

  it('Será validado que não é possível criar um pedido sem token', async () => {
    ;
    const result = await request(app).post("/orders").send({
      products: [1, 2],
    });

    expect(result.statusCode).toEqual(401);
    expect(result.body.error).toEqual("Token not found");
  });

  it('Será validado que não é possível criar um pedido com um token inválido', async () => {
    const result = await request(app).post("/orders").send({
      products: "amount",
    }).set("Authorization", "Bearer 123");

    expect(result.statusCode).toEqual(401);
    expect(result.body.error).toEqual("Invalid token");
  });

  it('Será validado que não é possível criar um pedido sem o campo "products"', async () => {
    const result = await request(app).post("/orders").send({
    }).set("Authorization", token);

    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Products is required");
  });

  it('Será validado que não é possível criar um pedido com o campo "products" não sendo um array', async () => {
    const result = await request(app).post("/orders").send({
      products: "products",
    }).set("Authorization", token);

    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Products must be an array of numbers");
  });

  it('Será validado que não é possível criar um pedido com o campo "products" vazio', async () => {
    const result = await request(app).post("/orders").send({
      products: [],
    }).set("Authorization", token);

    expect(result.statusCode).toEqual(400);
    expect(result.body.error).toEqual("Products can't be empty");
  });

  it('Será validado que é possível criar um pedido com sucesso com 1 item', async () => {
    await request(app).post("/products").send({
      name: "name",
      amount: "amount",
    }).set("Authorization", token);
    const result = await request(app).post("/orders").send({
      products: [1],
    }).set("Authorization", token);

    expect(result.statusCode).toEqual(201);
    expect(result.body.order).toBeDefined();
    expect(result.body.order.userId).toBeDefined();
    expect(result.body.order.userId).toEqual(1);
    expect(result.body.order.products).toBeDefined();
    expect(result.body.order.products).toEqual([1]);
  });

  it('Será validado que é possível criar um pedido com sucesso com 2 itens', async () => {
    await request(app).post("/products").send({
      name: "name",
      amount: "amount",
    }).set("Authorization", token);
    await request(app).post("/products").send({
      name: "name2",
      amount: "amount2",
    }).set("Authorization", token);
    const result = await request(app).post("/orders").send({
      products: [1, 2],
    }).set("Authorization", token);

    expect(result.statusCode).toEqual(201);
    expect(result.body.order).toBeDefined();
    expect(result.body.order.userId).toBeDefined();
    expect(result.body.order.userId).toEqual(1);
    expect(result.body.order.products).toBeDefined();
    expect(result.body.order.products).toEqual([1, 2]);
  });
});

describe("Requisito 6 - Exibir um pedido", () => {
  let token: string;

  beforeEach(async () => {
    await recreateDatabase();
    await request(app).post("/users").send({
      username: "username",
      password: "senha",
      level: 2,
      classe: "classe",
    });
    const result = await request(app).post("/login").send({
      username: "username",
      password: "senha",
    });
    token = result.body.token;
    await request(app).post("/products").send({
      name: "name",
      amount: "amount",
    }).set("Authorization", token);
    await request(app).post("/products").send({
      name: "name2",
      amount: "amount2",
    }).set("Authorization", token);
    await request(app).post("/products").send({
      name: "name3",
      amount: "amount3",
    }).set("Authorization", token);
    await request(app).post("/orders").send({
      products: [1, 2],
    }).set("Authorization", token);
    await request(app).post("/orders").send({
      products: [3],
    }).set("Authorization", token);
  });

  it('Será validado que não é possível exibir um pedido sem token', async () => {
    const result = await request(app).get("/orders/1");

    expect(result.statusCode).toEqual(401);
    expect(result.body.error).toEqual("Token not found");
  });

  it('Será validado que não é possível exibir um pedido com um token inválido', async () => {
    const result = await request(app).get("/orders/1").set("Authorization", "Bearer 123");

    expect(result.statusCode).toEqual(401);
    expect(result.body.error).toEqual("Invalid token");
  });

  it('Será validado que não é possível exibir um pedido inexistente', async () => {
    const result = await request(app).get("/orders/4").set("Authorization", token);

    expect(result.statusCode).toEqual(404);
    expect(result.body.error).toEqual("Order not found");
  });


  it('Será validado que é possível exibir um pedido com sucesso', async () => {
    const result = await request(app).get("/orders/1").set("Authorization", token);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeDefined();
    expect(result.body.id).toBeDefined();
    expect(result.body.userId).toEqual(1);
    expect(result.body.products).toBeDefined();
    expect(result.body.products).toEqual([1, 2]);
  });

  it('Será validado que é possível exibir um pedido com sucesso 2', async () => {
    const result = await request(app).get("/orders/2").set("Authorization", token);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeDefined();
    expect(result.body.id).toBeDefined();
    expect(result.body.userId).toEqual(1);
    expect(result.body.products).toBeDefined();
    expect(result.body.products).toEqual([3]);
  });
});

describe("Requisito 7 - Listar pedidos", () => {
  let token: string;

  beforeEach(async () => {
    await recreateDatabase();
    await request(app).post("/users").send({
      username: "username",
      password: "senha",
      level: 2,
      classe: "classe",
    });
    const result = await request(app).post("/login").send({
      username: "username",
      password: "senha",
    });
    token = result.body.token;
    await request(app).post("/products").send({
      name: "name",
      amount: "amount",
    }).set("Authorization", token);
    await request(app).post("/products").send({
      name: "name2",
      amount: "amount2",
    }).set("Authorization", token);
    await request(app).post("/products").send({
      name: "name3",
      amount: "amount3",
    }).set("Authorization", token);
  });

  it('Será validado que não é possível listar pedidos sem token', async () => {
    const result = await request(app).get("/orders");

    expect(result.statusCode).toEqual(401);
    expect(result.body.error).toEqual("Token not found");
  });

  it('Será validado que não é possível listar pedidos com um token inválido', async () => {
    const result = await request(app).get("/orders").set("Authorization", "Bearer 123");

    expect(result.statusCode).toEqual(401);
    expect(result.body.error).toEqual("Invalid token");
  });

  it('Será validado que é possível listar todos os pedidos com sucesso 1', async () => {
    await request(app).post("/orders").send({
      products: [1],
    }).set("Authorization", token);
    const result = await request(app).get("/orders").set("Authorization", token);
    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeDefined();
    expect(result.body.length).toEqual(1);
    expect(result.body[0].id).toBeDefined();
    expect(result.body[0].userId).toEqual(1);
    expect(result.body[0].products).toBeDefined();
    expect(result.body[0].products).toEqual([1]);
  });

  it('Será validado que é possível listar todos os pedidos com sucesso 2', async () => {
    await request(app).post("/orders").send({
      products: [1],
    }).set("Authorization", token);
    await request(app).post("/orders").send({
      products: [2],
    }).set("Authorization", token);
    const result = await request(app).get("/orders").set("Authorization", token);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeDefined();
    expect(result.body.length).toEqual(2);
    expect(result.body[0].id).toBeDefined();
    expect(result.body[0].userId).toEqual(1);
    expect(result.body[0].products).toBeDefined();
    expect(result.body[0].products).toEqual([1]);
    expect(result.body[1].id).toBeDefined();
    expect(result.body[1].userId).toEqual(1);
    expect(result.body[1].products).toBeDefined();
    expect(result.body[1].products).toEqual([2]);
  });

  it('Será validado que é possível listar todos os pedidos com sucesso 3', async () => {
    await request(app).post("/orders").send({
      products: [1, 2],
    }).set("Authorization", token);
    await request(app).post("/orders").send({
      products: [3],
    }).set("Authorization", token);
    const result = await request(app).get("/orders").set("Authorization", token);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeDefined();
    expect(result.body.length).toEqual(2);
    expect(result.body[0].id).toBeDefined();
    expect(result.body[0].userId).toEqual(1);
    expect(result.body[0].products).toBeDefined();
    expect(result.body[0].products).toEqual([1, 2]);
    expect(result.body[1].id).toBeDefined();
    expect(result.body[1].userId).toEqual(1);
    expect(result.body[1].products).toBeDefined();
    expect(result.body[1].products).toEqual([3]);
  });
});