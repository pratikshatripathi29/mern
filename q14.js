db.find.employees.find({},{name:1,department:1})
db.find.employees.find({},{name:1,dept:"$department"})

 db.users.insertOne(
... {name:"Yash", age:20,address:{addr1:"50 verdin ct",city:"columbus",state:"up"}})
 db.find.employees.find({},{name:1,dept:"$department"})
db.users.insertOne({name:"ria",age:30,address:{addr1:"paris",city:"n",state:"mp"}})
db.users.insertOne({},{name:1,age:1,"address.city":1})
db.users.insertOne({name:"ria",age:30,address:{addr1:"paris",city:"n",state:"mp"}})
db.users.insertOne({name:1,age:1,city:"$address.city",state:"$address.state"})
// add skills array
// and populate java,python,
db.users.updateMany({},{$push:{skills:["java,python"]}})
db.users.updateMany({},{$pull:{skills:["java,python"]}})
db.users.updateOne({name:"ria"}, {$push:{skills:"cpp"}})
// show only name and skills
db.users.find({},{_id:0,name:1,skills:1})
db.users.aggregate([{$project:{name:1,skills:1}},{$unwind:"$skills"}])