db.employees.aggregate(
    {$project:{
        _id:0,name:1,salary:1,
        grade:{$cond:[{$gt:["$salary",4500]},"Grade a","Grade B"]}
    }}
)
db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        grade:{
            $cond:{if:{$gt:["$salary",4500]},
            then:"Grade A ",
            else:"Grade B",
        },
        },
    },
  },
]);

db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        grade:{
            $switch:{
                branches:[{case:{$gt:["salary",4500]},then:"Grade A"},{case:{$gt:["salary",4500]},then:"Grade B"}],
                default:"Grade C",
            },
        },
    },},
]);

db.orders.insertOne({
    empid:ObjectId("6982f30b0c232d3ff6628ca1"),
    product:"desktop",orderValue:2100
})

