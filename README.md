## forum-channel-messager

### application with a NodeJS backend and a MySQL database

Project structure:
```
.
├── backend
│   ├── Dockerfile
│   ...
├── db
│   └── password.txt
├── docker-compose.yaml
├── frontend
│   ├── ...
│   └── Dockerfile
└── README.md
```

- todo implement the backend and wrapped it with docker.
- todo integrate grapgl api wit the mini project.
- todo add more detail for the README and comments.
  
[_docker-compose.yaml_](docker-compose.yaml)
```
services:
  backend:
    build: backend
    ...
  db:
    image: mysql:8.0.19
    ...
  frontend:
    ...
```
The compose file defines an application with three services `frontend`, `backend` and `db`.

## Deploy with docker-compose
```
$ docker-compose up -d
```


## Expected result
- Listing containers must show containers running and the port mapping as below:
```
$ docker ps
```

- Stop and remove the containers
```
$ docker-compose down
```