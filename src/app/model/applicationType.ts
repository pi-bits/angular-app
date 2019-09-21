
export class ApplicationType {
    private id: string;
    private value: string;

    constructor(private _id: string, private _value: string) {
        this.id = _id;
        this.value = _value;

    }
    getId():string {
        return this.id;
    }
    getValue():string {
        return this.value;
    }

}