# ADO Extension for DevOps Security in Defender for Cloud

An extension for Azure DevOps that allows [Microsoft Defender for DevOps](https://aka.ms/DfDdocs) to extract metadata from pipelines, such as a container's digest ID, container image name etc. That information will then be used within [Microsoft Defender for Cloud](https://aka.ms/mdc) to connect DevOps entities with their related cloud resources (Azure, AWS, GCP, on-premise).

## Dependencies

This task currently depends on [Docker](https://docs.docker.com/get-started/overview/) being installed on the build agent.

Microsoft-hosted build agents ship with an included list of software. To see if your agent image comes with these pre-installed, [see here](https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops&tabs=yaml#software).

To install Docker manually, please follow the steps listed on their [docs page](https://docs.docker.com/engine/install/).

## View Results

To view the results of the code to cloud mapping, open Microsoft Defender for Cloud in your Azure portal.

## More Information

* [Microsoft Defender for DevOps](https://aka.ms/DfDdocs)
* [Microsoft Defender for Cloud](https://aka.ms/mdc)
* [Microsoft Security DevOps Azure DevOps Extension](https://aka.ms/msdo-azdevops)
* [Map container images from code to cloud](https://aka.ms/containermapping)
