#!/bin/bash

node $1.js < input.txt | diff -u output.txt -