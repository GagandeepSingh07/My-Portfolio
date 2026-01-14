@echo off
REM ============================================
REM Portfolio Migration Script - Windows
REM ============================================

echo.
echo ======================================
echo Portfolio File Structure Migration
echo ======================================
echo.
echo This script will reorganize your portfolio
echo into a professional structure.
echo.
echo Press any key to start...
pause > nul

REM Create subdirectories for portfolio
echo Creating portfolio subdirectories...
mkdir "src\images\portfolio\social-media" 2>nul
mkdir "src\images\portfolio\3d-work" 2>nul
mkdir "src\images\portfolio\logos" 2>nul
mkdir "src\images\portfolio\reels" 2>nul
mkdir "src\images\portfolio\certificates" 2>nul
mkdir "src\images\portfolio\posts" 2>nul
mkdir "src\images\portfolio\videos" 2>nul

REM Create icons subdirectories
echo Creating icons subdirectories...
mkdir "src\images\icons\software" 2>nul
mkdir "src\images\icons\ui" 2>nul

REM Create JS subdirectories
echo Creating JavaScript subdirectories...
mkdir "src\js\components" 2>nul
mkdir "src\js\utils" 2>nul

REM Create archive folder
echo Creating archive folder...
mkdir "archive" 2>nul

echo.
echo ======================================
echo Step 1: Copying Profile Images
echo ======================================

copy "assets\Images\gagandeep-singh-hero-section-photo-1.png" "src\images\profile\hero-photo.png"
copy "assets\Images\gagandeep-singh-profile-photo-3.png" "src\images\profile\about-photo.png"
copy "assets\Images\gagandeep-singh-letter-box-photo-1.png" "src\images\profile\letterbox-photo.png"
copy "assets\Images\gagandeep-singh-profile-photo-1.JPG" "src\images\profile\profile-photo-1.jpg"
copy "assets\Images\gagandeep-singh-profile-photo-2.png" "src\images\profile\profile-photo-2.png"
copy "assets\Images\gagandeep-singh-profile-photo-4.png" "src\images\profile\profile-photo-4.png"
copy "assets\Images\gagandeep-singh-letter-box-photo-back.png" "src\images\profile\letterbox-photo-back.png"
copy "assets\Images\gagandeep-singh-letter-box-photo-front.png" "src\images\profile\letterbox-photo-front.png"

echo.
echo ======================================
echo Step 2: Copying Software Icons
echo ======================================

copy "assets\icons\Photoshop.png" "src\images\icons\software\photoshop.png"
copy "assets\icons\After effects.png" "src\images\icons\software\after-effects.png"
copy "assets\icons\premiere pro.png" "src\images\icons\software\premiere-pro.png"
copy "assets\icons\Illustrator.png" "src\images\icons\software\illustrator.png"
copy "assets\icons\DaVinci Resolve.png" "src\images\icons\software\davinci-resolve.png"
copy "assets\icons\Maya.png" "src\images\icons\software\maya.png"
copy "assets\icons\Blender.png" "src\images\icons\software\blender.png"
copy "assets\icons\Coreldraw.png" "src\images\icons\software\coreldraw.png"
copy "assets\icons\Figma.png" "src\images\icons\software\figma.png"
copy "assets\icons\Affinity.png" "src\images\icons\software\affinity.png"
copy "assets\icons\Animate.png" "src\images\icons\software\animate.png"
copy "assets\icons\Gumroad-G.png" "src\images\icons\software\gumroad-g.png"
copy "assets\icons\Gumroad-G2.png" "src\images\icons\software\gumroad-g2.png"

echo.
echo ======================================
echo Step 3: Copying UI Icons
echo ======================================

copy "assets-2\icons-2\bx-arrow-back.svg" "src\images\icons\ui\arrow-back.svg"
copy "assets-2\icons-2\play-button.svg" "src\images\icons\ui\play-button.svg"

echo.
echo ======================================
echo Step 4: Copying Portfolio Images
echo ======================================

echo Copying social media posts...
copy "assets-2\my-work\posts\1.jpg" "src\images\portfolio\social-media\carryon-faucets-1.jpg"
copy "assets-2\my-work\posts\2.jpg" "src\images\portfolio\social-media\faher-facewash.jpg"
copy "assets-2\my-work\posts\3.jpg" "src\images\portfolio\social-media\carryon-faucets-2.jpg"
copy "assets-2\my-work\posts\4.jpg" "src\images\portfolio\social-media\cosmogen-shampoo.jpg"

