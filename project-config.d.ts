import { ProjectType } from "./project";
import { IEntity } from "./entity";

export interface IProjectConfig {
    Identifier: string;
    Type: ProjectType;
    Entities: IEntity[];
    Description?: string;
}
