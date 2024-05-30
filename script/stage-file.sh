#! sh

# This is a script to copy the public folder and the static folder to the standalone folder

cp -r public .next/standalone
cp -r .next/static .next/standalone/.next