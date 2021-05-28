export interface IConstraint {
    Identifier: string;
    Type: ConstraintType;
    Attributes: number[];
}

export enum ConstraintType {
    Check,
    PrimaryKey,
    Unique,
    Index
}
