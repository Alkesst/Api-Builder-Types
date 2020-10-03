import {Guid} from "guid-typescript";

export interface Constraint {
    Identifier: Guid;
    Type: ConstraintType;
    Attributes: number[];
}

export enum ConstraintType {
    CHECK,
    PK,
    UNIQUE,
    INDEX
}
