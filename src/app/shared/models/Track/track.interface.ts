import { Album } from "../Album/album.interface"
import { Artist } from "../Artist/artist.interface"
import { ArtistContributor} from "../Artist/artistContributor.interface"

export interface Track {
  id: number
  readable: boolean
  title: string
  title_short: string
  title_version: string
  isrc: string
  link: string
  share: string
  duration: number
  track_position: number
  disk_number: number
  rank: number
  release_date: string
  explicit_lyrics: boolean
  explicit_content_lyrics: number
  explicit_content_cover: number
  preview: string
  bpm: number
  gain: number
  available_countries: string[]
  contributors: ArtistContributor[]
  md5_image: string
  track_token: string
  artist: Artist
  album: Album
  type: string
}