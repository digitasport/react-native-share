export declare enum Social {
    Facebook = "facebook",
    FacebookStories = "facebookstories",
    Pagesmanager = "pagesmanager",
    Twitter = "twitter",
    Whatsapp = "whatsapp",
    Whatsappbusiness = "whatsappbusiness",
    Instagram = "instagram",
    InstagramStories = "instagramstories",
    Googleplus = "googleplus",
    Email = "email",
    Pinterest = "pinterest",
    Linkedin = "linkedin",
    Sms = "sms",
    Telegram = "telegram",
    Snapchat = "snapchat",
    Messenger = "messenger"
}
export declare enum ShareAsset {
    BackgroundImage = "shareBackgroundImage",
    BackgroundVideo = "shareBackgroundVideo",
    StickerImage = "shareStickerImage",
    BackgroundAndStickerImage = "shareBackgroundAndStickerImage"
}
export interface LinkMetadata {
    originalUrl?: string;
    url?: string;
    title?: string;
    icon?: string;
    image?: string;
    remoteVideoUrl?: string;
    video?: string;
}
export interface ActivityItem {
    type: 'text' | 'url';
    content: string;
}
export interface ActivityItemSource {
    placeholderItem: ActivityItem;
    item: {
        [key in ActivityType]?: ActivityItem | null | undefined;
    };
    subject?: {
        [key in ActivityType]?: string;
    };
    dataTypeIdentifier?: {
        [key in ActivityType]?: string;
    };
    thumbnailImage?: {
        [key in ActivityType]?: string;
    };
    linkMetadata?: LinkMetadata;
}
interface BaseShareSingleOptions {
    url?: string;
    type?: string;
    filename?: string;
    message?: string;
    title?: string;
    subject?: string;
    email?: string;
    recipient?: string;
    social: Exclude<Social, Social.FacebookStories | Social.InstagramStories>;
    forceDialog?: boolean;
}
interface BaseSocialStoriesShareSingleOptions extends Omit<BaseShareSingleOptions, 'social'> {
    backgroundImage?: string;
    stickerImage?: string;
    backgroundBottomColor?: string;
    backgroundTopColor?: string;
    attributionURL?: string;
    backgroundVideo?: string;
}
export interface InstagramStoriesShareSingleOptions extends BaseSocialStoriesShareSingleOptions {
    social: Social.InstagramStories;
}
export interface FacebookStoriesShareSingleOptions extends BaseSocialStoriesShareSingleOptions {
    social: Social.FacebookStories;
    method: Exclude<ShareAsset, ShareAsset.BackgroundVideo>;
    appId: string;
}
export declare type ShareSingleOptions = BaseShareSingleOptions | InstagramStoriesShareSingleOptions | FacebookStoriesShareSingleOptions;
export interface ShareOptions {
    message?: string;
    title?: string;
    url?: string;
    urls?: string[];
    type?: string;
    subject?: string;
    email?: string;
    recipient?: string;
    excludedActivityTypes?: ActivityType[];
    exclusiveActivityTypes?: ActivityTypes[];
    failOnCancel?: boolean;
    showAppsToView?: boolean;
    filename?: string;
    filenames?: string[];
    saveToFiles?: boolean;
    activityItemSources?: ActivityItemSource[];
}
export declare type ActivityType = 'default' | 'addToReadingList' | 'airDrop' | 'assignToContact' | 'copyToPasteBoard' | 'mail' | 'message' | 'openInIBooks' | 'postToFacebook' | 'postToFlickr' | 'postToTencentWeibo' | 'postToTwitter' | 'postToVimeo' | 'postToWeibo' | 'print' | 'saveToCameraRoll' | 'markupAsPDF';

export declare type ActivityTypes = 'com.instagram.android'| 'com.facebook.katana' | 'com.zhiliaoapp.musically';

export interface ShareSingleResult {
    message: string;
    success: boolean;
}
export interface ShareOpenResult extends ShareSingleResult {
    dismissedAction?: boolean;
}
export interface IsPackageInstalledResult {
    message: string;
    isInstalled: boolean;
}
export {};
