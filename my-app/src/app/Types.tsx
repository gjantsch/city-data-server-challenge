

export interface iFormRecord {
    id: number,
    name: string,
    amount: number,
    status: string
}

export class FormRecord implements iFormRecord {
    id: number;
    name: string;
    amount: number;
    status: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.amount = 0;
        this.status = 'waiting-decision';
    }
}