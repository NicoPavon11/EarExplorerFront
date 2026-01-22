import { chartArtist } from "./Artist/chartArtists.interface";

export interface chartArtistResponse{
    data : chartArtist[],
    total : string
}