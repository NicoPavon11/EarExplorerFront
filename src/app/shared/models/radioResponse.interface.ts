import { Radio } from "./radios.interface";
import { RadioTrack } from "./radioTrack.interface";

export interface RadioResponse{
    data : RadioTrack[]
}

export interface RadioDataResponse{
    data : Radio[]
}