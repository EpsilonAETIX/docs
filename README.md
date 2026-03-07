# Aetech - FiveM Documentation

Advanced, optimized, and easy-to-use script documentation site for FiveM servers.

## Live Site

https://epsilonaetix.github.io/docs/

## Structure

```
epsilon/
├── index.html
├── 404.html
├── .nojekyll
├── assets/
│   ├── css/style.css
│   └── js/
│       ├── main.js
│       └── sidebar.js          ← Sidebar data (managed from a single file)
└── pages/
    ├── kurulum.html
    ├── genel-ayarlar.html
    ├── faq.html
    ├── changelog.html
    ├── epsilon-hud/
    │   ├── index.html          (overview)
    │   ├── kurulum.html        (installation)
    │   ├── config.html         (configuration)
    │   └── api.html            (exports & events)
    ├── epsilon-inventory/
    │   ├── index.html
    │   ├── kurulum.html
    │   ├── config.html
    │   ├── api.html
    │   └── items.html          (item management)
    └── epsilon-garage/
        ├── index.html
        ├── kurulum.html
        ├── config.html
        └── api.html
```

## Adding New Script Documentation

1. Create a new folder under `pages/` (e.g., `epsilon-phone/`)
2. Copy files from an existing script as a template
3. Add the new section to the `SCRIPTS` array in `assets/js/sidebar.js`
4. Commit & push

## License

MIT License
