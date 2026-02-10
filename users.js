db.users.find({
    email:"shubham@gmail.com",
    passward:"4536",
    
});
db.courses.find()
db.modules.find({courseId:'c1'})

// show all lessons of m1
db.lessons.find({moduleId:'m1'})

// enroll u1 to c1
db.enrollments.insertOne({
    courseId:'c1',
    studentId: 'u1'
})

// mark l1 complete when u1 hits complete button
db.lessonProgress.insertOne({
    studentId:'u1',
    lessonId:'l1',
    isCompleted:true
})
// check weather l1 is completed or not 
db.lessonProgress.find(
    {_id:'u1'},
    {$set:{password:'abc'}}
)

// show profile details
db.users.find({_id:'u1'})
// Admin interfaces
// Users CRUD
// Course CRUD
