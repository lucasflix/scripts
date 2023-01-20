# Docker Updates
echo "Updating all docker containers"

cd /home/${USER}/jellyfin
docker compose pull

# Docker Containers Backup
cd /home/${USER}/.config/lucasflix
mkdir /home/${USER}/.backups/

echo "Compressing configs..."
tar -czvf --exclude "rclone" lucasflix.tar.gz /home/$USER/.config/lucasflix
mv lucasflix.tar.gz /home/${USER}/.backups

echo "Copying backups to backblaze..."
rclone copy /home/${USER}/.backups/lucasflix.tar.gz backblaze:lucasflix/backups

# Customizations
cd /home/${USER}/.jellyfin

echo "Cloning repository and updating dependencies..."
cd source-code
git fetch
git pull
npm install

echo "Copying custom icon to source code..."
cp ../lucasflix-customs/favicon.ico src/

echo "Building source code..."
npm run build:production

echo "Copying build to web/ folder"
cd ..
rm -rf web
mkdir web
mv source-code/dist/* web/

echo "Replacing Jellyfin title..."
cd web
../replace.sh "\"Jellyfin\"" "\"Lucasflix\""
../replace.sh "'Jellyfin'" "'Lucasflix'"
../replace.sh "<title>Jellyfin" "<title>Lucasflix"

echo "Inserting warning..."
sed -i 's/<\/body>/<script src="warning.js"><\/script><\/body>/g' index.html
cd ..

echo "Copying custom images..."
cp -r lucasflix-customs/* web/
