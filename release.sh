#!/bin/bash
#
# Script to update the version number and push the updates to GitHub

# Update the version number
currentversion=$(cat package.json | grep version | cut -d : -f 2 | sed 's/[ ",]//g')
echo "Current version: ${currentversion}"
echo "Please enter a new version number:"
read newversion
echo "Creating version ${newversion}"
sed -i "" "s/${currentversion}/${newversion}/g" package.json

# Compile core logic from ES6 to ES5
echo "Compiling core logic"
npm run compile

# Push updates to GitHub
echo "Pushing changes to GitHub"
echo "Please enter a commit message:"
read cm
git add .
git commit -m "${cm}"
git push origin master
