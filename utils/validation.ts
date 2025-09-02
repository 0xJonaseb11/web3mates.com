// Comprehensive validation utility for all forms
export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// Country codes for phone validation
export const countryCodes = [
  { code: "+1", country: "US/Canada", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+32", country: "Belgium", flag: "🇧🇪" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+45", country: "Denmark", flag: "🇩🇰" },
  { code: "+358", country: "Finland", flag: "🇫🇮" },
  { code: "+48", country: "Poland", flag: "🇵🇱" },
  { code: "+420", country: "Czech Republic", flag: "🇨🇿" },
  { code: "+36", country: "Hungary", flag: "🇭🇺" },
  { code: "+43", country: "Austria", flag: "🇦🇹" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+30", country: "Greece", flag: "🇬🇷" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+380", country: "Ukraine", flag: "🇺🇦" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+233", country: "Ghana", flag: "🇬🇭" },
  { code: "+256", country: "Uganda", flag: "🇺🇬" },
  { code: "+255", country: "Tanzania", flag: "🇹🇿" },
  { code: "+251", country: "Ethiopia", flag: "🇪🇹" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+212", country: "Morocco", flag: "🇲🇦" },
  { code: "+216", country: "Tunisia", flag: "🇹🇳" },
  { code: "+213", country: "Algeria", flag: "🇩🇿" },
  { code: "+225", country: "Ivory Coast", flag: "🇨🇮" },
  { code: "+221", country: "Senegal", flag: "🇸🇳" },
  { code: "+237", country: "Cameroon", flag: "🇨🇲" },
  { code: "+236", country: "Central African Republic", flag: "🇨🇫" },
  { code: "+235", country: "Chad", flag: "🇹🇩" },
  { code: "+241", country: "Gabon", flag: "🇬🇦" },
  { code: "+242", country: "Congo", flag: "🇨🇬" },
  { code: "+243", country: "DR Congo", flag: "🇨🇩" },
  { code: "+244", country: "Angola", flag: "🇦🇴" },
  { code: "+245", country: "Guinea-Bissau", flag: "🇬🇼" },
  { code: "+246", country: "British Indian Ocean Territory", flag: "🇮🇴" },
  { code: "+247", country: "Ascension Island", flag: "🇦🇨" },
  { code: "+248", country: "Seychelles", flag: "🇸🇨" },
  { code: "+249", country: "Sudan", flag: "🇸🇩" },
  { code: "+250", country: "Rwanda", flag: "🇷🇼" },
  { code: "+252", country: "Somalia", flag: "🇸🇴" },
  { code: "+253", country: "Djibouti", flag: "🇩🇯" },
  { code: "+257", country: "Burundi", flag: "🇧🇮" },
  { code: "+258", country: "Mozambique", flag: "🇲🇿" },
  { code: "+259", country: "Zambia", flag: "🇿🇲" },
  { code: "+260", country: "Madagascar", flag: "🇲🇬" },
  { code: "+261", country: "Réunion", flag: "🇷🇪" },
  { code: "+262", country: "Zimbabwe", flag: "🇿🇼" },
  { code: "+263", country: "Namibia", flag: "🇳🇦" },
  { code: "+264", country: "Malawi", flag: "🇲🇼" },
  { code: "+265", country: "Lesotho", flag: "🇱🇸" },
  { code: "+266", country: "Botswana", flag: "🇧🇼" },
  { code: "+267", country: "Swaziland", flag: "🇸🇿" },
  { code: "+268", country: "Comoros", flag: "🇰🇲" },
  { code: "+269", country: "Mayotte", flag: "🇾🇹" },
  { code: "+290", country: "Saint Helena", flag: "🇸🇭" },
  { code: "+291", country: "Eritrea", flag: "🇪🇷" },
  { code: "+297", country: "Aruba", flag: "🇦🇼" },
  { code: "+298", country: "Faroe Islands", flag: "🇫🇴" },
  { code: "+299", country: "Greenland", flag: "🇬🇱" },
  { code: "+350", country: "Gibraltar", flag: "🇬🇮" },
  { code: "+352", country: "Luxembourg", flag: "🇱🇺" },
  { code: "+353", country: "Ireland", flag: "🇮🇪" },
  { code: "+354", country: "Iceland", flag: "🇮🇸" },
  { code: "+355", country: "Albania", flag: "🇦🇱" },
  { code: "+356", country: "Malta", flag: "🇲🇹" },
  { code: "+357", country: "Cyprus", flag: "🇨🇾" },
  { code: "+359", country: "Bulgaria", flag: "🇧🇬" },
  { code: "+370", country: "Lithuania", flag: "🇱🇹" },
  { code: "+371", country: "Latvia", flag: "🇱🇻" },
  { code: "+372", country: "Estonia", flag: "🇪🇪" },
  { code: "+373", country: "Moldova", flag: "🇲🇩" },
  { code: "+374", country: "Armenia", flag: "🇦🇲" },
  { code: "+375", country: "Belarus", flag: "🇧🇾" },
  { code: "+376", country: "Andorra", flag: "🇦🇩" },
  { code: "+377", country: "Monaco", flag: "🇲🇨" },
  { code: "+378", country: "San Marino", flag: "🇸🇲" },
  { code: "+379", country: "Vatican City", flag: "🇻🇦" },
  { code: "+381", country: "Serbia", flag: "🇷🇸" },
  { code: "+382", country: "Montenegro", flag: "🇲🇪" },
  { code: "+383", country: "Kosovo", flag: "🇽🇰" },
  { code: "+385", country: "Croatia", flag: "🇭🇷" },
  { code: "+386", country: "Slovenia", flag: "🇸🇮" },
  { code: "+387", country: "Bosnia and Herzegovina", flag: "🇧🇦" },
  { code: "+389", country: "North Macedonia", flag: "🇲🇰" },
  { code: "+421", country: "Slovakia", flag: "🇸🇰" },
  { code: "+423", country: "Liechtenstein", flag: "🇱🇮" },
  { code: "+500", country: "Falkland Islands", flag: "🇫🇰" },
  { code: "+501", country: "Belize", flag: "🇧🇿" },
  { code: "+502", country: "Guatemala", flag: "🇬🇹" },
  { code: "+503", country: "El Salvador", flag: "🇸🇻" },
  { code: "+504", country: "Honduras", flag: "🇭🇳" },
  { code: "+505", country: "Nicaragua", flag: "🇳🇮" },
  { code: "+506", country: "Costa Rica", flag: "🇨🇷" },
  { code: "+507", country: "Panama", flag: "🇵🇦" },
  { code: "+508", country: "Saint Pierre and Miquelon", flag: "🇵🇲" },
  { code: "+509", country: "Haiti", flag: "🇭🇹" },
  { code: "+590", country: "Guadeloupe", flag: "🇬🇵" },
  { code: "+591", country: "Bolivia", flag: "🇧🇴" },
  { code: "+592", country: "Guyana", flag: "🇬🇾" },
  { code: "+593", country: "Ecuador", flag: "🇪🇨" },
  { code: "+594", country: "French Guiana", flag: "🇬🇫" },
  { code: "+595", country: "Paraguay", flag: "🇵🇾" },
  { code: "+596", country: "Martinique", flag: "🇲🇶" },
  { code: "+597", country: "Suriname", flag: "🇸🇷" },
  { code: "+598", country: "Uruguay", flag: "🇺🇾" },
  { code: "+599", country: "Netherlands Antilles", flag: "🇧🇶" },
  { code: "+670", country: "East Timor", flag: "🇹🇱" },
  { code: "+672", country: "Antarctica", flag: "🇦🇶" },
  { code: "+673", country: "Brunei", flag: "🇧🇳" },
  { code: "+674", country: "Nauru", flag: "🇳🇷" },
  { code: "+675", country: "Papua New Guinea", flag: "🇵🇬" },
  { code: "+676", country: "Tonga", flag: "🇹🇴" },
  { code: "+677", country: "Solomon Islands", flag: "🇸🇧" },
  { code: "+678", country: "Vanuatu", flag: "🇻🇺" },
  { code: "+679", country: "Fiji", flag: "🇫🇯" },
  { code: "+680", country: "Palau", flag: "🇵🇼" },
  { code: "+681", country: "Wallis and Futuna", flag: "🇼🇫" },
  { code: "+682", country: "Cook Islands", flag: "🇨🇰" },
  { code: "+683", country: "Niue", flag: "🇳🇺" },
  { code: "+685", country: "Samoa", flag: "🇼🇸" },
  { code: "+686", country: "Kiribati", flag: "🇰🇮" },
  { code: "+687", country: "New Caledonia", flag: "🇳🇨" },
  { code: "+688", country: "Tuvalu", flag: "🇹🇻" },
  { code: "+689", country: "French Polynesia", flag: "🇵🇫" },
  { code: "+690", country: "Tokelau", flag: "🇹🇰" },
  { code: "+691", country: "Micronesia", flag: "🇫🇲" },
  { code: "+692", country: "Marshall Islands", flag: "🇲🇭" },
  { code: "+850", country: "North Korea", flag: "🇰🇵" },
  { code: "+852", country: "Hong Kong", flag: "🇭🇰" },
  { code: "+853", country: "Macau", flag: "🇲🇴" },
  { code: "+855", country: "Cambodia", flag: "🇰🇭" },
  { code: "+856", country: "Laos", flag: "🇱🇦" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+886", country: "Taiwan", flag: "🇹🇼" },
  { code: "+960", country: "Maldives", flag: "🇲🇻" },
  { code: "+961", country: "Lebanon", flag: "🇱🇧" },
  { code: "+962", country: "Jordan", flag: "🇯🇴" },
  { code: "+963", country: "Syria", flag: "🇸🇾" },
  { code: "+964", country: "Iraq", flag: "🇮🇶" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+967", country: "Yemen", flag: "🇾🇪" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+970", country: "Palestine", flag: "🇵🇸" },
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+972", country: "Israel", flag: "🇮🇱" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+975", country: "Bhutan", flag: "🇧🇹" },
  { code: "+976", country: "Mongolia", flag: "🇲🇳" },
  { code: "+977", country: "Nepal", flag: "🇳🇵" },
  { code: "+992", country: "Tajikistan", flag: "🇹🇯" },
  { code: "+993", country: "Turkmenistan", flag: "🇹🇲" },
  { code: "+994", country: "Azerbaijan", flag: "🇦🇿" },
  { code: "+995", country: "Georgia", flag: "🇬🇪" },
  { code: "+996", country: "Kyrgyzstan", flag: "🇰🇬" },
  { code: "+998", country: "Uzbekistan", flag: "🇺🇿" },
  { code: "+1242", country: "Bahamas", flag: "🇧🇸" },
  { code: "+1246", country: "Barbados", flag: "🇧🇧" },
  { code: "+1264", country: "Anguilla", flag: "🇦🇮" },
  { code: "+1268", country: "Antigua and Barbuda", flag: "🇦🇬" },
  { code: "+1284", country: "British Virgin Islands", flag: "🇻🇬" },
  { code: "+1340", country: "U.S. Virgin Islands", flag: "🇻🇮" },
  { code: "+1345", country: "Cayman Islands", flag: "🇰🇾" },
  { code: "+1441", country: "Bermuda", flag: "🇧🇲" },
  { code: "+1473", country: "Grenada", flag: "🇬🇩" },
  { code: "+1649", country: "Turks and Caicos Islands", flag: "🇹🇨" },
  { code: "+1664", country: "Montserrat", flag: "🇲🇸" },
  { code: "+1671", country: "Guam", flag: "🇬🇺" },
  { code: "+1684", country: "American Samoa", flag: "🇦🇸" },
  { code: "+1758", country: "Saint Lucia", flag: "🇱🇨" },
  { code: "+1767", country: "Dominica", flag: "🇩🇲" },
  { code: "+1784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
  { code: "+1787", country: "Puerto Rico", flag: "🇵🇷" },
  { code: "+1809", country: "Dominican Republic", flag: "🇩🇴" },
  { code: "+1868", country: "Trinidad and Tobago", flag: "🇹🇹" },
  { code: "+1869", country: "Saint Kitts and Nevis", flag: "🇰🇳" },
  { code: "+1876", country: "Jamaica", flag: "🇯🇲" },
  { code: "+1939", country: "Puerto Rico", flag: "🇵🇷" },
].sort((a, b) => a.country.localeCompare(b.country));

// Validation patterns
const patterns = {
  name: /^[A-Za-zÀ-ÿ\s'-]{2,50}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\+[1-9]\d{1,14}$/,
  website: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  linkedin: /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]{3,100}$/,
  github: /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9-]{1,39}$/,
  twitter: /^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]{1,15}$/,
  portfolio: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  company: /^[A-Za-zÀ-ÿ0-9\s&.,'-]{2,100}$/,
  organization: /^[A-Za-zÀ-ÿ0-9\s&.,'-]{2,100}$/,
  projectTitle: /^[A-Za-zÀ-ÿ0-9\s&.,'-]{3,100}$/,
  description: /^[\s\S]{10,2000}$/,
  motivation: /^[\s\S]{10,1000}$/,
  bio: /^[\s\S]{10,500}$/,
  expertise: /^[\s\S]{5,200}$/,
  goals: /^[\s\S]{10,500}$/,
  ideas: /^[\s\S]{0,1000}$/,
  additional: /^[\s\S]{0,1000}$/,
  rate: /^[0-9]{1,4}$/,
  timezone: /^[A-Za-z\/\s+\-0-9]{2,50}$/,
  availability: /^[0-9]{1,3}$/,
  track: /^[A-Za-z0-9\s&]+$/,
  status: /^[A-Za-z\s]+$/,
  category: /^[A-Za-z\s&]+$/,
  techStack: /^[A-Za-z0-9\s&.,#+]+$/,
  tags: /^[A-Za-z0-9\s&.,#]+$/,
};

// Spam prevention patterns
const spamPatterns = {
  suspiciousWords: /(buy|sell|money|cash|loan|credit|debt|rich|poor|million|billion|dollar|euro|bitcoin|crypto|investment|profit|earn|make money|get rich|quick money|fast money|urgent|immediate|limited time|act now|click here|free|discount|offer|deal|sale|buy now|order now|call now|text now|email now|contact now|apply now|register now|sign up now|join now|start now|begin now|get started|get started now|get started today|get started immediately|get started right away|get started asap|get started now|get started today|get started immediately|get started right away|get started asap)/i,
  excessiveCaps: /[A-Z]{5,}/,
  excessivePunctuation: /[!]{3,}|[?]{3,}|[.]{3,}/,
  suspiciousLinks: /(bit\.ly|tinyurl|goo\.gl|t\.co|is\.gd|v\.gd|cli\.gs|short\.to|BudURL|ping\.fm|post\.ly|Just\.as|bkite\.com|snipr\.com|short\.ie|kl\.am|wp\.me|rubyurl\.com|om\.ly|to\.ly|bit\.do|t\.co|lnkd\.in|db\.tt|qr\.ae|adf\.ly|goo\.gl|bitly\.com|cur\.lv|tiny\.cc|ow\.ly|bit\.ly|ity\.im|q\.gs|is\.gd|po\.st|bc\.vc|twitthis\.com|u\.to|j\.mp|buzurl\.com|cutt\.us|u\.bb|yourls\.org|x\.co|prettylinkpro\.com|scrnch\.me|filoops\.info|vzturl\.com|qr\.net|1url\.com|tweez\.me|v\.gd|tr\.im|link\.zip\.net)/i,
  suspiciousEmails: /(test@|admin@|info@|contact@|hello@|hi@|hey@|dear@|sir@|madam@|friend@|user@|guest@|anonymous@|noreply@|no-reply@|donotreply@|do-not-reply@|nobody@|someone@|anyone@|everyone@|anybody@|somebody@|nobody@|test123@|test@test\.com|admin@admin\.com|info@info\.com|contact@contact\.com|hello@hello\.com|hi@hi\.com|hey@hey\.com|dear@dear\.com|sir@sir\.com|madam@madam\.com|friend@friend\.com|user@user\.com|guest@guest\.com|anonymous@anonymous\.com|noreply@noreply\.com|no-reply@no-reply\.com|donotreply@donotreply\.com|do-not-reply@do-not-reply\.com|nobody@nobody\.com|someone@someone\.com|anyone@anyone\.com|everyone@everyone\.com|anybody@anybody\.com|somebody@somebody\.com|nobody@nobody\.com|test123@test123\.com)/i,
};

// Validation functions
export const validateField = (field: string, value: string, required: boolean = true): ValidationError | null => {
  if (required && (!value || value.trim().length === 0)) {
    return { field, message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required` };
  }

  if (!required && (!value || value.trim().length === 0)) {
    return null;
  }

  const trimmedValue = value.trim();

  // Check for spam patterns
  if (spamPatterns.suspiciousWords.test(trimmedValue)) {
    return { field, message: `${field} contains suspicious content` };
  }

  if (spamPatterns.excessiveCaps.test(trimmedValue)) {
    return { field, message: `${field} contains excessive capitalization` };
  }

  if (spamPatterns.excessivePunctuation.test(trimmedValue)) {
    return { field, message: `${field} contains excessive punctuation` };
  }

  // Field-specific validation
  switch (field) {
    case 'name':
    case 'firstName':
    case 'lastName':
      if (!patterns.name.test(trimmedValue)) {
        return { field, message: 'Name must be 2-50 characters with only letters, spaces, hyphens, and apostrophes' };
      }
      break;

    case 'email':
      if (spamPatterns.suspiciousEmails.test(trimmedValue)) {
        return { field, message: 'Please use a valid email address' };
      }
      if (!patterns.email.test(trimmedValue)) {
        return { field, message: 'Please enter a valid email address' };
      }
      break;

    case 'phone':
      // For phone numbers without country code (just the number part)
      if (!/^\d{7,15}$/.test(trimmedValue)) {
        return { field, message: 'Please enter a valid phone number (7-15 digits)' };
      }
      break;

    case 'website':
    case 'portfolio':
      if (spamPatterns.suspiciousLinks.test(trimmedValue)) {
        return { field, message: 'Please use a direct website URL' };
      }
      if (!patterns.website.test(trimmedValue)) {
        return { field, message: 'Please enter a valid website URL (e.g., https://example.com)' };
      }
      break;

    case 'linkedin':
      if (!patterns.linkedin.test(trimmedValue)) {
        return { field, message: 'Please enter a valid LinkedIn profile URL' };
      }
      break;

    case 'github':
      if (!patterns.github.test(trimmedValue)) {
        return { field, message: 'Please enter a valid GitHub profile URL' };
      }
      break;

    case 'twitter':
      if (!patterns.twitter.test(trimmedValue)) {
        return { field, message: 'Please enter a valid Twitter profile URL' };
      }
      break;

    case 'company':
    case 'organization':
    case 'org':
      if (!patterns.company.test(trimmedValue)) {
        return { field, message: 'Company/Organization name must be 2-100 characters with valid characters' };
      }
      break;

    case 'title':
    case 'projectTitle':
      if (!patterns.projectTitle.test(trimmedValue)) {
        return { field, message: 'Title must be 3-100 characters with valid characters' };
      }
      break;

    case 'description':
      if (!patterns.description.test(trimmedValue)) {
        return { field, message: 'Description must be 10-2000 characters' };
      }
      break;

    case 'motivation':
      if (!patterns.motivation.test(trimmedValue)) {
        return { field, message: 'Motivation must be 10-1000 characters' };
      }
      break;

    case 'bio':
      if (!patterns.bio.test(trimmedValue)) {
        return { field, message: 'Bio must be 10-500 characters' };
      }
      break;

    case 'expertise':
      if (!patterns.expertise.test(trimmedValue)) {
        return { field, message: 'Expertise must be 5-200 characters' };
      }
      break;

    case 'goals':
      if (!patterns.goals.test(trimmedValue)) {
        return { field, message: 'Goals must be 10-500 characters' };
      }
      break;

    case 'ideas':
    case 'additional':
      if (trimmedValue.length > 0 && !patterns.ideas.test(trimmedValue)) {
        return { field, message: 'Content must be less than 1000 characters' };
      }
      break;

    case 'rate':
      if (!patterns.rate.test(trimmedValue)) {
        return { field, message: 'Rate must be a number between 1-9999' };
      }
      break;

    case 'timezone':
      if (!patterns.timezone.test(trimmedValue)) {
        return { field, message: 'Please enter a valid timezone (e.g., GMT+1, EST, UTC)' };
      }
      break;

    case 'availability':
      if (!patterns.availability.test(trimmedValue)) {
        return { field, message: 'Availability must be a number between 1-999 hours' };
      }
      break;

    case 'track':
      if (!patterns.track.test(trimmedValue)) {
        return { field, message: 'Track must contain only letters and spaces' };
      }
      break;

    case 'status':
      if (!patterns.status.test(trimmedValue)) {
        return { field, message: 'Status must contain only letters and spaces' };
      }
      break;

    case 'category':
      if (!patterns.category.test(trimmedValue)) {
        return { field, message: 'Category must contain only letters and spaces' };
      }
      break;

    case 'techStack':
      if (!patterns.techStack.test(trimmedValue)) {
        return { field, message: 'Tech stack must contain valid characters' };
      }
      break;

    case 'tags':
      if (!patterns.tags.test(trimmedValue)) {
        return { field, message: 'Tags must contain valid characters' };
      }
      break;

    case 'message':
    case 'subject':
    case 'feedback':
      if (trimmedValue.length < 5) {
        return { field, message: `${field} must be at least 5 characters` };
      }
      if (trimmedValue.length > 1000) {
        return { field, message: `${field} must be less than 1000 characters` };
      }
      break;
  }

  return null;
};

export const validateForm = (formData: Record<string, unknown>, requiredFields: string[]): ValidationResult => {
  const errors: ValidationError[] = [];

  // Validate required fields
  requiredFields.forEach(field => {
    const value = formData[field];
    if (typeof value === 'string') {
      const error = validateField(field, value, true);
      if (error) errors.push(error);
    }
  });

  // Validate optional fields that have values
  Object.keys(formData).forEach(field => {
    if (!requiredFields.includes(field)) {
      const value = formData[field];
      if (typeof value === 'string' && value) {
        const error = validateField(field, value, false);
        if (error) errors.push(error);
      }
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Phone number formatting
export const formatPhoneNumber = (countryCode: string, phoneNumber: string): string => {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  return `${countryCode}${cleanPhone}`;
};

// Validate phone number with country code
export const validatePhoneWithCountryCode = (countryCode: string, phoneNumber: string): ValidationError | null => {
  const fullNumber = formatPhoneNumber(countryCode, phoneNumber);
  return validateField('phone', fullNumber, true);
};
