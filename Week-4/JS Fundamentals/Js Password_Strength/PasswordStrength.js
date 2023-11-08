function isStrongPassword(pass) {
  const regex = /[A-Z]/;
  if (pass.length < 8) {
    return false;
  } else if ((pass.includes("password"))) {
    return false;
  } else if (!regex.test(pass)) {
    return false;
  } else return true;
}

ans = isStrongPassword("hello")

console.log(ans);
