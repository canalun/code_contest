#!/bin/bash

g++ $1.cpp
./a.out < input.txt | diff -u output.txt -