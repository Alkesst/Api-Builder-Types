import { Guid } from "guid-typescript";

export interface IRelationship {
    Identifier: Guid;
    LeftSide: Left;
    RightSide: Right;
}

export interface ISide {
    Entity: Guid;
    Multiplicity: Multiplicity;
}

export interface Right extends ISide {
    AttributePrimaryKey: Guid;
}

export interface Left extends ISide {
    AttributeForeignKey: Guid;
}

export enum Multiplicity {
    One,
    Multi,
    "Void-Multi"
}
