// Generated by https://quicktype.io
export interface PlaybackData {
  total: number;
  data:  [{ [key: string]: { [key: string]: StreamDetails } }];
  meta:  Meta;
}

export interface StreamList {
  download_hls:                   Streams;
  drm_adaptive_hls:               Streams;
  multitrack_adaptive_hls_v2:     Streams;
  vo_adaptive_hls:                Streams;
  vo_drm_adaptive_hls:            Streams;
  adaptive_hls:                   Streams;
  drm_download_dash:              Streams;
  drm_download_hls:               Streams;
  drm_multitrack_adaptive_hls_v2: Streams;
  vo_drm_adaptive_dash:           Streams;
  adaptive_dash:                  Streams;
  urls:                           Streams;
  vo_adaptive_dash:               Streams;
  download_dash:                  Streams;
  drm_adaptive_dash:              Streams;
}

export interface Streams {
  '':        StreamDetails;
  'en-US'?:  StreamDetails;
  'es-LA'?:  StreamDetails;
  'es-419'?: StreamDetails;
  'es-ES'?:  StreamDetails;
  'pt-BR'?:  StreamDetails;
  'fr-FR'?:  StreamDetails;
  'de-DE'?:  StreamDetails;
  'ar-ME'?:  StreamDetails;
  'ar-SA'?:  StreamDetails;
  'it-IT'?:  StreamDetails;
  'ru-RU'?:  StreamDetails;
  'tr-TR'?:  StreamDetails;
  'hi-IN'?:  StreamDetails;
  'zh-CN'?:  StreamDetails;
  'ko-KR'?:  StreamDetails;
  'ja-JP'?:  StreamDetails;
}

export interface StreamDetails {
  hardsub_locale: Locale;
  url:            string;
  hardsub_lang?:  string;
  audio_lang?:    string;
  type?:          string;
}
export interface Meta {
  media_id:        string;
  subtitles:       Subtitles;
  bifs:            string[];
  versions:        Version[];
  audio_locale:    Locale;
  closed_captions: Record<unknown>;
  captions:        Record<unknown>;
}

export interface Subtitles {
  '':        SubtitleInfo;
  'en-US'?:  SubtitleInfo;
  'es-LA'?:  SubtitleInfo;
  'es-419'?: SubtitleInfo;
  'es-ES'?:  SubtitleInfo;
  'pt-BR'?:  SubtitleInfo;
  'fr-FR'?:  SubtitleInfo;
  'de-DE'?:  SubtitleInfo;
  'ar-ME'?:  SubtitleInfo;
  'ar-SA'?:  SubtitleInfo;
  'it-IT'?:  SubtitleInfo;
  'ru-RU'?:  SubtitleInfo;
  'tr-TR'?:  SubtitleInfo;
  'hi-IN'?:  SubtitleInfo;
  'zh-CN'?:  SubtitleInfo;
  'ko-KR'?:  SubtitleInfo;
  'ja-JP'?:  SubtitleInfo;
}


export interface SubtitleInfo {
  format: string;
  locale: Locale;
  url:    string;
}
export interface Version {
  audio_locale:    Locale;
  guid:            string;
  is_premium_only: boolean;
  media_guid:      string;
  original:        boolean;
  season_guid:     string;
  variant:         string;
}

export enum Locale {
  default = '',
  enUS = 'en-US',
  esLA = 'es-LA',
  es419 = 'es-419',
  esES = 'es-ES',
  ptBR = 'pt-BR',
  frFR = 'fr-FR',
  deDE = 'de-DE',
  arME = 'ar-ME',
  arSA = 'ar-SA',
  itIT = 'it-IT',
  ruRU = 'ru-RU',
  trTR = 'tr-TR',
  hiIN = 'hi-IN',
  zhCN = 'zh-CN',
  koKR = 'ko-KR',
  jaJP = 'ja-JP',
}