export interface TMovie {
  [x: string]: any;
  genre_id: number[] | null;
  _id: string | null;
  description: string | null;
  name: string | null;
  dateOfRelease: string | null;
  pictureLink: string | null;
  __v: number | null;
}

export interface Action {
  value: TMovie;
  type: string;
}
