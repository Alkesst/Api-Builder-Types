import { Guid } from "guid-typescript";
import { ProjectType } from "./project";
import { IEntity } from "./entity";

export interface IProjectConfig {
    Identifier: Guid;
    Type: ProjectType;
    Entities: IEntity[];
}
