# ADO Extension for Defender for DevOps

An extension for Azure DevOps that allows [Microsoft Defender for DevOps](https://aka.ms/DfDdocs) to extract metadata from pipelines, such as containers digest ID, container image name etc. That information will then be used within [Microsoft Defender for Cloud](https://aka.ms/mdc) to connect DevOps entities with their related resources running multi-cloud (Azure, AWS, GCP, on-premise).

## Dependencies

The task currently depends on [Docker](https://docs.docker.com/get-started/overview/).

Microsoft-hosted build agents ship with an included list of software. To see if your agent image comes with these pre-installed, [see here](https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops&tabs=yaml#software).

To install Docker manually, please follow the steps listed on their [docs page](https://docs.docker.com/engine/install/).

## View Results

To better view the results of the code to cloud, open Microsoft Defender for Cloud in your Azure portal.

## More Information

* [Microsoft Defender for DevOps](https://aka.ms/DfDdocs)
* [Microsoft Defender for Cloud](https://aka.ms/mdc)
* [Microsoft Security DevOps Azure DevOps Extension](https://aka.ms/msdo-azdevops)
