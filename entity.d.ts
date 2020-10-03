import { Guid } from 'guid-typescript';
import { Attribute } from './attribute';
import { Coordinates } from './coordinates';

export interface Entity {
    Identifier: Guid;
    Name: string;
    Relationships: string[];
    Attributes: Attribute[];
    Coordinates: Coordinates;
}