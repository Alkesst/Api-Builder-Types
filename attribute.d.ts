import { Guid } from 'guid-typescript';

export interface IAttribute {
    Identifier: Guid;
    Name: string;
    Type: AttributeType;
    IsNullable: boolean;
    DefaultValue?: string | null;
    Precision?: number | null;
}

export enum AttributeType {
    String,
    Date,
    Bool,
    Numeric
}
