import { TrackMini } from "../Track/trackMini.interface";

export interface TracksResponse {
  data: TrackMini[];
  total: number;
  next?: string;
}
