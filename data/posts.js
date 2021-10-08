const posts = [
  {
    // id: 1, you can use te id if you using thee data as static data and not fetching them rom mongoDB
    //  since mongoDB has _id by default to help you out....
    title: "Title 1", // String is shorthand for {type: String}
    author: "Ibrahim",
    body: "This is a title 1 description",
    comments: [],
    date: { type: Date, default: Date.now },
    isFavorite: true,
  },
  {
    title: "Title 2", // String is shorthand for {type: String}
    author: "Amged",
    body: "This is a title 2 description",
    comments: [],
    date: { type: Date, default: Date.now },
    isFavorite: true,
  },
  {
    title: "Title 3", // String is shorthand for {type: String}
    author: "Nitin",
    body: "This is a title 3 description",
    comments: [],
    date: { type: Date, default: Date.now },
    isFavorite: true,
  },
  {
    title: "Title 4", // String is shorthand for {type: String}
    author: "John",
    body: "This is a title 4 description",
    comments: [],
    date: { type: Date, default: Date.now },
    isFavorite: true,
  },
  {
    title: "Title 5", // String is shorthand for {type: String}
    author: "Yellow Tomato",
    body: "This is a title 5 description",
    comments: [],
    date: { type: Date, default: Date.now },
    isFavorite: true,
  },
  {
    title: "Title 6", // String is shorthand for {type: String}
    author: "Great Warrior",
    body: "This is a title 6 description",
    comments: [],
    date: { type: Date, default: Date.now },
    isFavorite: true,
  },
  {
    title: "The Lazy Student", // String is shorthand for {type: String}
    author: "Mr.Lazy",
    body: "This is a The Lazy Student description",
    comments: [],
    date: { type: Date, default: Date.now },
    isFavorite: true,
  },
  {
    title: "Parent are Over worriers", // String is shorthand for {type: String}
    author: "The Bad Writer",
    body: "This is a Parent are Over worriers description",
    comments: [],
    date: { type: Date, default: Date.now },
    isFavorite: true,
  },
  {
    title: "Gamers are Rich", // String is shorthand for {type: String}
    author: "A PUBGI Lover",
    body: "This is a Gamers are Rich These Days description",
    comments: [],
    date: { type: Date, default: Date.now },
    isFavorite: true,
  },
];

export default posts;
