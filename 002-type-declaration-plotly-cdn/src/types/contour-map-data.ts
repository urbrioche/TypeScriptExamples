export interface GridData {
    x: number[];
    y: number[];
    z: (number | string)[][];
}

export interface Coordinate {
    x: number;
    y: number;
    z: number;
}

export interface ContourMapData {
    gridData: GridData;
    points: Coordinate[];
}
