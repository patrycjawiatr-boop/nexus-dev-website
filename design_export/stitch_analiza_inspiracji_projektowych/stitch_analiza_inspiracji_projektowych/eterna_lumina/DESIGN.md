# Design System: Editorial Tech High-End

## 1. Overview & Creative North Star
### The Creative North Star: "The Neon Curator"
This design system moves away from the sterile, "template-heavy" look of traditional SaaS to embrace an **Editorial Dark Mode** aesthetic. It is designed to feel like a premium digital gallery—where tech meets high-fashion. We achieve this through a "Neon Curator" philosophy: the UI remains dark, quiet, and sophisticated, allowing the "Neon" (vibrant gradients) to guide the user's eye like spotlights in a dark room.

The system breaks the "rigid grid" by utilizing **intentional asymmetry** and **Bento-box layouts**. Elements are not just placed; they are curated. We use overlapping layers and significant breathing room to create a sense of expensive, custom-built software rather than a generic dashboard.

---

## 2. Colors & Surface Philosophy
The palette is built on a foundation of obsidian and midnight tones, accented by high-energy electric pulses.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid, opaque borders for sectioning or containment. Traditional lines "cage" the content. Instead, boundaries must be defined through:
- **Tonal Shifts:** Placing a `surface_container_low` card on a `background` base.
- **Negative Space:** Using the spacing scale (e.g., `8` or `12`) to create a cognitive boundary.
- **Ambient Glows:** Using a subtle glow from a primary gradient to hint at an edge.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of polished obsidian.
1.  **Base Layer:** `background` (#0e0e0e) or `surface_container_lowest` (#000000).
2.  **Sectioning Layer:** `surface_container` (#1a1919) to define broad content areas.
3.  **Component Layer:** `surface_container_high` (#201f1f) for cards and interactive modules.
4.  **Interactive Layer:** `surface_bright` (#2c2c2c) for hovered or active states.

### The "Glass & Gradient" Rule
Floating elements (modals, dropdowns, navigation bars) must utilize **Glassmorphism**. 
- **Recipe:** Use `surface` at 60% opacity with a `backdrop-blur` of 20px. 
- **Gradients:** Use a linear gradient from `primary` (#ba9eff) to `secondary` (#53ddfc) at a 45-degree angle for hero CTAs and "signature" cards. This provides the "visual soul" that flat colors lack.

---

## 3. Typography
We use a high-contrast typographic scale to create an editorial feel.

*   **Display & Headlines (Plus Jakarta Sans):** These are your "statements." Use `display-lg` for hero moments with tight letter spacing (-0.02em). This geometric font provides a modern, tech-forward authority.
*   **Body & Labels (Inter):** Inter is used for maximum readability. Its neutral character balances the expressive nature of Plus Jakarta Sans.
*   **Hierarchy Tip:** Always pair a `display-sm` headline with `body-md` in `on_surface_variant` (#adaaaa). This creates a sophisticated tonal contrast that feels intentional and easy on the eyes.

---

## 4. Elevation & Depth
In this system, depth is felt, not seen.

### The Layering Principle
Instead of shadows, use **Tonal Layering**. Place a `surface_container_low` card on a `surface` background. The subtle shift from `#131313` to `#0e0e0e` creates a soft, natural lift that mimics high-end photography lighting.

### Ambient Shadows
When an object must "float" (e.g., a primary modal):
- **Blur:** 40px - 60px.
- **Opacity:** 10%.
- **Tint:** Use a tint of `primary_dim` (#8455ef) instead of black. This creates a "luminescent lift" rather than a heavy shadow.

### The "Ghost Border" Fallback
If a boundary is required for accessibility, use a **Ghost Border**:
- **Token:** `outline_variant` (#494847).
- **Opacity:** 15% - 20%.
- **Style:** 1px solid, but softened by the background blur beneath it.

---

## 5. Components

### Bento-Box Cards
*   **Structure:** No dividers. Use `surface_container_high` (#201f1f).
*   **Radius:** Always `lg` (2rem / 32px) for large containers, `md` (1.5rem / 24px) for inner cards.
*   **Interaction:** On hover, shift background to `surface_bright` and apply a 1px "Ghost Border" at 30% opacity.

### Buttons
*   **Primary:** A gradient from `primary` to `secondary`. Apply a "Subtle Glow" using a drop shadow of the same color at 20% opacity. Border-radius: `full`.
*   **Secondary:** `surface_variant` with a `Ghost Border`. Text color: `on_surface`.
*   **Tertiary:** Transparent background, `label-md` uppercase with 0.05em letter spacing.

### Input Fields
*   **Style:** `surface_container_lowest` (#000000) with a 10% `outline` border.
*   **Focus State:** Border color shifts to `primary`, and a subtle 4px blur glow of `primary_dim` appears around the field.
*   **Radius:** `sm` (0.5rem).

### Navigation (The Glass Bar)
*   **Style:** Floating 24px from the top. `surface` at 70% opacity + backdrop blur.
*   **Active State:** No underlines. Use a small `primary` dot (4px) below the text or a subtle `secondary_container` pill background.

---

## 6. Do's and Don'ts

### Do
*   **DO** use generous whitespace. If you think there is enough space, add 20% more.
*   **DO** use `tertiary` (#ec63ff) sparingly for "Success" or "High-Action" moments to keep its impact high.
*   **DO** utilize the `xl` (3rem) corner radius for hero images and large layout sections to maintain the "modern tech" feel.

### Don't
*   **DON'T** use pure white (#ffffff) for long-form body text; use `on_surface_variant` (#adaaaa) to reduce eye strain.
*   **DON'T** use sharp corners (0px-4px) anywhere. It breaks the organic, high-end SaaS flow.
*   **DON'T** use 100% opaque borders. They create "visual noise" that destroys the premium atmosphere.
*   **DON'T** use standard "Grey" shadows. Every shadow should have a hint of the brand's midnight blue or purple tones.