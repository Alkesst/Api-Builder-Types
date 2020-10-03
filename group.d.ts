import { Guid } from "guid-typescript";
import { Entity } from "./entity";

export interface Group {
    Identifier: Guid;
    Name: "";
    Entities: Entity[];
    Coordinates: Coordinates;
}