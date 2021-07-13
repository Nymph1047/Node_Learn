const download = promisify(require('download-git-repo'))

const createProjectAction = (project) =>{
        console.log(project)
}

module.exports = {
    createProjectAction
}