# Slightly modified from
# https://www.caktusgroup.com/blog/2017/03/14/production-ready-dockerfile-your-python-django-app/
#FROM python:3.6-alpine
FROM python:3.6
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Copy in your requirements file
WORKDIR /backend

RUN apt-get update && apt-get install -y curl \
  build-essential \
  libpq-dev

ADD requirements.txt /backend/
RUN pip install -U -r requirements.txt


# Install build deps, then run `pip install`, then remove unneeded build deps all in a single step. Correct the path to your production requirements file, if needed.
# RUN set -ex \
#   && apk add --no-cache --virtual .build-deps \
#   gcc \
#   make \
#   tzdata \
#   libc-dev \
#   musl-dev \
#   linux-headers \
#   pcre-dev \
#   postgresql-dev \
#   && cp /usr/share/zoneinfo/America/Los_Angeles /etc/localtime \
#   && echo "America/Los_Angeles" >  /etc/timezone \
#   && python3.6 -m venv /venv \
#   && /venv/bin/pip install -U pip \
#   && LIBRARY_PATH=/lib:/usr/lib /bin/sh -c "/venv/bin/pip install --no-cache-dir -r requirements.txt" \
#   && runDeps="$( \
#   scanelf --needed --nobanner --recursive /venv \
#   | awk '{ gsub(/,/, "\nso:", $2); print "so:" $2 }' \
#   | sort -u \
#   | xargs -r apk info --installed \
#   | sort -u \
#   )" \
#   && apk add --virtual .python-rundeps $runDeps \
#   && apk del .build-deps

# Copy your application code to the container (make sure you create a .dockerignore file if any large files or directories should be excluded)

# COPY /backend /backend

# ADD . /backend/

EXPOSE 3000


