import { Guid } from "guid-typescript";

export interface Project {
    Identifier: Guid;
    Name: string;
    Description: string;
    Type: ProjectType;
}

export enum ProjectType {
    Relational, NoRelational
}