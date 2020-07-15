export class Turma {

    private colegioId: number;
    private turmaId: number;
    private name: string;

    private constructor(turma: Turma) {
        this.colegioId = turma.colegioId;
        this.turmaId = turma.turmaId;
        this.name = turma.name;
    }

    static build(turma: Turma) {
        if (turma instanceof Turma) {
            return new Turma(turma);
        } else {
            throw new Error('Turma invalida!');
        }
    }
}