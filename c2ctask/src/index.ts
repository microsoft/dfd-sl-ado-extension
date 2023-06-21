import tl = require('azure-pipelines-task-lib/task');
import { ContainerMapping } from './conMap';

enum Inputs {
    TaskType = 'tasktype'
}

async function run() {
    const inputString: string | undefined = tl.getInput(Inputs.TaskType, true);
    console.log('Running ', inputString);
    const conMap = new ContainerMapping(inputString);
    conMap.run();
}

run().catch(error => {
    console.log("Ran into error: " + error);
    tl.setResult(tl.TaskResult.Succeeded, "Finished execution", true);
});