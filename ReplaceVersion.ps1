$ErrorActionPreference = "Stop"

$version = Get-Content -Path $PSScriptRoot/VERSION

# Update version in vss-extension.json file
$filePath = Join-Path $PSScriptRoot "vss-extension.json"
$extensionJson = Get-Content -Path $filePath -Raw | ConvertFrom-Json
$extensionJson.version = $version
$extensionJson | ConvertTo-Json -Depth 100 | Set-Content -Path $filePath

# Update version in DfdPostJobExtension.yml file
$filePath = Join-Path $PSScriptRoot "DfdExtension" "DfdPostJobExtension.yml"
$dfdPostJobExtensionYml = Get-Content -Path $filePath -Raw
$dfdPostJobExtensionYml = $dfdPostJobExtensionYml -replace 'curDecoratorVersion=\d+\.\d+\.\d+', "curDecoratorVersion=$version"
$dfdPostJobExtensionYml | Set-Content -Path $filePath