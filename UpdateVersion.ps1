# Updates the version in `vss-extension.json` file and the `DfDExtension/DfDPostJobExtension.yml` file.
$ErrorActionPreference = "Stop"

$version = Get-Content -Path $PSScriptRoot/VERSION

# Update version in vss-extension.json file
$filePath = Join-Path $PSScriptRoot "vss-extension.json"
$extensionJson = Get-Content -Path $filePath -Raw | ConvertFrom-Json
$extensionJson.version = $version
$extensionJson | ConvertTo-Json -Depth 100 | Set-Content -Path $filePath

# Update version in task.json file
$filePath = Join-Path $PSScriptRoot "c2ctask" "task.json"
$extensionJson = Get-Content -Path $filePath -Raw | ConvertFrom-Json
$subVersions = $version.Split(".")
$extensionJson.version.Major = [int]($subVersions[0])
$extensionJson.version.Minor = [int]($subVersions[1])
$extensionJson.version.Patch = [int]($subVersions[2])
$extensionJson | ConvertTo-Json -Depth 100 | Set-Content -Path $filePath