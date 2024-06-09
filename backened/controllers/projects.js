const getAllProjects = (req, res) => {
    res.send("get all project");
  };
  
  const createProject = (req, res) => {
const {titlte,desc,image,username,url}= req.body
const result = Project.create ({titlte,desc,image,username,url})
console.log("result",)



    res.send("createProject");
  };
  
  const updateProject = (req, res) => {
    res.send("updateProject");
  };
  const deleteProject = async(req, res) => {
    const {id} = req.body
    const result = await Project.findByIdAndDelete({_id: id})
    res.send("deleteProject");
  };
  
  module.exports = {
    getAllProjects,
    createProject,
    deleteProject,
    updateProject,
  };