#!/usr/bin/env bash

# This will replace all instances of a string in folder names, filenames,
# and within files.  Sometimes you have to run it twice, if directory names change.


# Example usage:
# replace_string apple banana

echo $1
echo $2

find ./ -type f -exec sed -i -e "s/$1/$2/g" {} \;  # rename within files

