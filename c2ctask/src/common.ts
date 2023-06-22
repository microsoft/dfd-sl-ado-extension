import path from "path";
import fs from "fs";
import { IExecOptions } from "azure-pipelines-task-lib/toolrunner";
import tl = require('azure-pipelines-task-lib/task');


// Define an enum for the possible inputs for the task
export enum Inputs {
    TaskType = 'tasktype'
}


/*
* Enum for the task type input
*/
export enum TaskType {
    PreJob = 'pre-job',
    PostJob = 'post-job'
}

/**
 * Enum for defining constants used in the task.
 */
export enum Constants {
    // Unknown value
    Unknown = "unknown"
}


/**
 * Get the version of the current task
 * 
 */
export function getTaskVersion(taskPath?: string): string {
    try {
        var taskJsonPath = taskPath ? taskPath : path.join(__dirname, "..", "task.json");
        console.log("taskJsonPath: " + taskJsonPath);
        var taskJsonVersion = JSON.parse(fs.readFileSync(taskJsonPath, 'utf8')).version;
        return taskJsonVersion.Major + "." + taskJsonVersion.Minor + "." + taskJsonVersion.Patch;
    } catch (error) {
        console.log("Error occurred while getting task version: " + error);
        return Constants.Unknown;
    }
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
export function execTaskCmdSync(cmd: string, args: string[], options?: IExecOptions): string {
    var cmdExecute = tl.execSync(cmd, args, options);

    if (cmdExecute.code != 0) {
        throw new Error(`Failed to execute command: ${cmd} ${args}.
        Exit Code: ${cmdExecute.code}. 
        Stdout: ${cmdExecute.stdout}. 
        Stderr: ${cmdExecute.stderr}`);
    }

    return cmdExecute.stdout.trim();
}


/**
 * Encodes a string to base64.
 * 
 * @param str - The string to encode.
 * @returns The base64 encoded string.
 */
export const encode = (str: string):string => Buffer.from(str, 'binary').toString('base64');