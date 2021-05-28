export interface IProject {
    Identifier: string;
    Name: string;
    Description: string;
    Type: ProjectType;
}

export enum ProjectType {
    Relational, NoRelational
}
