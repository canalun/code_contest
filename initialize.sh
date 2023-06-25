#!/bin/bash

# $1: contest name
cd $1
# $2: round name
mkdir $2 && cd $2

for i in {a..f}; do
  touch $i.js
done

touch input.txt
touch output.txt

cp ../../check.sh check.sh