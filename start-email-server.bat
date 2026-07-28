@echo off
REM Quick Start Email Server - Windows Batch File

echo.
echo ====================================
echo   GreenChip Energy Email Setup
echo ====================================
echo.
echo Checking for .env file...
if not exist .env (
    echo.
    echo ❌ .env file not found!
    echo.
    echo Please copy .env.example to .env and add your credentials:
    echo   1. EMAIL_USER = your email
    echo   2. EMAIL_PASSWORD = your app password
    echo   3. EMAIL_TO = info@greenchipenergy.com
    echo.
    echo Then run this script again.
    pause
    exit /b 1
)

echo ✓ .env file found
echo.
echo Starting email server on port 5000...
echo.
echo Make sure to:
echo   1. Run: npm run dev (in another terminal)
echo   2. Go to: http://localhost:5173
echo   3. Test the forms!
echo.
echo Server running. Press Ctrl+C to stop.
echo.

node server.js
pause
