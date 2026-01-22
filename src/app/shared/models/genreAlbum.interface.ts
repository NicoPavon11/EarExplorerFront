export interface Genres {
  data: genreData[]
}

export interface genreData {
  id: number
  name: string
  picture: string
  type: string
}