## Express REST API to get the top 5 cat breeds.

## Application can be tested using a API Client.

## http://localhost:8080/cats?category=<category>

## category [dog_friendly, child_friendly, stranger_friendly]

## Run Docker Image

1. docker build . -t catapiassessment
2. docker run -p 8080:8080 catapiassessment

## Run project manually

1. install node modules -> npm install / yarn install
2. run application -> npm start / yarn start

## Run tests

1. yarn test

## thecarapi.com access token is stored in .env file. It's not a best practice to upload the .env file to the repository. It should be created locally via a script. As this is a test project .env was uploaded to the repository.
