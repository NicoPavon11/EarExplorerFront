import { AlbumMini } from "../Album/albumMini.interface"
import { ArtistMini } from "../Artist/artistMini.interface"

export interface AlbumTrackArtist {
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
  artist: ArtistMini
  album: AlbumMini
  type: string
}