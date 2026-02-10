db.employees.find({department:"HR"})
db.employees.find({
    department:"HR", salary:{$gt:3000}
})
db.employees.find({
    department:"HR", salary:{$gt:3000}
})
db.employees.find(
    {$and:[{department:"HR"},{salary:{$gt:3000}}]}
)
db.employees.find(
    {$and:[{department:"HR"},{salary:{$gt:3000}}]},{name:1,email:1,department:1}
)
db.employees.updateOne(
    {email:"Cathy@gmail.com"},{
        $set:{salary:3500}}
    
)
db.employees.updateOne(
    {email:"Cathy@gmail.com"},{$inc:{salary:3500}}
    
)

db.employees.updateMany(
    {$set:{points:1}}
    
)
db.employees.updateMany(
    {email:"br@gmail.com"},
    {$set:{points:10}}
    
)
db.employees.updateMany(
    {email:"br@gmail.com"},
    {$set:{points:10}},
    {upsert:true},
    
);
db.employees.find({},{name:1})
db.employees.deletyeOne(
    {email: "abc@gmail.com"}
)
db.employees.insertOne({email:"abc@gmail.com"})
db.employees.find({
    name:{$exist:true}
})


db.employees.find(
    {department:"HR"}
)

db.employees.find(
    {department:"HR",salary:{$gt:3000}}
)

db.employees.find(
    {$and:[{department:"HR"},{salary:{$gt:3000}}]}
)

db.employees.find(
    {$or:[{department:"HR"},{salary:{$gt:3000}}]},
    {name:1,email:1,department:1}
)



//db.employee.updateOne({},{})

db.employees.updateOne(
  { email: "cathy@gmail.com" },
  { $set: { salary: 3500 } },
);

db.employees.updateOne(
  { email: "cathy@gmail.com" },
  { $inc: { salary: 3500 } },
);

db.employees.updateMany({}, { $inc: { salary: 1000 } });

db.employees.updateOne(
     {email:"abc@gmail.com"},
     { $set: { points: 10 }},
     {upsert:true}
    );

    db.employees.find({},{name:1})

db.employees.deleteOne(
    {email:"abc@gmail.com"}
)

db.employees.deleteMany(
    {email:"abc@gmail.com"}
)

db.products.insertMany(
    [{name: "mouse", price: 200},
    {name: "laptop", price: 400},
    {name: "Keyboard", price: 600}
])

db.products.updateOne({name:"mouse"},{$set:{rating:4}})

db.employees.updateMany(
    {email:{$in:["cathy@gmail.com","mike@gmail.com"]}},
    {$inc:{salary:1000}}
)

db.employees.find({
    name:{$exists:false}
})

db.employees.find({
    name:{$exists:true}
})