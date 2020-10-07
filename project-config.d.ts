import { Guid } from "guid-typescript";
import { ProjectType } from "./project";
import { Entity } from "./entity";

export interface ProjectConfig {
    Identifier: Guid;
    Type: ProjectType;
    Entities: Entity[];
}