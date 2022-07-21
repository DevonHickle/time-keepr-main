module.exports = mongoose => {
  const User = mongoose.model(
    'user',
    mongoose.Schema(
      {
        id: String,
        name: String
      },
      { timestamps: true }
    )
  )
  return User
}