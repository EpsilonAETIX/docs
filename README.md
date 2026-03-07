# Epsilon Scripts - FiveM Dokumanlar

FiveM sunuculari icin gelismis, optimize edilmis ve kolay kullanilabilir scriptlerin dokuman sitesi.

## Canli Site

https://epsilonaetix.github.io/docs/

## Yapi

```
epsilon/
├── index.html
├── 404.html
├── .nojekyll
├── assets/
│   ├── css/style.css
│   └── js/
│       ├── main.js
│       └── sidebar.js          ← Sidebar verileri (tek dosyadan yonetim)
└── pages/
    ├── kurulum.html
    ├── genel-ayarlar.html
    ├── faq.html
    ├── changelog.html
    ├── epsilon-hud/
    │   ├── index.html          (genel bakis)
    │   ├── kurulum.html        (kurulum)
    │   ├── config.html         (yapilandirma)
    │   └── api.html            (exports & events)
    ├── epsilon-inventory/
    │   ├── index.html
    │   ├── kurulum.html
    │   ├── config.html
    │   ├── api.html
    │   └── items.html          (item yonetimi)
    └── epsilon-garage/
        ├── index.html
        ├── kurulum.html
        ├── config.html
        └── api.html
```

## Yeni Script Dokumani Ekleme

1. `pages/` altinda yeni bir klasor olustur (orn: `epsilon-phone/`)
2. Mevcut bir scriptin dosyalarini sablon olarak kopyala
3. `assets/js/sidebar.js` dosyasindaki `NAV_DATA` dizisine yeni bolumu ekle
4. Commit & push yap

## Lisans

MIT License
