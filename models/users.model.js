module.exports = mongoose => {
  const Users = mongoose.model(
    "users",
    mongoose.Schema(
      {
        name: String,
        position: String,
      },
      { timestamps: true }
    )
  );
  return Users;
};