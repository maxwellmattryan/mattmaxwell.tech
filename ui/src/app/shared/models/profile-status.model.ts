import { Deserializable } from '@app/shared/models/deserializable.model';

export class ProfileStatus implements Deserializable {
    constructor(partial: Partial<ProfileStatus>) {
        Object.assign(this, partial);
    }

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    id?: number;

    status: string;
}
