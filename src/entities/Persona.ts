export class Persona {

    private id!: number;
    private nombres!: string;
    private primerApellido!: string;
    private segundoApellido!: string;
    private fechaNacimiento!: Date;
    private email!: string;
    private telefono!: string;

    get Id(): number {
        return this.id;
    }
 
    set Id(value: number) {
        this.id = value;
    }
 
    get Nombres(): string {
        return this.nombres;
    }
 
    set Nombres(value: string) {
        this.nombres = value;
    }
 
    get PrimerApellido(): string {
        return this.primerApellido;
    }
 
    set PrimerApellido(value: string) {
        this.primerApellido = value;
    }
 
    get SegundoApellido(): string {
        return this.segundoApellido;
    }
 
    set SegundoApellido(value: string) {
        this.segundoApellido = value;
    }
 
    get FechaNacimiento(): Date {
        return this.fechaNacimiento;
    }
 
    set FechaNacimiento(value: Date) {
        this.fechaNacimiento = value;
    }
 
    get Email(): string {
        return this.email;
    }
 
    set Email(value: string) {
        this.email = value;
    }
 
    get Telefono(): string {
        return this.telefono;
    }
 
    set Telefono(value: string) {
        this.telefono = value;
    }
}