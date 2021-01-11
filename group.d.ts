import { Guid } from "guid-typescript";
import { IEntity } from "./entity";
import { ICoordinates } from './coordinates';

export interface IGroup {
    Identifier: Guid;
    Name: string;
    Entities: IEntity[];
    Coordinates: ICoordinates;
}
