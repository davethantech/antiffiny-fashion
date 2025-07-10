
import type { NavItem } from './types';

export const COLORS = {
  brandBlue: 'indigo-700',
  brandGreen: 'emerald-600',
  brandAccentGreen: 'lime-500',
  brandDark: 'slate-800',
  textPrimary: 'slate-700',
  textSecondary: 'slate-500',
  bgLight: 'gray-50',
  bgWhite: 'white',
  footerBg: 'slate-800',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Leadership', path: '/leadership' },
  { label: 'Our Services', path: '/services' },
  { label: 'Why Trust Us', path: '/why-choose-us' },
  { label: 'Contact Us', path: '/contact' },
];

export const COMPANY_INFO = {
	name: "Cloverdale Finance Company Limited",
	shortName: "Cloverdale Finance",
	tagline: "Your surest partner to a wealthier future",
	ceoName: "Abubakar Bello",
	// email: "abello@cloverdalefinance.com",
	contactEmail: "info@cloverdalefinance.com",
	phoneNumbers: [
		"+234 906 202 5678",
		"+234 916 201 5678",
	],
	address:
		"Wing B, 2nd Floor, ULO Plaza, No. 34 Sokode Crescent, Wuse Zone 5, Abuja.",
	vision:
		"To become the trusted leader in transformative financial services that actively create a wealthier and secure future for all.",
	mission:
		"To deliver personalized, transparent, and innovative financial solutions that empower individuals and businesses to achieve lasting prosperity.",
};

// Wing B, second floor, ULO Plaza, No. 34 Sokode Crescent, Wuse Zone 5, Abuja.
