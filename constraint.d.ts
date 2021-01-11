import {Guid} from "guid-typescript";

export interface IConstraint {
    Identifier: Guid;
    Type: ConstraintType;
    Attributes: number[];
}

export enum ConstraintType {
    Check,
    PrimaryKey,
    Unique,
    Index
}
