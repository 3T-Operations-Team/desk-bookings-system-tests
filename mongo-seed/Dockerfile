FROM mongo

COPY ./init.json /init.json

CMD mongoimport --host mongodb --db ${MONGO_DBNAME} --collection users --type json --file init.json --jsonArray
