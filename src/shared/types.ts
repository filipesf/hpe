export interface Homes {
  total_count: number;
  results: Home[];
}

export interface Home {
  id: string;
  listing_url: string;
  scrape_id: string;
  last_scraped: Date;
  name: string;
  summary: null | string;
  space: null | string;
  description: string;
  experiences_offered: ExperiencesOffered;
  neighborhood_overview: null | string;
  notes: null | string;
  transit: null | string;
  access: null | string;
  interaction: null | string;
  house_rules: null | string;
  thumbnail_url: null | string;
  medium_url: null | string;
  picture_url: PictureURL;
  xl_picture_url: null | string;
  host_id: string;
  host_url: string;
  host_name: string;
  host_since: Date;
  host_location: string;
  host_about: null | string;
  host_response_time: HostResponseTime | null;
  host_response_rate: number | null;
  host_acceptance_rate: null;
  host_thumbnail_url: string;
  host_picture_url: string;
  host_neighbourhood: Neighbourhood | null;
  host_listings_count: number;
  host_total_listings_count: number;
  host_verifications: HostVerification[];
  street: string;
  neighbourhood: Neighbourhood | null;
  neighbourhood_cleansed: NeighbourhoodCleansed;
  neighbourhood_group_cleansed: null;
  city: City;
  state: string;
  zipcode: null | string;
  market: City | null;
  smart_location: SmartLocation;
  country_code: CountryCode;
  country: Country;
  latitude: string;
  longitude: string;
  property_type: PropertyType;
  room_type: RoomType;
  accommodates: number;
  bathrooms: number;
  bedrooms: number;
  beds: number;
  bed_type: BedType;
  amenities: string[];
  square_feet: number | null;
  price: number;
  weekly_price: number | null;
  monthly_price: number | null;
  security_deposit: number | null;
  cleaning_fee: number | null;
  guests_included: number;
  extra_people: number;
  minimum_nights: number;
  maximum_nights: number;
  calendar_updated: string;
  has_availability: null;
  availability_30: number;
  availability_60: number;
  availability_90: number;
  availability_365: number;
  calendar_last_scraped: Date;
  number_of_reviews: number;
  first_review: Date | null;
  last_review: Date | null;
  review_scores_rating: number | null;
  review_scores_accuracy: number | null;
  review_scores_cleanliness: number | null;
  review_scores_checkin: number | null;
  review_scores_communication: number | null;
  review_scores_location: number | null;
  review_scores_value: number | null;
  license: null;
  jurisdiction_names: City | null;
  cancellation_policy: CancellationPolicy;
  calculated_host_listings_count: number;
  reviews_per_month: number | null;
  geolocation: Geolocation;
  features: Feature[];
}

export enum BedType {
  RealBed = 'Real Bed',
}

export enum CancellationPolicy {
  Flexible = 'flexible',
  Moderate = 'moderate',
  Strict = 'strict',
}

export enum City {
  Amsterdam = 'Amsterdam',
}

export enum Country {
  Netherlands = 'Netherlands',
}

export enum CountryCode {
  Nl = 'NL',
}

export enum ExperiencesOffered {
  None = 'none',
}

export enum Feature {
  HostHasProfilePic = 'Host Has Profile Pic',
  HostIdentityVerified = 'Host Identity Verified',
  HostIsSuperhost = 'Host Is Superhost',
  InstantBookable = 'Instant Bookable',
  IsLocationExact = 'Is Location Exact',
}

export interface Geolocation {
  lon: number;
  lat: number;
}

export enum Neighbourhood {
  BuitenveldertOost = 'Buitenveldert-Oost',
  OudWest = 'Oud-West',
}

export enum HostResponseTime {
  WithinADay = 'within a day',
  WithinAFewHours = 'within a few hours',
  WithinAnHour = 'within an hour',
}

export enum HostVerification {
  Email = 'email',
  Facebook = 'facebook',
  GovernmentID = 'government_id',
  Jumio = 'jumio',
  OfflineGovernmentID = 'offline_government_id',
  Phone = 'phone',
  Reviews = 'reviews',
  WorkEmail = 'work_email',
}

export enum NeighbourhoodCleansed {
  BuitenveldertZuidas = 'Buitenveldert - Zuidas',
  DeBaarsjesOudWest = 'De Baarsjes - Oud-West',
}

export interface PictureURL {
  thumbnail: boolean;
  filename: string;
  format: Format;
  width: number;
  mimetype: Mimetype;
  etag: string;
  id: string;
  last_synchronized: Date;
  color_summary: string[];
  height: number;
  url: string;
}

export enum Format {
  JPEG = 'JPEG',
}

export enum Mimetype {
  ImageJPEG = 'image/jpeg',
}

export enum PropertyType {
  Apartment = 'Apartment',
  BedBreakfast = 'Bed & Breakfast',
  House = 'House',
  Townhouse = 'Townhouse',
}

export enum RoomType {
  EntireHomeApt = 'Entire home/apt',
  PrivateRoom = 'Private room',
}

export enum SmartLocation {
  AmsterdamNetherlands = 'Amsterdam, Netherlands',
}
