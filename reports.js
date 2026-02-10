db.courses.aggregate([
  {
    $lookup: {
      from: "modules",
      localField: "_id",
      foreignField: "courseId",
      as: "modules"
    }
  },
  {
    $project: {
      _id: 0,
      courseId: "$_id",
      courseName: "$title",
      modules: "$modules.title"
    }
  }
])


