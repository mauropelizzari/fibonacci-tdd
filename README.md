Fibonacci Sequence
====================================================

TDD experiments with node, mocha and friends..
----------------------------------------------

For testing

`npm test`

For run application

`npm install`

`node bin/fibonacci-exec.js`



For create a portably scripts

`npm install -g`

`fbn`

For start an http server

`npm start`

`curl http://localhost:3000/fibonacci/{number}`

where ``number`` is the number of the elements in the sequence.

For Docker execution

`docker build -t fibonacci-image . `

`docker run -p 8080:80 fibonacci-image`
