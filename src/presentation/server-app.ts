import { CreateTable } from "../domain/uses-cases/create-table.use-case";
import { SaveFile } from "../domain/uses-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable:boolean;
    fileName: string;
    fileDestination: string;
}

export class ServerApp {
    static run({ base, limit, showTable, fileName, fileDestination}: RunOptions) {
        console.log('Server is running...');
        const table = new CreateTable()
        .execute({ base, limit });
        const wasCreated = new SaveFile()
        .execute({
            fileContent: table, 
            fileName: `${fileName}-${base}`,
            fileDestination: fileDestination
        });
        showTable && console.log(table);

        (wasCreated) ? console.log('File created!') : console.log('File not created!');
    }

}