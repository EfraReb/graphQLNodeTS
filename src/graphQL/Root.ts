import { ResolverPersona } from "./Resolvers/Persona";

const resolverObj: Object = {
    greeting: () => 'Hello world!',
    Persona: ResolverPersona
}

export const root = resolverObj;