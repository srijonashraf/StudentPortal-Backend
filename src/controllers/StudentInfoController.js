const StudentInfoModel = require("../models/StudentInfo");

exports.allStudents = async (req, res) => {
  try {
    let result = await StudentInfoModel.find();
    res
      .status(200)
      .json({ status: "success", message: "All Students", data: result });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Server Error fetching Students Info",
      data: err,
    });
  }
};

exports.registration = async (req, res) => {
  let reqBody = req.body;
  try {
    let result = await StudentInfoModel.create(reqBody);
    res.status(201).json({
      status: "success",
      message: "Student Registered Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Failed to Register Student",
      data: error,
    });
  }
};

exports.stuInfoById = async (req, res) => {
  try {
    // Use req.params to get the parameters from the URL
    let id = req.params.id;

    // Find a single student by ID.
    let result = await StudentInfoModel.findOne({ id: id });

    if (result) {
      // If a student is found, return success
      res.status(200).json({
        status: "success",
        message: "Student info:",
        data: result,
      });
    } else {
      // If no student is found, return a failure status
      res.status(404).json({
        status: "error",
        message: "Student not found",
      });
    }
  } catch (error) {
    // Handle other errors
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve student information",
      data: error,
    });
  }
};

exports.editStuInfo = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await StudentInfoModel.findOne({ id: id }).count(); //This is an extra query, it can be removed.
    if (result === 1) {
      let reqBody = req.body;
      let data = await StudentInfoModel.updateOne({ id: id }, reqBody); //This query is enough for this function, No need to check the entity from db by findOne at first.
      res
        .status(200)
        .json({
          status: "success",
          message: "Data Updated Successfully",
          data: data,
        });
    } else {
      res.status(500).json({ status: "error", message: "No Student Found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({
        status: "error",
        message: "Server Error to fetch Info",
        data: err,
      });
  }
};
