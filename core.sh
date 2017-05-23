#!/bin/bash

#The following line will print no of argument provided to script
#echo $#
USAGE="npm run core <source>"
destination="./app/Console/templates/core";
red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;


if [ "$#" -lt "1" ]
then
  echo "\n${red} error: missing required argument \`source\`\n"
  echo "${green} --- Helper ---";
  echo " usage : ${USAGE}${reset}\n";
else
  source=$1;
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
                  break;;
          [Nn]* ) exit;;
          * ) echo "Please answer yes or no.";;
      esac
  done
fi

