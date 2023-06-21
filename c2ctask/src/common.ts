import path from "path";
import fs from "fs";
import { IExecOptions } from "azure-pipelines-task-lib/toolrunner";
import tl = require('azure-pipelines-task-lib/task');


/**
 * Get the version of the current task
 * 
 */
export function getTaskVersion() : string {
    const taskJsonPath = path.join(__dirname, "..", "task.json"); 
    console.log("taskJsonPath: " + taskJsonPath);
   var taskJsonVersion = JSON.parse(fs.readFileSync(taskJsonPath, 'utf8')).version;
   return taskJsonVersion.Major + "." + taskJsonVersion.Minor + "." + taskJsonVersion.Patch;
}


/**
 * Wrapper over the Task.execSync, Execute a command and return its stdout. 
 * Throw an error if the command fails.
 * 
 * @param cmd
 * @param args
 * @param options
 * @returns stdout of the command
 */
export function execTaskCmdSync(cmd: string, args: string[], options?: IExecOptions) : string {
    var cmdExecute = tl.execSync(cmd, args, options);

    if (cmdExecute.code != 0) {
        throw new Error(`Failed to execute command: ${cmd} ${args}.
        Exit Code: ${cmdExecute.code}. 
        Stdout: ${cmdExecute.stdout}. 
        Stderr: ${cmdExecute.stderr}`);
    }

    return cmdExecute.stdout;
}