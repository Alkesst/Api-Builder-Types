import { Guid } from "guid-typescript";

export interface Relationship {
    Identifier: Guid;
    LeftSide: Left;
    RightSide: Right;
}

export interface Side {
    Entity: Guid;
    Multiplicity: Multiplicity;
}

export interface Right extends Side {
    AttributePrimaryKey: Guid;
}

export interface Left extends Side {
    AttributeForeignKey: Guid;
}

export enum Multiplicity {
    One,
    Multi,
    "Void-Multi"
}