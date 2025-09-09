export interface WorkingHours {
  days: string;   // ex. "Pon-Czw"
  hours: string;  // ex. "09:00-18:00"
}
export interface MadeBy {
  name: string;
  url: string;
}

export type SocialMediaEntry = [string, string]; // [name, link]
export type PhoneEntry = [string, string];       // [href, displayed phone]
export type EmailEntry = [string, string];       // [href, displayed email]

export interface SiteInfoProps {
  phone: PhoneEntry;
  email: EmailEntry;
  workingHours: WorkingHours[];
  socialMedia: SocialMediaEntry[];
  footerText: string[];
  madeBy: MadeBy;
}
