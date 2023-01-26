var router = require('express').Router();
const fs = require("fs");
const path = require("path");
const sharp = require('sharp');

router.post('/', (req, res) => {

    let files = req.files;

    for (let key in files) {
        let file = files[key];
        let inputBuffer = file.data
        sharp(inputBuffer).toFormat('jpg').toFile('./test.jpg').then(info => {
           console.log(path.basename(path.dirname('test.jpg')) + '/test.jpg')
            const renderedFile = path.basename(path.dirname('test.jpg')) + '/test.jpg';
            res.download(renderedFile, function (err) {
                if (err) {
                    console.log(err); // Check error if you want
                }
                fs.unlinkSync(path.basename(path.dirname('test.jpg')) + '/test.jpg');
            });


        })
            .catch(err => { res.send(err) });

    }
})


module.exports = router;