//  Transformar a ruta absoluta
const getLinksAllFiles = (file_path) => { 
    // Evalúa si la ruta es absoluta, si no lo es, la convierte en absoluta
    return new Promise ((resolve, reject) => {
        if(path.isAbsolute(file_path)) {
            isFileOrDirectory(file_path).then((result) => {
                resolve (getArrayFiles(result));
            }).catch((err) => reject(console.log(err)));
        } else  {
            let givenPath = path.resolve(file_path);
            isFileOrDirectory(givenPath).then((result) => {
                resolve (getArrayFiles(result));
            }).catch(err => reject(console.log(err)));  
        }
    });
};