export const join = (req, res) => res.send("join, /join");
export const login = (req, res) => res.send("login, /login");

export const see = (req, res) => {
  res.send(`See User #${req.params.id}`);
};
export const edit = (req, res) => {
  res.send(`Edit User #${req.params.id}`);
};
export const deleteUser = (req, res) => {
  res.send(`Delete User #${req.params.id}`);
};
export const logout = (req, res) => {
  res.send("Log Out, /logout");
};
