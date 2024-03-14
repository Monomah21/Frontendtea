# Frontend Development Package

This is a JavaScript package that provides a simple carousel/slider component for frontend development.

## Installation

You can install this package via npm:

```bash
npm install frontend-carousel-js
```

## Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Carousel Example</title>
  <link rel="stylesheet" href="carousel.css">
</head>
<body>

<div class="carousel-container">
  <div class="slide">Slide 1 Content</div>
  <div class="slide">Slide 2 Content</div>
  <div class="slide">Slide 3 Content</div>
  <!-- Add more slides here -->
</div>

<script src="frontend.js"></script>
<script>
  const carousel = new Carousel('.carousel-container', { autoplay: true, autoplayInterval: 3000 });
</script>

</body>
</html>
```

## Options

- `autoplay`: Enable or disable autoplay (default: `true`).
- `autoplayInterval`: Interval for autoplay in milliseconds (default: `3000`).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# PDF Generator

A simple yet powerful PDF generation tool written in TypeScript.

## Installation

```bash
npm install pdf-generator
```

## Usage

```javascript
const PDFGenerator = require("pdf-generator");

// Create a new PDFGenerator instance
const pdfGenerator = new PDFGenerator();

// Add content to the PDF
pdfGenerator
  .addText("Hello, this is a PDF generated using PDFGenerator!", {
    fontSize: 20,
    align: "center",
  })
  .addPage()
  .addText("This is page 2 of the PDF.", {
    y: 100,
    align: "center",
  });

// Save the PDF
pdfGenerator.save();
```

## API

### `PDFGenerator(options?: PDFGeneratorOptions)`

Creates a new instance of PDFGenerator with optional options.

- `options.filename`: Specify the filename for the generated PDF. Default is `'output.pdf'`.

### `addText(text: string, options?: TextOptions): PDFGenerator`

Adds text to the PDF document.

- `text`: The text content to add.
- `options`: Optional parameters for text formatting, such as fontSize, font, alignment, etc.

### `addPage(): PDFGenerator`

Adds a new page to the PDF document.

### `save(): void`

Saves the PDF document to the specified filename.

## Example

Check the `example` directory for an example usage of the PDFGenerator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
