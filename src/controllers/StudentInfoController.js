const StudentInfoModel = require("../models/StudentInfo");

exports.allStudents = async (req, res) => {
  try {
    let result = await StudentInfoModel.find();
    res.status(200).json({ status: "success", message: "All Students", data: result });
  } catch (err) {
    res.status(500).json({ status: "error", message: "Server Error fetching Students Info", data: err });
  }
};

exports.registration = async (req, res) => {
  let reqBody = req.body;
  try {
    let result = await StudentInfoModel.create(reqBody);
    res.status(201).json({ status: "success", message: "Student Registered Successfully", data: result });
  } catch (error) {
    res.status(400).json({ status: "error", message: "Failed to Register Student", data: error });
  }
};
