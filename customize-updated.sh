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
