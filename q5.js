db.employees.find(
    {salary:"3000"}

)
db.employees.find(
    {department:{$eq:"HR"}}
)
db.employees.find(
    {department:{$eq:3000}}
)
db.employees.find(
    {department:{$gt:3000}}
)
db.employees.find(
    {department:{$ne:3000}}
)
db.employees.find(
    {department:{$lt:3000}}
)
db.employees.find(
    {department:{$lte:3000}}
)


db.employees.find(
    {department:"HR"}
)

db.employees.find(
    {department:{$eq:"HR"}}
)

db.employees.find(
    {salary:{$eq:3000}}
)

db.employees.find(
    {salary:{$gt:3000}}
)
db.employees.find(
    {salary:{$gte:3000}}
)

db.employees.find(
    {salary:{$ne:3000}}
)

db.employees.find(
    {salary:{$lt:3000}}
)

db.employees.find(
    {salary:{$lte:3000}}
)