const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let userSchema = mongoose.Schema({
  id: Number,
  key: String,
});

let timeData = mongoose.Schema({
  userId: Number,
  date: Date,
  time: Number
})

let Users = mongoose.model('Users', userSchema);
let Time = mongoose.model('TimeData', timeData);

// module.exports = {
//   save: (arr) => {
//     let filter = [];
//     arr.forEach((item) => {
//       filter.push({
//         avatar_url: item.owner.avatar_url,
//         owner: item.owner.login,
//         owner_url: item.owner.html_url,
//         name: item.name,
//         description: item.description,
//         watchers: item.watchers,
//         size: item.size,
//         forks: item.forks,
//         url: item.html_url,
//         created: item.created_at,
//         updated: item.updated_at
//       })
//     })

//     return Repo.insertMany(filter)
//   },
//   // filter?
//   get: () => {
//     return Repo.find().sort({size: -1}).limit(25)
//   }
// }