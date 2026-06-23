# Clinical Landing Page Template

A clean, premium, and fully responsive landing page template for dermatologists and medical clinics. Built with vanilla HTML, CSS, and dynamic JavaScript injection.

## 🚀 How to Customize the Website

All content on the website is completely customizable via a single file: `data.json`. You do not need to edit any HTML code to modify the text, services, stats, or reviews.

### 1. Edit the Content Configuration (`data.json`)
Open the `data.json` file in the root directory and update the fields:

* **`clinicName`**: The name of the clinic (appears in navbar, footer, and copyright).
* **`doctor`**:
  * `name`: Doctor's name (appears on title, hero, and footer).
  * `image`: Path to the doctor's portrait (e.g. `src/assets/doctor.png`).
  * `credentials`: Array of doctor credentials (each with an `icon` and `text`).
* **`hero`**:
  * `badge`: Text above the main title (e.g., "EXPERT DERMATOLOGISTS").
  * `titlePrefix`: The start of the main heading.
  * `titleHighlight`: The colored span section at the end of the heading.
  * `description`: Sub-headline/description under the main heading.
  * `badges`: Left-side rating/treatments badge details.
* **`about`**:
  * `title` & `description`: Main body info text.
  * `address`: Clinic location address text.
  * `stats`: A list of numbers and labels for the statistics box (up to 4 items).
* **`services`**: An array of services offered (which dynamically populate the "Our Expertise" cards and the appointment dropdown options):
  * `title`: Service name.
  * `badge`: Status tag (e.g. "Specialty" or "Holistic Care"), can be blank.
  * `description`: Core service summary.
  * `linkText`: Text for the link (e.g. "Learn more"), can be blank.
  * `iconType`: Icon style selector (`skin` / `cream` / `scissors` / `cross`).
  * `colorType`: Color highlight style (`blue` / `berry` / `green`).
* **`testimonials`**: Google rating average pill and patient reviews.
* **`contact`**: Heading, contact email, and phone number.

### 2. Swap Assets (Photos and Logos)
* To change the doctor's portrait, replace the image file at `src/assets/doctor.png` or edit the `"image"` path inside `data.json` to point to a new image.
* Icons used in the page (Stethoscope, scissors, creams) are loaded as vector inline SVGs dynamically depending on the `"iconType"` parameter.

---

## 💻 Running the Local Server

To view the website locally in your browser:

1. Make sure you have **Node.js** installed on your system.
2. In your terminal, run the following command in the project directory:
   ```bash
   node server.cjs
   ```
3. Open your browser and navigate to:
   **[http://localhost:8080/](http://localhost:8080/)**

---

## 🎨 Design and Animation Guidelines

This template strictly follows the definitions in `DESIGN.md`:
* **Typography:** Montserrat (headings) & Manrope (body and UI).
* **Colors:** Medical Blue (`#006397`) and Dermal Berry (`#b81153`) highlights.
* **Elevation:** Level 1 subtle borders with soft, blue-tinted Level 2 active shadows on card hover.
* **Motion:** Staggered fade-ins, card hover-lifts (`translateY(-4px)`), and slow-pulsing Book Appointment buttons. (All wrapped in a `prefers-reduced-motion` media query for accessibility).
