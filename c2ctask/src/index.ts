import tl = require('azure-pipelines-task-lib/task');
import { ContainerMapping } from './containerMapping';
import { Inputs } from "./common";

async function run() {
    const inputString: string = tl.getInputRequired(Inputs.TaskType);
    console.log('Running ', inputString);
    const conMap = new ContainerMapping(inputString);
    conMap.run();
}

run().catch(error => {
    console.log("Ran into error: " + error);
    // Always mark it as success even on error
    tl.setResult(tl.TaskResult.Succeeded, "Finished execution", true);
});