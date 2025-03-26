// Generated by https://quicktype.io

export interface EpisodeData {
    id: number;
    title: string;
    mediaDict: { [key: string]: string };
    episodeSlug: string;
    starRating: number;
    parent: EpisodeDataParent;
    number: string;
    description: string;
    filename: string;
    seriesBanner: string;
    media: Media[];
    externalItemId: string;
    contentId: string;
    metaItems: MetaItems;
    thumb: string;
    type: Type;
    default: { [key: string]: Default };
    published: boolean;
    versions: VersionClass[];
    mediaCategory: string;
    order: number;
    seriesVersions: any[];
    source: Source;
    ids: EpisodeDataIDS;
    runtime: string;
    siblings: PreviousSeasonEpisode[];
    seriesTitle: string;
    seriesSlug: string;
    next: Next;
    previousSeasonEpisode: PreviousSeasonEpisode;
    seasonTitle: string;
    quality: Quality;
    ratings: Array<string[]>;
    languages: TitleElement[];
    releaseDate: string;
    historicalSelections: HistoricalSelections;
    userRating: UserRating;
}

export interface Default {
    items: DefaultItem[];
}

export interface DefaultItem {
    languages: string[];
    territories: string[];
    version: null;
    value: Value[];
    devices: any[];
}

export interface Value {
    name: MetaType;
    value: string;
    label: Label;
}

export enum Label {
    Rating = 'Rating',
    RatingSystem = 'Rating System',
    ReleaseDate = 'Release Date',
    Synopsis = 'Synopsis',
    SynopsisType = 'Synopsis Type'
}

export enum MetaType {
    Rating = 'rating',
    RatingSystemType = 'RatingSystemType',
    ReleaseDate = 'release-date',
    Synopsis = 'synopsis',
    Synopsistype = 'synopsistype',
    VideoRatingType = 'VideoRatingType'
}

export interface HistoricalSelections {
    version: string;
    language: string;
}

export interface EpisodeDataIDS {
    externalShowId: string;
    externalSeasonId: string;
    externalEpisodeId: string;
}

export enum TitleElement {
    Empty = '',
    English = 'English'
}

export interface Media {
    id: number;
    title: string;
    experienceType: string;
    created: string;
    createdBy: string;
    itemFieldData: Next;
    keyPath: string;
    filename: string;
    complianceStatus: null;
    events: any[];
    clients: string[];
    qcStatus: null;
    qcStatusDate: null;
    image: string;
    thumb: string;
    ext: string;
    avails: Avail[];
    version: string;
    startTimecode: null;
    endTimecode: null;
    versionId: string;
    mediaType: string;
    status: string;
    languages: LanguageClass[];
    territories: any[];
    devices: any[];
    keyType: string;
    purpose: null;
    externalItemId: null | string;
    proxyId: null;
    externalDbId: null;
    mediaChildren: MediaChild[];
    isDefault: boolean;
    parent: MediaChildParent;
    filePath: null | string;
    mediaInfo: Next;
    type: string;
    approved: boolean;
    mediaKey: string;
    itemFields: any[];
    source: Source;
    fieldData: Next;
    sourceId: null | string;
    timecodeOverride: null;
    seriesTitle: string;
    episodeTitle: string;
    genre: any[];
    txDate: string;
    description: string;
    synopsis: string;
    resolution: null;
    restrictedAccess: boolean;
    createdById: string;
    userIdsWithAccess: any[];
    runtime?: number;
    language?: TitleElement;
    purchased: boolean;
}

export interface Avail {
    id: number;
    description: string;
    endDate: string;
    startDate: string;
    ids: AvailIDS;
    originalAirDate: null;
    physicalReleaseDate: null;
    preorderDate: null;
    language: TitleElement;
    territory: string;
    territoryCode: string;
    license: string;
    parentAvail: null;
    item: number;
    version: string;
    applyToLevel: null;
    availLevel: string;
    availDisplayCode: string;
    availStatus: string;
    bundleOnly: boolean;
    contentOwnerOrganization: string;
    currency: null;
    price: null;
    purchase: string;
    priceValue: string;
    resolutionFormat: null;
    runtimeMilliseconds: null;
    seasonOrEpisodeNumber: null;
    tmsid: null;
    deviceList: string;
    tvodSku: null;
}

