import { Guid } from "guid-typescript";
import { IEntity } from "./entity";
import { ICoordinates } from './coordinates';

export interface Group {
    Identifier: Guid;
    Name: string;
    Entities: IEntity[];
    Coordinates: ICoordinates;
}
