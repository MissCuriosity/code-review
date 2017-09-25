#!/bin/bash
files=$(git diff --cached --name-only | grep -v '.jsx$' | grep '.js$' | tr '\\n' ' ')

# Prevent ESLint help message if no files matched
if [[ $files = "" ]] ; then
  echo $files
  exit 0
fi

echo $files | xargs eslint

rc=$?
if [[ $rc != 0 ]] ; then
  echo "ESLint check failed, commit denied"
  exit $rc
fi

# files=$(git diff --cached --name-only | grep -v '.jsx$' | grep '.js$' | tr '\\n' ' ');
# if [[ -n \"$files\" ]] ; then 
#   eslint $files --config ./.eslintrc.js --quiet $files || (exit 1);
# else exit 0; fi

# files=$(git diff --cached --name-only | grep -v '.jsx$' | grep '.js$' | tr '\\n' ' ');
# if [[ -n \"$files\" ]]; then 
#   eslint --config ./.eslintrc.js --quiet $files || (exit 1)
  
# else 
#   exit 0;
#   fi