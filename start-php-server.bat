@echo off
REM Start PHP Server for Local Development
REM Make sure you have PHP installed first: https://www.php.net/downloads

echo.
echo ====================================
echo   PHP Local Development Server
echo ====================================
echo.

where php >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ PHP is not installed or not in PATH
    echo.
    echo Install PHP from: https://www.php.net/downloads
    echo.
    pause
    exit /b 1
)

echo ✓ PHP found
echo.
echo Starting PHP server on http://localhost:8000
echo.
echo Make sure to:
echo   1. Run: npm run dev (in another terminal)
echo   2. Go to: http://localhost:5173
echo   3. Test the forms!
echo.
echo Press Ctrl+C to stop the server
echo.

php -S localhost:8000

pause
