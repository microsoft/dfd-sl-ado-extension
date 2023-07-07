# ADO Extension for Shift-Left in Defender for DevOps

This repo contains the code for the ADO private extension that is installed on the customer's organization for injecting the scripts used to calculate the diff of the digests that were deployed as part of a pipeline run.

More information on ADO extensions - 
https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-pipeline-decorator?view=azure-devops
https://learn.microsoft.com/en-us/azure/devops/extend/get-started/node?view=azure-devops

## Releasing new version 

1. Modify and Commit the new changes.
2. Update the version in `vss-extension.json` file.
    - Alternatively, you can add the `--rev-version` command in the extension create command to increment it directly 
    > npx tfx-cli extension create --rev-version 
3. From PowerShell/bash shell, run from the extension root directory 
    > npx tfx-cli extension create [--rev-version]
4. Publish and share the extension from marketplace
`https://marketplace.visualstudio.com/manage/publishers/<Your-publisher-name>`
    - For releasing to public, use the [Microsoft Dfd Publisher](https://marketplace.visualstudio.com/manage/publishers/ms-securitydevops?noPrompt=true)
    - For local testing, use your own publisher name
5. From ADO organization settings/Extension - add the extension. More information on publishing extension can be found [here](https://learn.microsoft.com/en-us/azure/devops/extend/publish/overview?view=azure-devops).

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
