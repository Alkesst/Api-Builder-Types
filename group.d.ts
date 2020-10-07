import { Guid } from "guid-typescript";
import { Entity } from "./entity";
import { Coordinates } from './coordinates';

export interface Group {
    Identifier: Guid;
    Name: string;
    Entities: Entity[];
    Coordinates: Coordinates;
}