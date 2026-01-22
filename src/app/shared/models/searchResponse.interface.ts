import { AlbumMini } from "./Album/albumMini.interface"

export interface SearchResponse{
    data : SearchResult[]
}

export type SearchResult = TrackSearch | ArtistSearch | AlbumSearch;



///Interfaces para track
interface TrackSearch{
    id: number
  readable: boolean
  title: string
  title_short: string
  title_version: string
  link: string
  duration: number
  rank: number
  explicit_lyrics: boolean
  explicit_content_lyrics: number
  explicit_content_cover: number
  preview: string
  md5_image: string
  artist: TrackArtistSearch
  album: AlbumMini
  type: 'track'
}

interface TrackArtistSearch{
    id: number
  name: string
  link: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  tracklist: string
  type: string
}


///Interfaces Artista

interface ArtistSearch{
    id: number
  name: string
  link: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  nb_album: number
  nb_fan: number
  radio: boolean
  tracklist: string
  type: 'artist'
}

///Interface album
interface AlbumSearch{
    id: number
  title: string
  link: string
  cover: string
  cover_small: string
  cover_medium: string
  cover_big: string
  cover_xl: string
  md5_image: string
  genre_id: number
  nb_tracks: number
  record_type: string
  tracklist: string
  explicit_lyrics: boolean
  artist: ArtistAlbumSearch
  type: 'album'
}

interface ArtistAlbumSearch {
  id: number
  name: string
  link: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  tracklist: string
  type: string
}