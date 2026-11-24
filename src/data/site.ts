import type { NavItem } from "@/types";

/**
 * Global site configuration — Nexora, Bangladesh.
 */
export const siteConfig = {
  name: "Nexora",
  tagline: "Website, App & Digital Agency in Bangladesh",
  description:
    "Nexora builds fast, modern websites and mobile apps for businesses in Trishal, Mymensingh, Bangladesh and worldwide.",
  url: "https://nexora.agency",
  locale: "en_BD",
  contact: {
    email: "fakhrulislamsipon@gmail.com",
    phone: "01823461697",
    whatsapp: "https://wa.me/8801823461697",
    location: "Trishal, Mymensingh, Bangladesh",
  },
  socials: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    youtube: "https://www.youtube.com/",
    x: "https://x.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
