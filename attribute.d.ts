import { Guid } from 'guid-typescript';

export interface Attribute {
    Identifier: Guid;
    Type: 'string' | 'boolean' | 'number' | 'date';
    Value: string;
}