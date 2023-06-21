import tl = require('azure-pipelines-task-lib/task');
import * as common from './common';
import { IExecOptions } from 'azure-pipelines-task-lib/toolrunner';

interface ICodeToCloud {
    run(): any;
}

enum TaskType {
    PreJob = 'pre-job',
    PostJob = 'post-job'
}


export class ContainerMapping implements ICodeToCloud {
    private readonly taskType: TaskType;
    private readonly version: string;
    private readonly sectionDelim: string = ":::";
    private readonly preJobStartTime: string = "PREJOBSTARTTIME";
    private readonly imageOptions: IExecOptions = {
        silent: true
    };

    constructor(inputString: string | undefined) {
        this.taskType = inputString as TaskType;
        this.version = common.getTaskVersion();
    }

    runPre() {
        const startTime = new Date().toISOString();
        tl.setVariable(this.preJobStartTime, startTime);
    }

    runPost() {
        let startTime = tl.getVariable(this.preJobStartTime);
        if (startTime == undefined) {
            throw new Error(this.preJobStartTime + " variable not set");
        }
        const encode = (str: string):string => Buffer.from(str, 'binary').toString('base64');
        let data : string[] = [];
        data.push(common.execTaskCmdSync("docker", ["--version"], this.imageOptions));
        data.push("Version: " + this.version);
        data.push(this.sectionDelim + "Events:");

        var events = common.execTaskCmdSync("docker", [
            "events",
            "--since",
            startTime,
            "--until",
            new Date().toISOString(),
            "--filter",
            "event=push",
            "--filter",
            "type=image",
            "--format",
            "ID={{.ID}}"
            ], this.imageOptions);
                
        data.push(events);
        
        data.push(this.sectionDelim + "Images:");
        var images = common.execTaskCmdSync("docker", [
            "images",
            "--format",
            "CreatedAt={{.CreatedAt}}::Repo={{.Repository}}::Tag={{.Tag}}::Digest={{.Digest}}"
            ], this.imageOptions);
        data.push(images);
        console.log(encode(data.join("\n")));
    }

    run() {
        switch (this.taskType) {
            case TaskType.PreJob:
                this.runPre();
                break;
            case TaskType.PostJob:
                this.runPost();
                break;
            default:
                throw new Error('Invalid task type');
        }
    }
}