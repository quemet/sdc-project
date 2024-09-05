# sdc-project

## Setup

```sh
git clone https://github.com/quemet/sdc-project.git
docker build -t db:v1.0.0
docker run --name db -d -p 3306:3306 db:v1.0.0
npm run dev
open localhost:3333
```
