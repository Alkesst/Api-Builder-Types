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
    string, date, bool, numeric
}