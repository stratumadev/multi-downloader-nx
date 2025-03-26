// Generated by https://quicktype.io

export interface CrunchySearch {
    total: number;
    data: CrunchySearchData[];
    meta: Record<string, unknown>;
}

export interface CrunchySearchData {
    type: string;
    count: number;
    items: CrunchySearchItem[];
}

export interface CrunchySearchItem {
    title: string;
    images: Images;
    series_metadata?: SeriesMetadata;
    promo_description: string;
    external_id: string;
    slug: string;
    new: boolean;
    slug_title: string;
    channel_id: ChannelID;
    description: string;
    linked_resource_key: string;
    type: ItemType;
    id: string;
    promo_title: string;
    search_metadata: SearchMetadata;
    movie_listing_metadata?: MovieListingMetadata;
    playback?: string;
    streams_link?: string;
    episode_metadata?: EpisodeMetadata;
}

export enum ChannelID {
    Crunchyroll = 'crunchyroll'
}

export interface EpisodeMetadata {
    audio_locale: Locale;
    availability_ends: Date;
    availability_notes: string;
    availability_starts: Date;
    available_date: null;
    available_offline: boolean;
    closed_captions_available: boolean;
    duration_ms: number;
    eligible_region: string[];
    episode: string;
    episode_air_date: Date;
    episode_number: number;
    extended_maturity_rating: Record<unknown>;
    free_available_date: Date;
    identifier: string;
    is_clip: boolean;
    is_dubbed: boolean;
    is_mature: boolean;
    is_premium_only: boolean;
    is_subbed: boolean;
    mature_blocked: boolean;
    maturity_ratings: MaturityRating[];
    premium_available_date: Date;
    premium_date: null;
    season_id: string;
    season_number: number;
    season_slug_title: string;
    season_title: string;
    sequence_number: number;
    series_id: string;
    series_slug_title: string;
    series_title: string;
    subtitle_locales: Locale[];
    upload_date: Date;
    versions: Version[] | null;
    tenant_categories?: string[];
}

export enum Locale {
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
    jaJP = 'ja-JP'
}

export enum MaturityRating {
    Tv14 = 'TV-14',
    TvMa = 'TV-MA'
}

export interface Version {
    audio_locale: Locale;
    guid: string;
    is_premium_only: boolean;
    media_guid: string;
    original: boolean;
    season_guid: string;
    variant: string;
}

export interface Images {
    poster_tall?: Array<Image[]>;
    poster_wide?: Array<Image[]>;
    promo_image?: Array<Image[]>;
    thumbnail?: Array<Image[]>;
}

export interface Image {
    height: number;
    source: string;
    type: ImageType;
    width: number;
}

export enum ImageType {
    PosterTall = 'poster_tall',
    PosterWide = 'poster_wide',
    PromoImage = 'promo_image',
    Thumbnail = 'thumbnail'
}

export interface MovieListingMetadata {
    availability_notes: string;
    available_date: null;
    available_offline: boolean;
    duration_ms: number;
    extended_description: string;
    extended_maturity_rating: Record<unknown>;
    first_movie_id: string;
    free_available_date: Date;
    is_dubbed: boolean;
    is_mature: boolean;
    is_premium_only: boolean;
    is_subbed: boolean;
    mature_blocked: boolean;
    maturity_ratings: string[];
    movie_release_year: number;
    premium_available_date: Date;
    premium_date: null;
    subtitle_locales: any[];
    tenant_categories: string[];
}

export interface SearchMetadata {
    score: number;
}

export interface SeriesMetadata {
    audio_locales: Locale[];
    availability_notes: string;
    episode_count: number;
    extended_description: string;
    extended_maturity_rating: Record<unknown>;
    is_dubbed: boolean;
    is_mature: boolean;
    is_simulcast: boolean;
    is_subbed: boolean;
    mature_blocked: boolean;
    maturity_ratings: MaturityRating[];
    season_count: number;
    series_launch_year: number;
    subtitle_locales: Locale[];
    tenant_categories?: string[];
}

export enum ItemType {
    Episode = 'episode',
    MovieListing = 'movie_listing',
    Series = 'series'
}
