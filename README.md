```sh
$ sudo docker image build -t pokenea-app .
$ sudo docker container run -d --name pokenea-docker -p 80:80 pokenea-app
$ git pull
$ sudo docker container rm -f pokenea-docker
```