# Assets

Drop your images here. Astro will automatically optimize them (WebP/AVIF conversion, resizing, lazy loading).

## Expected files

```
src/assets/
├── avatar.jpg                         ← your profile photo
└── projects/
    ├── laravel/
    │   ├── laravel-1.png              ← card thumbnails on main page
    │   ├── laravel-2.png
    │   ├── laravel-3.png
    │   ├── showcase-1.png             ← detail page screenshots
    │   └── showcase-2.png
    ├── smb/
    │   ├── smb-1.png
    │   ├── smb-2.png
    │   ├── smb-3.png
    │   └── showcase-1.png
    └── agencies/
        ├── agencies-1.png
        ├── agencies-2.png
        ├── agencies-3.png
        └── showcase-1.png
```

## Notes

- Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`
- Paths are defined in `src/data/portfolio.ts` — update them there if you rename files
- The build will throw a clear error if a referenced image is missing
