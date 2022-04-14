FROM python:3.9.5
ENV PYTHONUNBUFFERED=1

WORKDIR /src

COPY ./requirements.txt /src/
RUN pip install --no-cache-dir  -r requirements.txt

COPY ./src /src/
EXPOSE 3002
CMD gunicorn --bind 0.0.0.0:3002 wsgi:flask_app

