docker-machine ssh &&
cd /c/Users/Henrik/Documents/heig/annee3/semestre2/RES/Labo/Teaching-HEIGVD-RES-2016-LabBox/RES/Teaching-HEIGVD-RES-2016-Labo-HTTPInfra &&
./stop_running_containers.sh &&
./build_docker_images.sh &&
php launch_containers.php &&
chrome.exe demo.res.ch:8080