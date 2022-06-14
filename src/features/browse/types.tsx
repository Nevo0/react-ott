export interface ListState {
  status: string;
}

export interface MediaList {
  CacheDataValidTo: string;
  SourceType: string;
  Entities: Entities[];
  PageSize: number;
  PageNumber: number;
  TotalCount: number;
}

export interface Entities {
  Id: number;
  Guid: string;
  MediaTypeCode: string;
  MediaTypeDisplayName: string;
  MediaAgeRestrictionValueMin: number;
  MediaAgeRestrictionImageUrl: string;
  Title: string;
  Description: string;
  Year?: number;
  Duration: number;
  IsTrialContentAvailable: boolean;
  AvailableFrom: string;
  Images: {
    Id: number;
    MediaId: number;
    PlatformCode: string;
    ImageTypeCode: string;
    Url: string;
    Width: number;
    Height: number;
  }[];
}
