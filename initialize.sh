#!/bin/bash

# $1: contest name
cd $1
# $2: round name
mkdir $2 && cd $2
# $3: file extension

for i in {a..f}; do
  touch $i.$3
  cat ../template.$3 > $i.$3
done

touch input.txt
touch output.txt

cp ../../check$3.sh check$3.sh