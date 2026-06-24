export interface HeroData {
  greeting:    string;
  name:        string;
  roles:       string[];
  description: string;
  cta: {
    primary:   CtaLink;
    secondary: CtaLink;
  };
  social: SocialLink[];
}

export interface CtaLink {
  label: string;
  url:   string;
}

export interface SocialLink {
  label: string;
  icon:  string;
  url:   string;
}