export class Blog {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.body = data.body
    this.tags = data.tags
    this.published = data.published || true
    this.creatorId = data.creatorId
    this.creator = data.creator



  }

}

// {
//   "_id": "64b9b9f8eb84f17d842ed47a",
//   "title": "BBQ Sandwiches 2",
//   "body": "Barbecue sandwich (2) with slaw and onion rings plus a caramel fudge shake. Wife had a BLT and a soft drink. Everything A+. Hot, tasty, and very reasonable. Barbecue better than most barbecue places. Service was polite and helpful.",
//   "tags": [],
//   "published": true,
//   "creatorId": "649b6c87c9cba1499b7c86a3",
//   "createdAt": "2023-07-20T22:49:28.894Z",
//   "updatedAt": "2023-07-20T22:49:28.894Z",
//   "__v": 0,
//   "creator": {
//       "_id": "649b6c87c9cba1499b7c86a3",
//       "subs": [
//           "auth0|649b6c8730792d8bd47e0fae"
//       ],
//       "email": "jc@mail.com",
//       "name": "Jared",
//       "picture": "https://w7.pngwing.com/pngs/343/357/png-transparent-computer-icons-minions-avatar-minions-heroes-smiley-owl.png",
//       "bio": "",
//       "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
//       "github": "",
//       "linkedin": "",
//       "resume": "",
//       "class": "",
//       "graduated": false,
//       "createdAt": "2023-06-27T23:11:23.076Z",
//       "updatedAt": "2023-07-02T02:12:31.753Z",
//       "__v": 0,
//       "id": "649b6c87c9cba1499b7c86a3"
//   },
//   "id": "64b9b9f8eb84f17d842ed47a"
// }