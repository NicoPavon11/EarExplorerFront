import { AlbumArtist } from "../Artist/albumArtist.interface";
import { ArtistContributor } from "../Artist/artistContributor.interface";
import { Genres } from "../genreAlbum.interface";
import { AlbumTrackArtist } from "../Track/AlbumTrackArtist.interface";

export interface Album {
  id: number;
  title: string;
  link: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  genre_id: number;
  fans: number;
  release_date: string;
  record_type: string;
  tracklist: string;
  explicit_lyrics: boolean;
  type: string;
}

export interface AlbumComplete extends Album {
  upc: string;
  share: string;
  genres: Genres;
  label: string;
  nb_tracks: number;
  duration: number;
  fans: number;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  contributors: ArtistContributor[];
  artist: AlbumArtist;
  tracks: AlbumTrackArtist;
}
/// upc , share, nbtracks,duration ,genres[data],label,duration avaiable,explicitcontent x2,contributors,artist,tracks[]
