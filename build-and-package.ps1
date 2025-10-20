# Build and Package Script for WebTools Suite
Write-Host "Iniciando proceso de build y empaquetado..." -ForegroundColor Cyan
Write-Host ""

if (!(Test-Path "package.json")) {
    Write-Host "Error: No se encuentra package.json" -ForegroundColor Red
    exit 1
}

Write-Host "Limpiando builds anteriores..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
    Write-Host "   Directorio dist eliminado" -ForegroundColor Green
}

if (Test-Path "webtools-suite-*.zip") {
    Remove-Item -Force "webtools-suite-*.zip"
    Write-Host "   ZIPs anteriores eliminados" -ForegroundColor Green
}

Write-Host ""
Write-Host "Verificando dependencias..." -ForegroundColor Yellow
if (!(Test-Path "node_modules")) {
    Write-Host "   Instalando dependencias..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Error al instalar dependencias" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "   Dependencias OK" -ForegroundColor Green
}

Write-Host ""
Write-Host "Construyendo proyecto..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error durante el build" -ForegroundColor Red
    exit 1
}

Write-Host "   Build completado!" -ForegroundColor Green
Write-Host ""

if (!(Test-Path "dist")) {
    Write-Host "Error: dist no fue creado" -ForegroundColor Red
    exit 1
}

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$zipName = "webtools-suite-$timestamp.zip"

Write-Host "Creando archivo ZIP..." -ForegroundColor Yellow
Write-Host "   Archivo: $zipName" -ForegroundColor Cyan

try {
    Compress-Archive -Path "dist\*" -DestinationPath $zipName -Force
    
    if (Test-Path $zipName) {
        $zipSize = (Get-Item $zipName).Length / 1MB
        Write-Host "   ZIP creado exitosamente" -ForegroundColor Green
        Write-Host "   Tamanio: $([math]::Round($zipSize, 2)) MB" -ForegroundColor Cyan
    } else {
        throw "ZIP no fue creado"
    }
} catch {
    Write-Host "Error al crear ZIP: $_" -ForegroundColor Red
    exit 1
}

Write-Host ""
$distFiles = Get-ChildItem -Path "dist" -Recurse -File
$totalFiles = $distFiles.Count
$totalSize = ($distFiles | Measure-Object -Property Length -Sum).Sum / 1MB

Write-Host "Contenido del build:" -ForegroundColor Yellow
Write-Host "   Archivos: $totalFiles" -ForegroundColor Cyan
Write-Host "   Tamanio: $([math]::Round($totalSize, 2)) MB" -ForegroundColor Cyan

Write-Host ""
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host "Build completado exitosamente!" -ForegroundColor Green
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Archivo listo: " -NoNewline -ForegroundColor Yellow
Write-Host "$zipName" -ForegroundColor White
Write-Host ""
Write-Host "Proximos pasos:" -ForegroundColor Cyan
Write-Host "   1. Sube $zipName a tu hosting" -ForegroundColor White
Write-Host "   2. Extrae el contenido" -ForegroundColor White
Write-Host "   3. Configura tu servidor web" -ForegroundColor White
Write-Host ""
