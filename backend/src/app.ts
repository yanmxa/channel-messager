import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql"
import * as dotenv from "dotenv";
import { RestRouter, GraphglRouter } from "./route/forum_route";
dotenv.config();

const app = express();

app.use('/graphgl', GraphglRouter)
app.use('/rest', RestRouter);

app.listen(process.env.PORT, () => {
    console.log("Server Running on Port ", process.env.PORT)
})