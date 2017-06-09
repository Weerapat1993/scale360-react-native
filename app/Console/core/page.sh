#!/bin/bash

#The following line will print no of argument provided to script
#echo $#
USAGE="npm run core"
destination="./app/Console/templates/pages";
source="./src/views/pages/core/";
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;

echo "${green}This command is copy folder ${source} to [pages] template ?${reset} ";
while true; do
    read -p "${green}Do you want to copy this folder?${reset} " yn
    case $yn in
        [Yy]* ) 
                if ! [ -d "$destination" ]
                then
                  mkdir $destination
                fi
                cp -R $source $destination; 
                files=( index styles Core CoreForm CoreList CoreItem )
                for file in "${files[@]}"
                do
                  echo "${green}create file${reset} ./app/Console/templates/pages/${file}.js"
                  perl -i -pe 's/Core/\${name_pascal}/g' ./app/Console/templates/pages/${file}.js
                  perl -i -pe 's/core/\${name}/g' ./app/Console/templates/pages/${file}.js
                  perl -i -pe 's/CORE/\${name_upper}/g' ./app/Console/templates/pages/${file}.js
                done
                tests=( Core CoreForm CoreList CoreItem )
                for test in "${tests[@]}"
                do
                  echo "${green}create file${reset} ./app/Console/templates/pages/test/${test}.test.js"
                  perl -i -pe 's/Core/\${name_pascal}/g' ./app/Console/templates/pages/tests/${test}.test.js
                  perl -i -pe 's/core/\${name}/g' ./app/Console/templates/pages/tests/${test}.test.js
                  perl -i -pe 's/CORE/\${name_upper}/g' ./app/Console/templates/pages/tests/${test}.test.js
                  cp ./app/Console/templates/pages/tests/${test}.test.js ./app/Console/templates/pages/tests/${test}.js
                  rm ./app/Console/templates/pages/tests/${test}.test.js
                done

                echo "\n${green}please edit file path in [pages] templates \n ${reset}"
                echo " ./app/Console/templetes/pages/Core.js"
                echo "${green}import { \${name}Actions } from '../../../core/\${name}'\n ${reset}"
                echo " ./app/Console/templetes/pages/CoreForm.js"
                echo "${green}import { \${name}Validation } from '../../../core/form/\${name}Validation'\n ${reset}"
                break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done