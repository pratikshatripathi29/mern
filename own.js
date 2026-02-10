mongosh
use students
show dbs 
db.createCollection()  
 db.dropDatabase()

 db.st.insertMany([{name: "Neha Verma",
    age: 19,
    course: "Computer Science",
    year: 2,
    marks: 90
  },
  {
    name: "Rahul Singh",
    age: 21,
    course: "Information Technology",
    year: 4,
    marks: 78
  },
  {
    name: "Priya Patel",
    age: 18,
    course: "Artificial Intelligence",
    year: 1,
    marks: 88
  }
])


db.st.find({},{year:1,_id:0})

db.st.find({year:1})
// Update is used to modify existing documents in a collection.
// MongoDB provides mainly 3 update methods:
// updateOne()-Updates only ONE matching document
// db.collection.updateOne(
//   { condition },
//   { $set: { field: value } }
// )
// db.students.updateOne(
//   { name: "Amit Sharma" },
//   { $set: { marks: 90 } }
// )

// updateMany()-Updates ALL matching documents
// db.collection.updateMany(
//   { condition },
//   { $set: { field: value } }
// )
// Increase / Decrease a value ($inc)
// Remove a field ($unset)
// Rename a field ($rename)
// replaceOne()
// upsert-update and delete
// db.students.updateOne(
//   { name: "Rohit Kumar" },
//   { $set: { age: 22, course: "CS", marks: 80 } },
//   { upsert: true }
// )
// db.st.deleteMany()
// 1️⃣ Comparison Operators
// Used inside find()

// Operator	Meaning
// $eq	equal
// $ne	not equal
// $gt	greater than
// $gte	greater than or equal
// $lt	less than
// $lte	less than or equal
// $in	match any value
// $nin	not in values
// marks > 80 AND course = CS
// db.students.find({
//   $and: [
//     { marks: { $gt: 80 } },
//     { course: "CS" }
//   ]
// })

// // marks > 90 OR age < 19
// db.students.find({
//   $or: [
//     { marks: { $gt: 90 } },
//     { age: { $lt: 19 } }
//   ]
// })
