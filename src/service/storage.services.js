const ImageKit = require('@imagekit/nodejs')

const imagekit = new ImageKit({
    privateKey:"private_0vDZIYVGez8WCgOlGA/SrQx9CjM="
})


async function uploadFile(buffer){
    const result = await  imagekit.files.upload({
        file:buffer,
        fileName :"image.jpg",

    })
    return result;
}

module.exports = uploadFile;