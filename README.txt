CGITest

Files
index.js
count.js
select.js
sort.js

Dependencies

npm package manger
express module
nodemon module 
body-parser module

npm -v 8.3.1
node -v 16.14.0
VS code v1.65
windows 11, cURL

Description 

The App is using nodejs based on REST, can sort and count words with a given text and display the first 10th most 
frequently used words, the output displays as JSON Array

To run open cmd:

curl -H "Content-type: text/plain" -X "POST" -d "Banan Äpple Katt Hund Banan Hund Katt Hund" http://localhost:3000/count

Output 

{"Hund":3,"Banan":2,"Katt":2,"Äpple":1}

