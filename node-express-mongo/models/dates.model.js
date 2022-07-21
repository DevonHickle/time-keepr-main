module.exports = mongoose => {
  const Dates = mongoose.model(
    "dates",
    mongoose.Schema(
      {
        startDate: String,
        endDate: String,
      },
      { timestamps: true }
    )
  );
  return Dates;
};