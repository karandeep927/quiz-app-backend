const path = require('path')

exports.getFilePath = (file)=>{
    return path.join(__dirname,"files",file)
}
