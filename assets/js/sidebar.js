// ===== Sidebar Navigation Data =====
// Yeni script eklemek icin sadece bu dosyayi duzenle
const NAV_DATA = [
    {
        title: 'Baslangic',
        items: [
            { label: 'Ana Sayfa', icon: 'fa-home', href: '/index.html' },
            { label: 'Kurulum Rehberi', icon: 'fa-download', href: '/pages/kurulum.html' },
            { label: 'Genel Ayarlar', icon: 'fa-cog', href: '/pages/genel-ayarlar.html' },
        ]
    },
    {
        title: 'Epsilon HUD',
        items: [
            { label: 'Genel Bakis', icon: 'fa-desktop', href: '/pages/epsilon-hud/index.html' },
            { label: 'Kurulum', icon: 'fa-download', href: '/pages/epsilon-hud/kurulum.html' },
            { label: 'Yapilandirma', icon: 'fa-sliders-h', href: '/pages/epsilon-hud/config.html' },
            { label: 'API / Exports', icon: 'fa-plug', href: '/pages/epsilon-hud/api.html' },
        ]
    },
    {
        title: 'Epsilon Inventory',
        items: [
            { label: 'Genel Bakis', icon: 'fa-box-open', href: '/pages/epsilon-inventory/index.html' },
            { label: 'Kurulum', icon: 'fa-download', href: '/pages/epsilon-inventory/kurulum.html' },
            { label: 'Yapilandirma', icon: 'fa-sliders-h', href: '/pages/epsilon-inventory/config.html' },
            { label: 'API / Exports', icon: 'fa-plug', href: '/pages/epsilon-inventory/api.html' },
            { label: 'Item Yonetimi', icon: 'fa-cube', href: '/pages/epsilon-inventory/items.html' },
        ]
    },
    {
        title: 'Epsilon Garage',
        items: [
            { label: 'Genel Bakis', icon: 'fa-car', href: '/pages/epsilon-garage/index.html' },
            { label: 'Kurulum', icon: 'fa-download', href: '/pages/epsilon-garage/kurulum.html' },
            { label: 'Yapilandirma', icon: 'fa-sliders-h', href: '/pages/epsilon-garage/config.html' },
            { label: 'API / Exports', icon: 'fa-plug', href: '/pages/epsilon-garage/api.html' },
        ]
    },
    {
        title: 'Destek',
        items: [
            { label: 'SSS', icon: 'fa-question-circle', href: '/pages/faq.html' },
            { label: 'Degisiklik Gunlugu', icon: 'fa-history', href: '/pages/changelog.html' },
        ]
    }
];

// ===== Base Path Detection =====
function getBasePath() {
    const path = window.location.pathname;
    // GitHub Pages repo name detection
    const repoMatch = path.match(/^\/([^/]+)\//);
    if (repoMatch && repoMatch[1] !== 'pages') {
        return '/' + repoMatch[1];
    }
    return '';
}

// ===== Render Sidebar =====
function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const basePath = getBasePath();
    const currentPath = window.location.pathname;

    let html = `
        <div class="sidebar-header">
            <div class="logo"><i class="fas fa-bolt"></i><span>Epsilon Scripts</span></div>
            <span class="version-badge">v1.0</span>
        </div>
        <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" id="searchInput" placeholder="Dokuman ara...">
        </div>
        <nav class="sidebar-nav">
    `;

    NAV_DATA.forEach(section => {
        html += `<div class="nav-section"><div class="nav-section-title">${section.title}</div>`;
        section.items.forEach(item => {
            const fullHref = basePath + item.href;
            const isActive = currentPath === fullHref || currentPath.endsWith(item.href);
            html += `<a href="${fullHref}" class="nav-link${isActive ? ' active' : ''}" data-search="${item.label.toLowerCase()}">
                <i class="fas ${item.icon}"></i> ${item.label}
            </a>`;
        });
        html += `</div>`;
    });

    html += `
        </nav>
        <div class="sidebar-footer">
            <a href="https://github.com/EpsilonAETIX" target="_blank" class="footer-link"><i class="fab fa-github"></i> GitHub</a>
            <a href="https://discord.gg/epsilon" target="_blank" class="footer-link"><i class="fab fa-discord"></i> Discord</a>
        </div>
    `;

    sidebar.innerHTML = html;

    // Init search after render
    initSidebarSearch();
}

function initSidebarSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.nav-link').forEach(link => {
            const text = link.getAttribute('data-search') || link.textContent.toLowerCase();
            link.style.display = (!query || text.includes(query)) ? 'flex' : 'none';
        });
    });

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
}

// Render on load
document.addEventListener('DOMContentLoaded', renderSidebar);
