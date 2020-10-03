import { Guid } from 'guid-typescript';
import { Attribute } from './attribute';
import { Coordinates } from './coordinates';
import {Relationship} from "./relationship";
import {Constraint} from "./constraint";

export interface Entity {
    Identifier: Guid;
    Name: string;
    Relationships: Relationship[];
    Attributes: Attribute[];
    Coordinates: Coordinates;
    Constraints: Constraint[];
}