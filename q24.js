// log in into replicaSet
// created hdfcbank
// inserted some value

const session=db.getMongo().startSession()
session.startTransacton()
var custCollection=session.getDatabase("hdfcbank").customers
db.custCollectionupdateOne({_id:"c1"},{$inc:{balance:-100}})
db.custCollectionupdateOne({_id:"c2"},{$inc:{balance:100}})
session.commitTransaction()
session.endSession()
cls 
db.customers.find()
