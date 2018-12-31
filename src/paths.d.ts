import { Box } from "./box";
import { FilterT } from "./filter";
import { Matrix } from "./matrix";
import { Path as PathT } from "./path";
export declare type Paths = Array<PathT>;
export declare function boundingBox(p: Paths): Box;
export declare function transform(p: Paths, matrix: Matrix): Paths;
export declare function chop(p: Paths, step: number): Paths;
export declare function filterPaths(p: Paths, f: FilterT): Paths;
export declare function simplify(p: Paths, threshold: number): Paths;
export declare function toSVG(p: Paths, width: number, height: number): string;
