var restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');

const knex = require('knex')({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
        filename: "./database.db"
    }
});

async function getClasses(req, res) {
    await knex.select("*").from("classes").then((rows) => { res.send(rows); })
}

async function getSpecInfo(req, res) {
    await knex.select("Role").from("specs").where({ Name: req.query.spec }).then((rows) => { res.send(...rows); })
}

var server = restify.createServer();
const cors = corsMiddleware({
    origins: ['*'],
    allowHeaders: ['Authorization'],
    exposeHeaders: ['*']
})
server.use(restify.plugins.queryParser());
server.pre(cors.preflight)
server.use(cors.actual)
server.name = "WOW Server";

server.get('/classes', getClasses);
server.get('/spec', getSpecInfo);

server.listen(8080, "127.0.0.1", function () {
    console.log('%s listening at %s', server.name, server.url);
});
// final