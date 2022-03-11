export const home = (req, res) => res.send("Home, /");
export const search = (req, res) => res.send("Search, /search");

export const upload = (req, res) => {
  return res.send(`Upload, /videos/upload`);
};
export const watch = (req, res) => {
  return res.send(`Watch Video ${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send(`Edit Video ${req.params.id}`);
};
export const deleteVideo = (req, res) => {
  return res.send(`Delete Video ${req.params.id}`);
};
