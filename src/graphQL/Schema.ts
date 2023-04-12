import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { PersonaQuery } from "./Schemas/Persona";


export class Query extends GraphQLObjectType {
    constructor() {
        super({
            name: "Query",
            fields: {
                greeting: {
                    type: GraphQLString,
                    description: "Saludo"
                },
                Persona: {
                    type: new PersonaQuery
                }
            }
        })
    }
}

export const schema = new GraphQLSchema({
    query: new Query()
})