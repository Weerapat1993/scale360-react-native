#!/bin/bash

#The following line will print no of argument provided to script
#echo $#
USAGE="npm run core"
destination="./app/Console/templates/core";
source="./src/core/core/";
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;

echo "${green}This command is copy folder ${source} to [core] template ?${reset} ";
while true; do
    read -p "${green}Do you want to copy this folder?${reset} " yn
    case $yn in
        [Yy]* ) 
                if ! [ -d "$destination" ]
                then
                  mkdir $destination
                fi
                cp -R $source $destination; 
                files=( coreActions coreActionTypes coreFunction coreReducer coreSelector index )
                for file in "${files[@]}"
                do
                  echo "${green}create file${reset} ./app/Console/templates/core/${file}.js"
                  perl -i -pe 's/Core/\${name_pascal}/g' ./app/Console/templates/core/${file}.js
                  perl -i -pe 's/core/\${name}/g' ./app/Console/templates/core/${file}.js
                  perl -i -pe 's/CORE/\${name_upper}/g' ./app/Console/templates/core/${file}.js
                done

                tests=( coreActions coreReducer coreSelector )
                for test in "${tests[@]}"
                do
                  echo "${green}create file${reset} ./app/Console/templates/core/test/${test}.test.js"
                  perl -i -pe 's/Core/\${name_pascal}/g' ./app/Console/templates/core/tests/${test}.test.js
                  perl -i -pe 's/core/\${name}/g' ./app/Console/templates/core/tests/${test}.test.js
                  perl -i -pe 's/CORE/\${name_upper}/g' ./app/Console/templates/core/tests/${test}.test.js
                  cp ./app/Console/templates/core/tests/${test}.test.js ./app/Console/templates/core/tests/${test}.js
                  rm ./app/Console/templates/core/tests/${test}.test.js
                done
                break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done