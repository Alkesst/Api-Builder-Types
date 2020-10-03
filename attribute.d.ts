import { Guid } from 'guid-typescript';

export interface Attribute {
    Identifier: Guid;
    Type: AttributeType;
    Value: string | null;
    IsNullable: boolean;
    DefaultValue: string | null;
    Precision: number | null;
}

export enum AttributeType {
    String,
    Date,
    Bool,
    Numeric
}