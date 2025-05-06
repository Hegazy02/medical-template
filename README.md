# Medical Template Project

A modern medical website template built with SASS.

## Project Structure

```
medical-template/
├── index.html              # Main HTML file
├── assets/                 # All static assets
│   ├── images/            # Image assets
│   │   ├── icons/        # UI icons (tools.png, eye.png, etc.)
│   │   ├── slides/       # Slider images (medical-slide-1.jpg)
│   │   └── logo/         # Logo images (logo-medical.png)
│   ├── styles/           # All styling files
│   │   ├── scss/        # SASS source files
│   │   │   ├── abstracts/     # Variables, mixins
│   │   │   ├── base/          # Reset, typography
│   │   │   ├── components/    # Component styles
│   │   │   └── layout/        # Layout styles
│   │   └── css/         # Compiled CSS
│   └── js/              # JavaScript files
└── README.md            # Project documentation

## Component Organization

Components are organized following BEM methodology and grouped by their relationship:

1. Header Components
   - Main header
   - Navbar
   - Contact information

2. Footer Components
   - Main footer
   - Copyright
   - Social media
   - Location
   - Opening hours
   - Emergency cases

3. About Us Components
   - Main about section
   - Left and right sections
   - Paragraphs

4. Service Components
   - Departments
   - Doctors
   - Resources
   - Insurance

5. Feature Components
   - Banner
   - Quote
   - Floating bar

6. Common Components
   - Section headers
   - Buttons

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run SASS compiler:
   ```bash
   npm run sass:watch
   ```

3. Open index.html in your browser

## Best Practices

1. Follow BEM naming convention
2. Keep components modular and reusable
3. Use variables for consistent styling
4. Comment complex code sections
5. Maintain proper file organization 