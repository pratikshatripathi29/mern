// create folder mongo_replica
// create folders-usa,uk,india
// inside mongo_replica folder
// go to cmd

// mongod -replSet rs1 --dbpath "d:\mongo_replica\usa" --port 27018
// mongod -replSet rs1 --dbpath "d:\mongo_replica\uk" --port 27019
// mongod -replSet rs1 --dbpath "d:\mongo_replica\india" --port 27020

// rs.initiate({
//     _id:"rs1",
//     members:[{_id:0,host:"127.0.0.1:27018"},
//         {_id:1,host:"127.0.0.1:27019"},
//         {_id:2,host:"127.0.0.1:27020"}
//     ]
// })

// rs.comnfig()
// rs.status()

// new tab
// mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"
// mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"



// use mydatabase
// db.users.insertOne({name:"Sumanth",age:21})
// show dbs

// show collections

// new tab

// mongosh --port 27019
// db.getMongo().setReadPref("secondary")
// show dbs 
// use mydatabase
// db.users.find()


// new tab
// mongosh --port 27018
// mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"
// do the whole Process
// use hdfc

// db.customers.insertOne({_id:"c1",name:"john",balance:1000})
// db.customers.insertOne({_id:"c2",name:"mohan",balance:1000})
// db.customers.find()
