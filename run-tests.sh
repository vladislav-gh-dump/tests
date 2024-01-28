# !/bin/bash
files=./tests/*.test.js

for f in $files; do 
node $f; 
done
