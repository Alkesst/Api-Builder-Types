export interface IAttribute {
    Identifier: string;
    Name: string;
    Type: AttributeType;
    IsMandatory: boolean;
    DefaultValue?: string | null;
    Precision?: number | null;
}

export enum AttributeType {
    String,
    Date,
    Bool,
    Numeric
}
