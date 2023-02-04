import { CollectionPage } from './CollectionPage.ts'
import { Article } from './Article.ts'
import { OrderedCollection } from './OrderedCollection.ts'
import { Image } from './Image.ts'
import { OrderedCollectionPage } from './OrderedCollectionPage.ts'
import { Profile } from './Profile.ts'
import { Tombstone } from './Tombstone.ts'
import { Video } from './Video.ts'
import { Relationship } from './Relationship.ts'
import { Mention } from './Mention.ts'
import { Audio } from './Audio.ts'
import { Place } from './Place.ts'
import { Link } from './Link.ts'
import { Collection } from './Collection.ts'
import { Note } from './Note.ts'
import { Page } from './Page.ts'

export enum ModelType {
	// https://www.w3.org/TR/activitystreams-vocabulary/#types
	Object = 'Object',
	Link = 'Link',
	Activity = 'Activity',
	IntransitiveActivity = 'IntransitiveActivity',
	Collection = 'Collection',
	OrderedCollection = 'OrderedCollection',
	CollectionPage = 'CollectionPage',
	OrderedCollectionPage = 'OrderedCollectionPage',

	Actor = 'Actor', // TODO this is not a type

	// https://www.w3.org/TR/activitystreams-vocabulary/#object-types
	Article = 'Article',
	Audio = 'Audio',
	Document = 'Document',
	Event = 'Event',
	Image = 'Image',
	Note = 'Note',
	Page = 'Page',
	Place = 'Place',
	Profile = 'Profile',
	Relationship = 'Relationship',
	Tombstone = 'Tombstone',
	Video = 'Video',
	Mention = 'Mention',

	// https://www.w3.org/TR/activitystreams-vocabulary/#activity-types
	Accept = 'Accept',
	Add = 'Add',
	Announce = 'Announce',
	Arrive = 'Arrive',
	Block = 'Block',
	Create = 'Create',
	Delete = 'Delete',
	Dislike = 'Dislike',
	Flag = 'Flag',
	Follow = 'Follow',
	Ignore = 'Ignore',
	Invite = 'Invite',
	Join = 'Join',
	Leave = 'Leave',
	Like = 'Like',
	Listen = 'Listen',
	Move = 'Move',
	Offer = 'Offer',
	Question = 'Question',
	Reject = 'Reject',
	Read = 'Read',
	Remove = 'Remove',
	TentativeReject = 'TentativeReject',
	TentativeAccept = 'TentativeAccept',
	Travel = 'Travel',
	Undo = 'Undo',
	Update = 'Update',
	View = 'View',

	// https://www.w3.org/TR/activitystreams-vocabulary/#actor-types
	Application = 'Application',
	Group = 'Group',
	Organization = 'Organization',
	Person = 'Person',
	Service = 'Service',
}

export type AnyCollection = Collection | OrderedCollection
export type AnyObject =
	| Object
	| Article
	| Audio
	| Document
	| Event
	| Image
	| Note
	| Page
	| Place
	| Profile
	| Relationship
	| Tombstone
	| Video
	| AnyCollection

export type DateTime = string | Date
export type LanguageTag = string
export type MediaType = string
export type Duration = string
export type ContextValue = string | Record<string, string>
export type UrlValue = string | Link
export type IdValue = string
export type TypeValue = string
export type DurationValue = Duration
export type ContentValue = string
export type ContentMapValue = Record<string, string>
export type MediaTypeValue = MediaType
export type NameValue = string
export type NameMapValue = Record<string, string>
export type SummaryValue = string
export type SummaryMapValue = Record<string, string>
export type EndTimeValue = DateTime
export type StartTimeValue = DateTime
export type PublishedValue = DateTime
export type UpdatedValue = DateTime
export type RepliesValue = string | AnyCollection
export type RelationshipValue = string | AnyObject
export type IconValue = string | Image | Link
export type ImageValue = string | Image | Link
export type AttachmentValue = string | AnyObject | Link
export type AudienceValue = string | AnyObject | Link
export type InReplyToValue = string | AnyObject | Link
export type LocationValue = string | Place | Link
export type PreviewValue = string | AnyObject | Link
export type ToValue = string | AnyObject | Link
export type BtoValue = string | AnyObject | Link
export type CcValue = string | AnyObject | Link
export type BccValue = string | AnyObject | Link
export type GeneratorValue = string | AnyObject | Link
export type ObjectValue = string | AnyObject | Link
export type AttributedToValue = string | AnyObject | Link | Mention
export type TagValue = string | AnyObject | Link | Mention
export type ActorValue = string | AnyObject | Link
export type TargetValue = string | AnyObject | Link
export type ResultValue = string | AnyObject | Link
export type OriginValue = string | AnyObject | Link
export type InstrumentValue = string | AnyObject | Link
export type OneOfValue = string | AnyObject | Link
export type AnyOfValue = string | AnyObject | Link
export type SubjectValue = string | AnyObject | Link
export type AccuracyValue = number
export type AltitudeValue = number
export type LatitudeValue = number
export type LongitudeValue = number
export type RadiusValue = number
export type UnitsValue = 'cm' | 'feet' | 'inches' | 'km' | 'm' | 'miles' | string
export type ClosedValue = string | AnyObject | Link | DateTime | boolean
export type FormerTypeValue = string
export type DeletedValue = DateTime
export type DescribesValue = string | AnyObject
export type HrefValue = string
export type HreflangValue = LanguageTag
export type RelValue = string
export type HeightValue = number
export type WidthValue = number
export type TotalItemsValue = number
export type CollectionCurrentValue = string | CollectionPage | Link
export type CollectionFirstValue = string | CollectionPage | Link
export type CollectionLastValue = string | CollectionPage | Link
export type CollectionItemsValue = string | CollectionPage | Link
export type CollectionPagePartOfValue = string | Collection | Link
export type CollectionPageNextValue = string | Collection | Link
export type CollectionPagePrevValue = string | Collection | Link
export type OrderedCollectionCurrentValue = string | OrderedCollectionPage | Link
export type OrderedCollectionFirstValue = string | OrderedCollectionPage | Link
export type OrderedCollectionLastValue = string | OrderedCollectionPage | Link
export type OrderedCollectionItemsValue = string | OrderedCollectionPage | Link
export type OrderedCollectionPagePartOfValue = string | OrderedCollection | Link
export type OrderedCollectionPageNextValue = string | OrderedCollection | Link
export type OrderedCollectionPagePrevValue = string | OrderedCollection | Link
export type StartIndexValue = number
export type SourceValue = {
	content: ContentValue
	mediaType?: MediaType
}
export type InboxValue = string | OrderedCollection | Link
export type OutboxValue = string | OrderedCollection | Link
export type FollowingValue = string | Collection | OrderedCollection | Link
export type FollowersValue = string | Collection | OrderedCollection | Link
export type LikedValue = string | Collection | OrderedCollection | Link
export type LikesValue = string | Collection | OrderedCollection | Link
export type SharesValue = string | Collection | OrderedCollection | Link
export type StreamsValue = string | Collection | OrderedCollection | Link
export type PreferredUsernameValue = string
export type PreferredUsernameMapValue = Record<string, string>
export type ProxyUrlValue = string
export type OauthAuthorizationEndpointValue = string
export type OauthTokenEndpointValue = string
export type ProvideClientKeyValue = string
export type SignClientKeyValue = string
export type SharedInboxValue = string
