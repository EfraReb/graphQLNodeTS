import { GraphQLObjectType, GraphQLObjectTypeConfig, GraphQLString } from "graphql";

//const dateCustom = new DateCustom();

export class ResponsePersonGeneric extends GraphQLObjectType {

    constructor() {
        super(<GraphQLObjectTypeConfig<any, any>> {
            name: "ResponsePersonGeneric",
            fields: {
                nombres: {type: GraphQLString},
                primerApellido: {type: GraphQLString},
                segundoApellido: {type: GraphQLString},
                email: {type: GraphQLString},
                telefono: {type: GraphQLString},
                fechaDeNacimiento: {type: GraphQLString}
            }
        });
    }
}