echo Copying 3D work...
copy "assets-2\my-work\3d\3d 1.png" "src\images\portfolio\3d-work\study-table.png"
copy "assets-2\my-work\3d\3d 2.png" "src\images\portfolio\3d-work\procedural-planet.png"
copy "assets-2\my-work\3d\3d 3.png" "src\images\portfolio\3d-work\interior-design.png"
copy "assets-2\my-work\3d\3d 4.png" "src\images\portfolio\3d-work\work-4.png"
copy "assets-2\my-work\3d\3d 5.png" "src\images\portfolio\3d-work\work-5.png"
copy "assets-2\my-work\3d\3d 6.png" "src\images\portfolio\3d-work\exterior-design.png"
copy "assets-2\my-work\3d\3d 7.png" "src\images\portfolio\3d-work\work-7.png"
copy "assets-2\my-work\3d\3d 8.png" "src\images\portfolio\3d-work\donut-model.png"

echo Copying logos...
copy "assets-2\my-work\logos\1.png" "src\images\portfolio\logos\logo-competition-1.png"
copy "assets-2\my-work\logos\2.png" "src\images\portfolio\logos\logo-competition-2.png"
copy "assets-2\my-work\logos\3.png" "src\images\portfolio\logos\typecraft-logo.png"
copy "assets-2\my-work\logos\4.png" "src\images\portfolio\logos\music-channel-logo.png"
copy "assets-2\my-work\logos\5.png" "src\images\portfolio\logos\unit-converter-logo.png"

echo Copying reels...
copy "assets-2\my-work\reels\nexus-launch.png" "src\images\portfolio\reels\nexus-launch.png"
copy "assets-2\my-work\reels\nexus-promotion.png" "src\images\portfolio\reels\nexus-promotion.png"
copy "assets-2\my-work\reels\callon-nuts-ad.png" "src\images\portfolio\reels\callon-nuts-ad.png"
copy "assets-2\my-work\reels\callon-nuts-post.png" "src\images\portfolio\reels\callon-nuts-post.png"
copy "assets-2\my-work\reels\grandambassador-post1.png" "src\images\portfolio\reels\grandambassador-post1.png"
copy "assets-2\my-work\reels\grandambassador-post2.png" "src\images\portfolio\reels\grandambassador-post2.png"

echo Copying certificates...
copy "assets-2\my-work\certificates\1.png" "src\images\portfolio\certificates\code-crafter.png"
copy "assets-2\my-work\certificates\2.png" "src\images\portfolio\certificates\data-visualization.png"
copy "assets-2\my-work\certificates\3.png" "src\images\portfolio\certificates\big-data-analytics.png"
copy "assets-2\my-work\certificates\4.png" "src\images\portfolio\certificates\quiz-competition.png"

echo.
echo ======================================
echo Step 5: Copying CSS Files
echo ======================================

copy "assets\globleStyle.css" "src\css\global.css"
copy "assets\style.css" "src\css\home.css"
copy "assets-2\style-2.css" "src\css\work.css"

echo.
echo ======================================
echo Step 6: Copying JavaScript Files
echo ======================================

copy "assets\script.js" "src\js\home.js"
copy "assets-2\script-2.js" "src\js\work.js"

echo.
echo ======================================
echo Step 7: Copying Public Files
echo ======================================

copy "Other files\favicon.ico" "public\favicon.ico"
copy "Other files\favicon.svg" "public\favicon.svg"
copy "robots.txt" "public\robots.txt"
copy "sitemap.xml" "public\sitemap.xml"
copy "Other files\LICENSE" "LICENSE"

echo.
echo ======================================
echo Step 8: Creating Archive
echo ======================================

echo Moving old folders to archive...
xcopy "assets" "archive\assets\" /E /I /Y
xcopy "assets-2" "archive\assets-2\" /E /I /Y
xcopy "Other files" "archive\Other files\" /E /I /Y

echo.
echo ======================================
echo Migration Complete!
echo ======================================
echo.
echo Next steps:
echo 1. Review the new structure
echo 2. Update index.html and work.html paths
echo 3. Test your site locally
echo 4. Deploy when ready
echo.
echo Press any key to exit...
pause > nul
