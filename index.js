const swaggerCLI = require("@apidevtools/swagger-cli")

function dereferenceFiles(files, outputType) {

    files.forEach(file => {

        const fileName = file.slice(0, file.length - 4)
        const folderName = "dereferenced_files/" + fileName.slice(0, fileName.indexOf("-"))
        const outputFilePath = folderName + "/" + fileName + "." + outputType

        swaggerCLI.bundle(file, { dereference: true, outfile: outputFilePath, type: outputType })

    });
}

dereferenceFiles(["resources-2.0.0.yml", "resources-1.0.2.yml", "accounts-1.0.3.yml", "accounts-2.0.0.yml"], "yaml")