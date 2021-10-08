import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@domain.com",
    password: bcrypt.hashSync("123456", 10),
    //NOTE: usually we use async methods to encrypt data that sent using forms ,but here,
    // it's just simply importing data, so the hash sync method for these simple users.
    // _______________ 123456 is the default password used here, which will be hashed before being stored ________________
    isAdmin: true,
  },
  {
    //TODO:
    // id: 1, you can use te id if you using thee data as static data and not fetching them rom mongoDB
    //  since mongoDB has _id by default to help you out....
    name: "Ibrahim",
    email: "ibrahim@domain.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Nitin",
    email: "nitin@domain.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "A PUBGI Lover",
    email: "pubgi_lover@domain.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "The Bad Writer",
    email: "the_bad_writter@domain.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Mr.Lazy",
    email: "mr.Lazy@domain.com",
    password: bcrypt.hashSync("123456", 10),
    //  you can omit the isAdmin because it's set already false by default.
  },
  {
    name: "Great Warrior",
    email: "great_warrior@domain.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Yellow Tomato",
    email: "yello_tomato@domain.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John",
    email: "john@domain.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Amged",
    email: "amged@domain.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
