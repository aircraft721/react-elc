FROM python:3.6-alpine

RUN apk update
RUN pip install --no-cache-dir pipenv

WORKDIR /usr/src/app
COPY Pipfile Pipfile.lock bootstrap.sh ./
COPY app ./app

RUN pipenv install

EXPOSE 5000
ENTRYPOINT ["/usr/src/app/bootstrap.sh"]