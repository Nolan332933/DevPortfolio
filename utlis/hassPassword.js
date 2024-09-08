import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  try {
    // Generate a salt with 10 rounds
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    // Handle error
    throw new Error("Error hashing password");
  }
};

export const comparePassword = async (plainPassword, hashedPassword) => {
  try {
    // Compare the plain password with the hashed password
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    // Handle error
    throw new Error("Error comparing passwords");
  }
};
