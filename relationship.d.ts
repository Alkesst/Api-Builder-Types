import { Guid } from "guid-typescript";

export interface IRelationship {
    Identifier: Guid;
    RightSide: Right;
}

export interface ISide {
    Entity: Guid;
    Multiplicity: Multiplicity;
}

export interface Right extends ISide {
    PrimaryKeyReferenced: Guid;
}
// TBD exported in a Javascript File to be used in the mock.
export enum Multiplicity {
    One,
    Multi,
    "Void-Multi"
}
