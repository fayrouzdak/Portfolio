# Assets

Drop your images here. Astro will automatically optimize them (WebP/AVIF conversion, resizing, lazy loading).

## Expected files

```
src/assets/
├── avatar.jpg                         ← your profile photo
└── projects/
    ├── laravel/
    │   ├── thumbnail.png              ← card thumbnail on main page
    │   ├── showcase-1.png             ← detail page screenshots
    │   └── showcase-2.png
    ├── smb/
    │   ├── thumbnail.png
    │   └── showcase-1.png
    └── agencies/
        ├── thumbnail.png
        └── showcase-1.png
```

## Notes

- Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`
- Paths are defined in `src/data/portfolio.ts` — update them there if you rename files
- The build will throw a clear error if a referenced image is missing
