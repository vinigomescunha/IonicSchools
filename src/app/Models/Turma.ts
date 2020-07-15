export class TurmaModel {

    private colegioId: number;
    private turmaId: number;
    private name: string;

    private constructor(turma: TurmaModel) {
        this.colegioId = turma.colegioId;
        this.turmaId = turma.turmaId;
        this.name = turma.name;
    }

    static build(turma: TurmaModel) {
        if (turma instanceof TurmaModel) {
            return new TurmaModel(turma);
        } else {
            throw new Error('Turma invalida!');
        }
    }
}