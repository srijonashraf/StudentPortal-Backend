const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    id: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    dept: { type: String, required: true },
    sem: { type: Number, requird: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    dob: { type: Date, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    nationality: { type: String, required: true },
    gpa: { type: String, required: true },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const StudentInfoModel = mongoose.model("stuinfos", DataSchema);

module.exports = StudentInfoModel;
