from PIL import Image, ImageDraw

size = 256
img = Image.open('src/assets/images/profile.jpeg').convert('RGBA')

# Crop to square from top (face area)
w, h = img.size
crop_size = min(w, h)
left = (w - crop_size) // 2
top = 0  # focus on top (face)
img = img.crop((left, top, left + crop_size, top + crop_size))
img = img.resize((size, size), Image.LANCZOS)

# Create circular mask
mask = Image.new('L', (size, size), 0)
draw = ImageDraw.Draw(mask)
draw.ellipse((0, 0, size, size), fill=255)

# Apply mask
result = Image.new('RGBA', (size, size), (0, 0, 0, 0))
result.paste(img, (0, 0), mask)
result.save('public/favicon.png', 'PNG')
print('Done: public/favicon.png')
