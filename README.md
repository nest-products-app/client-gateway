## Client-Gateway

Is the communication point beetwen our clients and services.
Is the owner of receive request and send them to the several services and return the
response to the client.

## Dev

1. Clone the repository
2. Install dependencies
3. Create `.env` file based on the `env.template` file
4. You need to have all the microservices we are to consume on
5. Run `npm run start:dev`

## Nats

```
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```
