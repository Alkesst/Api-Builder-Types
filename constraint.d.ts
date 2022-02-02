export interface IConstraint {
    Identifier: string;
    Type: ConstraintType;
    Attributes: string[];
}

export enum ConstraintType {
    Check,
    PrimaryKey,
    Unique,
    Index
}
