import { UserModel } from './UserModel';

export class InfoModel {
    created: Date;
    updated: Date;
    owner: UserModel;

    constructor(created = new Date(), updated = new Date()) {
        this.created = created;
        this.updated = updated;
    }
}
