

db.employees.find({
    name:"john"
})


db.employees.find({
    name:{$regex:"john"}
})

db.employees.find({
    name:{$regex:"riya",$options:"i"}
})


db.employees.find({
    name:{$regex:"^j",$options:"i"}
})
db.employees.find({
    name:{$regex:"$R",$options:"i"}
})

db.employees.find({
    name:{$regex:"h$",$options:"i"}
})
// mongoshell