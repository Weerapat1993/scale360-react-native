#!/bin/bash

#The following line will print no of argument provided to script
#echo $#
USAGE="npm run make:page <name>"
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;
CHECK=0;

if ! [ "$#" -lt "1" ]
then
  if [ -z "${CORE}" ]; then
    export CORE=$1;
  fi
#  directory=( ./src ./src/views ./src/views/pages ./src/views/pages/${CORE} )
#  for dir in "${directory[@]}"
#  do
#    if ! [ -d "$dir" ]
#    then
#    	mkdir ${dir}
#    fi
#  done
  name_upper=$(echo $CORE | tr 'a-z' 'A-Z');
  name_pascal=$(echo $CORE | tr '[:lower:]' '[:upper:]' <<< ${CORE:0:1})${CORE:1};

  # File Directory #
  directory=( ./src ./src/views ./src/views/pages ./src/views/pages/${CORE} )
  for dir in "${directory[@]}"
  do
    if ! [ -d "$dir" ]
    then
    	mkdir ${dir}
    fi
  done

  # Files Pages #
  files=( index styles )
  for file in "${files[@]}"
  do
    if ! [ -e "./src/views/pages/${CORE}/${file}.js" ]
    then
      CHECK=1;
      sh ./app/Console/build.sh ./app/Console/templates/pages/${file}.js ./src/views/pages/${CORE}/${file}.js
    fi
  done

  # Files Pages #
  files=( Form Item )
  for file in "${files[@]}"
  do
    if ! [ -e "./src/views/pages/${CORE}/${CORE}${file}.js" ]
    then
      CHECK=1;
      sh ./app/Console/build.sh ./app/Console/templates/pages/Page${file}.js ./src/views/pages/${CORE}/${name_pascal}${file}.js
    fi
  done

  if [ $CHECK -eq 0 ]
  then
    echo "${green} Page : ${CORE} is exists. ${reset}";
  else
    echo "\n Plaese setting config\n"
    echo " - ./src/views/routes.js \n"
    echo "\t ${red}import${reset} ${name_pascal} ${red}from${reset} './pages/${CORE}' \n"
    echo "\t <${red}Route${green} name${reset}='/${CORE}'${green} component${reset}={${name_pascal}}${green} title${reset}='${name_pascal}'${green} schema${reset}='default' /> \n"
  fi
fi
