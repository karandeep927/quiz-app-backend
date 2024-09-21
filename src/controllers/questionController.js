const fs = require('fs').promises;
const {getFilePath} = require('../joinPath')

exports.getQuestion = async (req,res)=>{
    const path =  getFilePath(req.url.replace(/\//g, '_'));
    try {
        const data = await fs.readFile(`${path}.json`,'utf-8');
        res.status(200).json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ message: 'Server Error: File not found'});
    }
}