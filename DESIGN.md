---
name: Clinical Excellence
colors:
  surface: '#fbf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#3f4850'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006397'
  primary: '#006397'
  on-primary: '#ffffff'
  primary-container: '#3498db'
  on-primary-container: '#002d47'
  inverse-primary: '#92ccff'
  secondary: '#b81153'
  on-secondary: '#ffffff'
  secondary-container: '#fd4e84'
  on-secondary-container: '#5a0024'
  tertiary: '#006d37'
  on-tertiary: '#ffffff'
  tertiary-container: '#00a757'
  on-tertiary-container: '#003216'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#92ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#ffd9df'
  secondary-fixed-dim: '#ffb1c1'
  on-secondary-fixed: '#3f0017'
  on-secondary-fixed-variant: '#90003e'
  tertiary-fixed: '#6bfe9c'
  tertiary-fixed-dim: '#4ae183'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005228'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
  medical-blue: '#3498DB'
  dermal-berry: '#C8225E'
  health-green: '#2ECC71'
  surface-ice: '#F8FAFC'
  border-subtle: '#E2E8F0'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  caption:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system establishes a clinical, sophisticated, and trustworthy aesthetic tailored for dermatology and general medicine. The visual narrative balances the precision of medical science with the elegance of high-end skincare. 

The design style is **Corporate / Modern** with a focus on high-quality whitespace and refined accents. It avoids the harshness of traditional medical software by employing soft transitions and a systematic layout. The goal is to evoke a sense of calm, professionalism, and hygiene, ensuring patients feel cared for and secure.

## Colors

The palette is anchored in **Medical Blue** to project reliability and intelligence, while **Dermal Berry** is used sparingly as a high-end accent for dermatology-specific features or calls to action. 

- **Primary (Medical Blue):** Used for navigation, primary buttons, and clinical identifiers.
- **Secondary (Dermal Berry):** Used for premium services, aesthetic treatments, and highlighting key promotional areas.
- **Tertiary (Health Green):** Reserved for success states, online availability, and wellness indicators.
- **Neutral (Slate/Charcoal):** Provides high-legibility text contrast and structural boundaries.

Backgrounds should remain predominantly white or "Surface Ice" to maintain a sterile, breathable environment.

## Typography

The typography strategy pairs the geometric confidence of **Montserrat** for headings with the refined, modern readability of **Manrope** for body and UI elements.

- **Headlines:** Use Montserrat in semi-bold or bold weights. Letter spacing should be slightly tightened for large display titles to maintain a premium "editorial" feel.
- **Body Text:** Manrope provides excellent legibility for medical descriptions and patient reports. Use a generous line height (1.5x) to ensure the text feels accessible and unhurried.
- **Labels:** Use Manrope in medium or semi-bold weights for navigation items, button text, and form labels to ensure clear hierarchy.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. A strict 8px spacing system governs all spatial relationships.

- **Patient Records & Forms:** Should be contained within a maximum width of 1200px to prevent excessive line lengths.
- **Vertical Rhythm:** Use larger vertical gaps (`lg` or `xl`) between distinct service sections (e.g., General Medicine vs. Cosmetic Dermatology) to create clear mental categorization.
- **Safe Areas:** Maintain a minimum 24px gutter between columns to ensure clinical data remains distinct and easy to scan.

## Elevation & Depth

To maintain a "clean room" aesthetic, depth is conveyed through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows.

- **Level 0 (Background):** Solid White or Surface Ice (#F8FAFC).
- **Level 1 (Cards/Containers):** White surface with a 1px border (#E2E8F0). No shadow.
- **Level 2 (Active/Hover):** White surface with a subtle, diffused blue-tinted shadow (e.g., 0px 4px 12px rgba(52, 152, 219, 0.08)).
- **Level 3 (Modals/Overlays):** Solid White with a more pronounced ambient shadow to denote immediate focus.

Glassmorphism may be used sparingly on navigation bars to allow background content to peak through, suggesting transparency and openness.

## Shapes

The design uses a **Rounded** shape language (8px / 0.5rem base) to soften the clinical environment and make it appear more welcoming.

- **Buttons & Inputs:** Use the standard 8px radius.
- **Feature Cards:** Use `rounded-lg` (16px) to create a friendly container for service descriptions.
- **Action Pills:** In specific dermatology contexts, use "Pill-shaped" corners for chips and category tags to differentiate them from standard clinical data.

## Components

### Buttons
- **Primary:** Medical Blue fill, white text. High-contrast and authoritative.
- **Secondary:** Transparent with a 1px Dermal Berry border and berry text. Used for "Learn More" or cosmetic services.
- **Tertiary:** Ghost style with Medical Blue text, used for less critical actions like "Cancel."

### Input Fields
- Fields should have a 1px border (#E2E8F0) that transitions to Medical Blue on focus. Labels must always be visible (never placeholder-only) to ensure accessibility in medical environments.

### Cards
- Service cards should feature a top-heavy layout: a soft-colored icon or medical imagery at the top, followed by a Montserrat heading and Manrope body text.

### Chips & Status
- **Status Indicators:** Use small, circular dots paired with text (e.g., Green for "Available Today," Blue for "Follow-up Scheduled").
- **Tags:** Highly rounded (pill-style) tags with light background tints of the primary/secondary colors.

### Lists
- Patient data lists should use alternating row colors (White and Surface Ice) to assist with horizontal scanning of medical records.