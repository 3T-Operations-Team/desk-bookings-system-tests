FROM mongo

COPY ./init.json /init.json

CMD mongoimport --host mongodb --db cicd --collection users --type json --file init.json --jsonArray
