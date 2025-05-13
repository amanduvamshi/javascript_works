const authSystem = () => {
  let password = "123456";

  return {
    login: (inputPassword) => {
      if (inputPassword === password) {
        console.log("Login successful");
      } else {
        console.log("Login failed");
      }
    },
    changePassword: (newPassword) => {
      password = newPassword;
        console.log("Password changed successfully");
    },
  };
};

const auth = authSystem();
auth.login("123456"); // Output: Login successful
auth.changePassword("654321"); // Output: undefined
auth.login("123456"); // Output: Login failed
auth.login("654321"); // Output: Login successful