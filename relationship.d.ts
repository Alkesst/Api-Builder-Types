export interface IRelationship {
    Identifier: string;
    RightSide: Right;
}

export interface ISide {
    Entity: string;
    Multiplicity: Multiplicity;
}

export interface Right extends ISide {
    PrimaryKeyReferenced: string;
}
// TBD exported in a Javascript File to be used in the mock.
export enum Multiplicity {
    One,
    Multi,
    "Void-Multi"
}
