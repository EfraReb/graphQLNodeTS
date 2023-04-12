import {
    GraphQLID, GraphQLInt,
    GraphQLObjectType,
    GraphQLObjectTypeConfig,
    GraphQLString
} from 'graphql';
import {GraphQLInputObjectType, GraphQLInputObjectTypeConfig} from "graphql/type/definition";
import { ResponseSample } from './ResponseSample';
import { ResponseGeneric } from './ResponseGeneric';

export class Persona extends GraphQLObjectType {
    constructor() {
        super(<GraphQLObjectTypeConfig<any, any>>{
            name: "Persona",
            description: "Objeto de persona",
            fields: {
                id: { type: GraphQLID },
                nombres: { type: GraphQLString },
                primerApellido: { type: GraphQLString },
                segundoApellido: { type: GraphQLString },
                email: { type: GraphQLString },
                telefono: { type: GraphQLString },
                fechaNacimiento: { type: GraphQLString }
            }
        });
    }
}

const persona = new Persona();

export class ResponsePersona extends GraphQLObjectType {
    constructor() {
        super(<GraphQLObjectTypeConfig<any, any>> {
            name: "ResponsePersona",
            fields: {
                internalCode: { type: GraphQLInt },
                message: { type: GraphQLString },
                payload: { type: persona }
            }
        });
    }
}

const responseSample = new ResponseSample();
const responseGeneric = new ResponseGeneric();

export class PersonaQuery extends GraphQLObjectType {
    constructor() {
        super(<GraphQLObjectTypeConfig<any, any>> {
            name: "PersonaQuery",
            fields: {
                contarTodos: {
                    type: responseSample,
                    args: {}
                },
                obtenerTodos: {
                    type: responseGeneric,
                    args: {
                        paginaActual: { type: GraphQLInt },
                        cantidadRegistrosPorPaginas: { type: GraphQLInt }
                    }
                }
            }
        });
    }
}