#!/bin/bash

# Build and Package Script for WebTools Suite
# Este script construye el proyecto Astro y crea un archivo ZIP listo para deploy

echo "Iniciando proceso de build y empaquetado..."
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "Error: No se encuentra package.json. Asegurate de ejecutar este script desde el directorio del proyecto."
    exit 1
fi

# Limpiar builds anteriores
echo "Limpiando builds anteriores..."
if [ -d "dist" ]; then
    rm -rf dist
    echo "   Directorio dist eliminado"
fi

if ls webtools-suite-*.zip 1> /dev/null 2>&1; then
    rm -f webtools-suite-*.zip
    echo "   ZIPs anteriores eliminados"
fi

echo ""

# Instalar dependencias
echo "Verificando dependencias..."
if [ ! -d "node_modules" ]; then
    echo "   Instalando dependencias (esto puede tomar un momento)..."
    npm install
    if [ $? -ne 0 ]; then
        echo "Error al instalar dependencias"
        exit 1
    fi
else
    echo "   Dependencias OK"
fi

echo ""

# Ejecutar build
echo "Construyendo proyecto..."
npm run build

if [ $? -ne 0 ]; then
    echo "Error durante el build"
    exit 1
fi

echo "   Build completado!"
echo ""

# Verificar que el directorio dist existe
if [ ! -d "dist" ]; then
    echo "Error: El directorio dist no fue creado"
    exit 1
fi

# Crear nombre del archivo ZIP con timestamp
timestamp=$(date +"%Y%m%d-%H%M%S")
zipName="webtools-suite-$timestamp.zip"

# Crear archivo ZIP
echo "Creando archivo ZIP..."
echo "   Archivo: $zipName"

cd dist
zip -r "../$zipName" . > /dev/null
cd ..

if [ -f "$zipName" ]; then
    zipSize=$(du -h "$zipName" | cut -f1)
    echo "   ZIP creado exitosamente"
    echo "   Tamanio: $zipSize"
else
    echo "Error al crear el archivo ZIP"
    exit 1
fi

echo ""

# Mostrar contenido del build
echo "Contenido del build:"
fileCount=$(find dist -type f | wc -l)
dirSize=$(du -sh dist | cut -f1)

echo "   Archivos: $fileCount"
echo "   Tamanio total: $dirSize"

# Listar páginas HTML
if ls dist/*.html 1> /dev/null 2>&1; then
    echo ""
    echo "   Paginas HTML generadas:"
    find dist -name "*.html" | sed 's|dist/|/|' | while read -r line; do
        echo "      - $line"
    done
fi

echo ""
echo "======================================================="
echo "Build completado exitosamente!"
echo "======================================================="
echo ""
echo "Archivo listo: $zipName"
echo ""
echo "Proximos pasos:"
echo "   1. Sube el archivo $zipName a tu hosting"
echo "   2. Extrae el contenido en el directorio raiz del servidor"
echo "   3. Configura tu servidor web para servir archivos estaticos"
echo ""
