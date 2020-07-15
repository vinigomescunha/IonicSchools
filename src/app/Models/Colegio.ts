export class Colegio {
    public id: number;
    public name: string;
    private constructor(colegio: Colegio) {
        this.id = colegio.id;
        this.name = colegio.name;
    }
    public static build(colegio: Colegio) {
        if(colegio instanceof Colegio) {
            return new Colegio(colegio);
        } else {
            throw new Error('Colegio Invalido');
        }
    }
}