import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLObjectTypeConfig } from "graphql";
import { ResponsePersonGeneric } from "./ResponsePersonaGeneric";

const respGeneric = new ResponsePersonGeneric();

export class PageGeneric extends GraphQLObjectType {

    constructor() {
        super(<GraphQLObjectTypeConfig<any, any>> {
            name: "PageGeneric",
            fields: {
                paginaActual: { type: GraphQLInt },
                cantidadRegistrosPorPagina: { type: GraphQLInt },
                cantidadPaginas: { type: GraphQLInt },
                registros: { type: GraphQLList(respGeneric) }
            }
        });
    }
}