import { Guid } from "guid-typescript";
import { ProjectType } from "./project";
import { IEntity } from "./entity";

export interface ProjectConfig {
    Identifier: Guid;
    Type: ProjectType;
    Entities: IEntity[];
}
