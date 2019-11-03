export class Proyect {

    constructor (
        public id: string,
        public name: string,
        public url: string,
        public screenshot: string,
        public year: number,
        public technology: string[],
    ) {}

    getTechnologies() {

        return this.technology.join(' * ');
    }
}