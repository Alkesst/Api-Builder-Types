import { IAttribute } from './attribute';
import { ICoordinates } from './coordinates';
import { IRelationship } from "./relationship";
import { IConstraint } from "./constraint";

export interface IEntity {
    Identifier: string;
    Name: string;
    Relationships: IRelationship[];
    Attributes: IAttribute[];
    Coordinates: ICoordinates;
    Constraints: IConstraint[];
    PK: string[];
}
