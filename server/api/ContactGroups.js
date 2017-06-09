var ContactGroups = module.exports = {};

const avatar = 'https://www.shareicon.net/data/256x256/2016/05/24/770029_people_512x512.png'
const users = ['Batman', 'Superman', 'Spiderman','Wonder woman', 'Hawk Eye', 'Ant Man', 'Giant Man', 'Thor', 'Loki', 'Hulk']
const generateUsers = (count, bool) => {
  const array = []
  let body = {}
  for (let i = 0; i < count; i++) {
    body = {
      name: users[i],
      avatar: bool ? avatar : null
    }
    array.push(body)
  }
  return array
}


ContactGroups.index = function(req, res, next) {
  let body = [
    {
      name: 'Test Function 1 No Avatar',
      users: generateUsers(1, false),
      user_id: 1,
      timestamp: new Date().getTime() - 60000
    },
    {
      name: 'Test Function 2 Have Avatar',
      users: generateUsers(2, true),
      user_id: 1,
      timestamp: new Date().getTime() - 60000
    },
    {
      name: 'Test Function 3 No Avatar',
      users: generateUsers(3, false),
      user_id: 1,
      timestamp: new Date().getTime() - 60000
    },
    {
      name: 'Test Function 4 No Avatar',
      users: generateUsers(4, false),
      user_id: 1,
      timestamp: new Date().getTime() - 60000
    },
    {
      name: 'Test Function 10 Have Avatar',
      users: generateUsers(10, true),
      user_id: 1,
      timestamp: new Date().getTime() - 60000
    },
  ]
  const data = {
    data: body,
    code: 200,
    status: 'OK'  
  }
  res.send(data);  
}