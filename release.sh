#!/bin/bash
#
# Script to update the version number and push the updates to GitHub

# Release a version update
currentversion=$(cat package.json | grep version | cut -d : -f 2 | sed 's/[ ",]//g')
echo "Current version: ${currentversion}"
IFS='.' read -a versions <<< "$currentversion"
read -p "Is this a [1] patch, [2] minor update, or [3] major update: " answer
case "${answer}" in
  1|[pP][aA][tT][cC][hH])
    let versions[2]+=1
    newversion=$( IFS=$'.'; echo "${versions[*]}" )
    sed -i "" "s/${currentversion}/${newversion}/g" package.json
    ;;
  2|[mM][iI][nN][oO][rR])
    let versions[1]+=1
    newversion=$( IFS=$'.'; echo "${versions[*]}" )
    sed -i "" "s/${currentversion}/${newversion}/g" package.json
    ;;
  3|[mM][aA][jJ][oO][rR])
    let versions[0]+=1
    newversion=$( IFS=$'.'; echo "${versions[*]}" )
    sed -i "" "s/${currentversion}/${newversion}/g" package.json
    ;;
  *)
    echo "Error: Not a recognized response"
    exit 1
esac
echo "New version: ${newversion}"

# Push updates to GitHub
echo "Pushing changes to GitHub..."
read -p "Please enter a commit message: " cm
git add .
git commit -m "${cm}"
git push origin master

# Publish to npm
echo "Publishing to npm..."
npm publish

echo "Successfully released version ${newversion}!"