export interface AvailIDS {
    externalSeasonId: string;
    externalAsianId: null;
    externalShowId: string;
    externalEpisodeId: string;
    externalEnglishId: string;
    externalAlphaId: string;
}

export type Next = Record<string, unknown>;

export interface LanguageClass {
    code: string;
    id: number;
    title: TitleElement;
}

export interface MediaChild {
    id: number;
    title: string;
    experienceType: string;
    created: string;
    createdBy: string;
    itemFieldData: Next;
    keyPath: null;
    filename: string;
    complianceStatus: null;
    events: any[];
    clients: string[];
    qcStatus: null;
    qcStatusDate: null;
    image: string;
    ext: string;
    avails: any[];
    version: string;
    startTimecode: null;
    endTimecode: null;
    versionId: string;
    mediaType: string;
    status: string;
    languages: LanguageClass[];
    territories: any[];
    devices: any[];
    keyType: string;
    purpose: null;
    externalItemId: string;
    proxyId: null;
    externalDbId: null;
    mediaChildren: any[];
    isDefault: boolean;
    parent: MediaChildParent;
    filePath: string;
    mediaInfo: MediaInfo;
    type: string;
    approved: boolean;
    mediaKey: null;
    itemFields: any[];
    source: Source;
    fieldData: Next;
    sourceId: null;
    timecodeOverride: null;
    seriesTitle: string;
    episodeTitle: string;
    genre: any[];
    txDate: string;
    description: string;
    synopsis: string;
    resolution: null | string;
    restrictedAccess: boolean;
    createdById: string;
    userIdsWithAccess: any[];
    language: TitleElement;
}

export interface MediaInfo {
    imageAspectRatio: null | string;
    format: string;
    scanMode: null | string;
    burnedInSubtitleLanguage: string;
    screenAspectRatio: null | string;
    subtitleFormat: null | string;
    subtitleContent: null | string;
    frameHeight: number | null;
    frameWidth: number | null;
    video: Video;
}

export interface Video {
    codecId: null | string;
    container: null | string;
    encodingRate: number | null;
    frameRate: null | string;
    height: number | null;
    width: number | null;
    duration: number | null;
    bitRate: number | null;
}

export interface MediaChildParent {
    title: string;
    type: string;
    catalogParent: CatalogParent;
    slug: string;
    grandparentId: number;
    id: number;
}

export interface CatalogParent {
    id: number;
    title: string;
}

export enum Source {
    Dbb = 'dbb'
}

export interface MetaItems {
    items: Items;
    filters: Filters;
}

export interface Filters {
    territory: any[];
    language: any[];
}

export interface Items {
    'release-date': AnimationProductionStudio;
    rating: AnimationProductionStudio;
    synopsis: AnimationProductionStudio;
    'animation-production-studio': AnimationProductionStudio;
}

export interface AnimationProductionStudio {
    items: AnimationProductionStudioItem[];
    label: string;
    id: number;
    slug: string;
}

export interface AnimationProductionStudioItem {
    id: number;
    metaType: MetaType;
    metaTypeId: string;
    client: null;
    languages: TitleElement;
    territories: string;
    devices: string;
    isDefault: boolean;
    value: Value[];
    approved: boolean;
    version: null;
    source: Source;
}

export interface EpisodeDataParent {
    seasonId: number;
    seasonNumber: string;
    title: string;
    titleSlug: string;
    titleType: string;
    titleId: number;
}

export interface PreviousSeasonEpisode {
    seasonTitle?: string;
    mediaCategory: Type;
    thumb: string;
    title: string;
    image: string;
    number: string;
    id: number;
    version: string[];
    order: number;
    slug: string;
    season?: number;
    languages?: TitleElement[];
}

export enum Type {
    Episode = 'episode',
    Ova = 'ova'
}

export interface Quality {
    quality: string;
    height: number;
}

export interface UserRating {
    overall: number;
    ja: number;
    eng: number;
}

export interface VersionClass {
    compliance_approved: boolean;
    title: string;
    version_id: string;
    is_default: boolean;
    runtime: string;
    external_id: string;
    id: number;
}
