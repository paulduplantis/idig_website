# iDIG Website Backup Script
# This script backs up the iDIG website project to D:\idig_website_backup

# Source and destination paths
$sourcePath = "C:\Users\PaulDuplantis\idig-main\idig_website"
$backupPath = "D:\idig_website_backup"

# Create timestamp for backup folder
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$backupFolder = "$backupPath\idig_website_$timestamp"

# Check if source exists
if (-not (Test-Path $sourcePath)) {
    Write-Error "Source path does not exist: $sourcePath"
    exit 1
}

# Create backup directory if it doesn't exist
if (-not (Test-Path $backupPath)) {
    Write-Host "Creating backup directory: $backupPath" -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $backupPath -Force | Out-Null
}

# Create timestamped backup folder
Write-Host "Creating backup folder: $backupFolder" -ForegroundColor Yellow
New-Item -ItemType Directory -Path $backupFolder -Force | Out-Null

# Exclude common files/folders that don't need to be backed up
$excludeItems = @(
    "node_modules",
    ".git",
    "dist",
    "*.log",
    ".DS_Store",
    "Thumbs.db"
)

# Perform the backup using Robocopy for better performance and control
Write-Host "Starting backup from $sourcePath to $backupFolder..." -ForegroundColor Green

# Robocopy parameters:
# /E = Copy subdirectories, including empty ones
# /R:3 = Retry 3 times on failure
# /W:10 = Wait 10 seconds between retries
# /MT:8 = Use 8 threads for faster copying
# /XD = Exclude directories
# /XF = Exclude files
# /NFL = No file list
# /NDL = No directory list
# /NC = No class
# /NS = No size
# /NP = No progress
# /NCC = No copy class

$robocopyArgs = @(
    "`"$sourcePath`"",
    "`"$backupFolder`"",
    "/E",
    "/R:3",
    "/W:10",
    "/MT:8",
    "/XD", "node_modules", ".git", "dist",
    "/XF", "*.log", ".DS_Store", "Thumbs.db",
    "/NFL", "/NDL", "/NC", "/NS", "/NP", "/NCC"
)

# Execute robocopy
$process = Start-Process -FilePath "robocopy" -ArgumentList $robocopyArgs -Wait -PassThru -NoNewWindow

# Check robocopy exit codes
# 0-7 are success codes, 8+ are error codes
if ($process.ExitCode -le 7) {
    Write-Host "Backup completed successfully!" -ForegroundColor Green
    Write-Host "Backup location: $backupFolder" -ForegroundColor Cyan
    
    # Show backup size
    $backupSize = (Get-ChildItem -Path $backupFolder -Recurse | Measure-Object -Property Length -Sum).Sum
    $backupSizeMB = [math]::Round($backupSize / 1MB, 2)
    Write-Host "Backup size: $backupSizeMB MB" -ForegroundColor Cyan
    
    # Create a symlink to the latest backup for easy access
    $latestLink = "$backupPath\latest"
    if (Test-Path $latestLink) {
        Remove-Item $latestLink -Force
    }
    New-Item -ItemType SymbolicLink -Path $latestLink -Target $backupFolder | Out-Null
    Write-Host "Created symlink: $latestLink -> $backupFolder" -ForegroundColor Cyan
    
} else {
    Write-Error "Backup failed with exit code: $($process.ExitCode)"
    Write-Host "Common robocopy exit codes:" -ForegroundColor Yellow
    Write-Host "0 = No files copied (no changes needed)" -ForegroundColor Yellow
    Write-Host "1 = All files copied successfully" -ForegroundColor Yellow
    Write-Host "2 = Some files could not be copied" -ForegroundColor Yellow
    Write-Host "3 = Some files could not be copied (check access rights)" -ForegroundColor Yellow
    Write-Host "4 = Some mismatched files or directories were detected" -ForegroundColor Yellow
    Write-Host "5 = Some files could not be copied (check access rights)" -ForegroundColor Yellow
    Write-Host "6 = Additional files and mismatched files exist" -ForegroundColor Yellow
    Write-Host "7 = Files copied, a file mismatch was present, and additional files were present" -ForegroundColor Yellow
    Write-Host "8+ = Error occurred" -ForegroundColor Red
}

Write-Host "`nBackup script completed." -ForegroundColor Green
