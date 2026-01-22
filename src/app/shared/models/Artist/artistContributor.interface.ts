export interface ArtistTrack {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: string;
}

export interface ArtistContributor extends ArtistTrack {
  share: string;
  role: string;
}
