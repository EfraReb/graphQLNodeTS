
let resolver: Object = {
    contarTodos: async function(args: any, context: any) {
        try {
            const res = {
                internalCode: 200,
                message: "Success",
                payload: "50"
            };
            return res;
        }
        catch (err: any) {
            throw new Error(err);
        }
    },
    obtenerTodos: async function(args: any, context: any){
        try {
            const registros = [{
                id: "12314124124",
                nombres: "Efrain",
                primerApellido: "Rebolledo",
                segundoApellido: "Pizarro",
                email: "efrare09@gmail.com",
                telefono: "51515151",
                fechaDeNacimiento: "1982-02-03T03:00:00.000Z"
            }]
            const page = {
                cantidadRegistrosPorPagina: 1,
                cantidadPaginas: 1,
                paginaActual: 1,
                registros: registros
            }
            const res = {
                internalCode: 200,
                message: "Success",
                payload: page
            };
            return res;
        }
        catch (err: any) {
            throw new Error(err);
        }
    }
}

export const ResolverPersona = resolver;