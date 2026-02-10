db.createCollection("vendors"),{
    validator:{
        $jsonschema:{
            bsonType:"object",
            required:["name","age"]
        }
    }
}
db.vendors.insertOne({
    name:"Hello",
    age:23
})

db.vendors.insertOne({
    
    age:22
})
 
db.vendors.insertOne({
    name:48734,
    age:"hjgh"
})

db.vendors.drop()

db.createCollection("vendors",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name","age"],
            properties:{
                name:{bsonType:["string","int"]},
                age:{bsonType:["int","null","string"],minimum:28},
            }
        }
    }
})

