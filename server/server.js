let express = require("express");
let graphqlHTTP = require("express-graphql");
let { buildSchema } = require("graphql");
let cors = require("cors");

let schema = buildSchema(`
  type User {
    id: String!
    nickname: String!
    avatar: String!
  }
  type Post {
    id: String!
    user: User!
    caption: String!
    image: String!
  }
  type Query {
    user(id: String) : User!
    post(user_id: String, post_id: String) : Post!
    posts(user_id: String) : [Post]
  }
`);

let userslist = {
  a: {
    id: "a",
    nickname: "George",
    avatar: "https://pbs.twimg.com/profile_images/739024152187797504/xWAHF_Yu_400x400.jpg"
  }
};
let postslist = {
  a: {
    a: {
      id: "a",
      user: userslist["a"],
      caption: "Headshot",
      image: "https://s3-eu-west-1.amazonaws.com/images.castcall.blue-compass.com/portfolioraw/1568/1568547.jpg"
    }
  }
};

let root = {
  user: function({ id }) {
    return userslist[id];
  },
  post: function({ user_id, post_id }) {
    return postslist[user_id][post_id];
  },
  posts: function({ user_id}) {
    return Object.values(postslist[user_id]);
  }
};

let app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000);