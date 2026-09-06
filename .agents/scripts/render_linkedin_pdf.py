from pathlib import Path

import fitz


pdf_path = Path("attached_assets/Profile_1788690148739.pdf")
output_dir = Path(".agents/outputs/linkedin-profile-pages")
output_dir.mkdir(parents=True, exist_ok=True)

document = fitz.open(pdf_path)
for page_number, page in enumerate(document, start=1):
    pixmap = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    pixmap.save(output_dir / f"page-{page_number}.png")

print(f"Rendered {document.page_count} page(s) to {output_dir}")