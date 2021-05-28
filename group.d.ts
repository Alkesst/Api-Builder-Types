import { IEntity } from "./entity";
import { ICoordinates } from './coordinates';

export interface IGroup {
    Identifier: string;
    Name: string;
    Entities: IEntity[];
    Coordinates: ICoordinates;
}
