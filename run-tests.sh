# !/bin/bash
files=./__test__/*.test.js

for f in $files; do 
node $f; 
done
