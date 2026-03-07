// ===== Sidebar Navigation Data =====
// To add a new script, just add a new entry to SCRIPTS array
const NAV_LINKS = [
    { label: 'Home', icon: 'fa-home', href: '/index.html' },
    { label: 'Installation', icon: 'fa-download', href: '/pages/kurulum.html' },
    { label: 'General Settings', icon: 'fa-cog', href: '/pages/genel-ayarlar.html' },
];

const SCRIPTS = [
    {
        name: 'Epsilon HUD',
        icon: 'fa-desktop',
        items: [
            { label: 'Overview', href: '/pages/epsilon-hud/index.html' },
            { label: 'Installation', href: '/pages/epsilon-hud/kurulum.html' },
            { label: 'Configuration', href: '/pages/epsilon-hud/config.html' },
            { label: 'API / Exports', href: '/pages/epsilon-hud/api.html' },
        ]
    },
    {
        name: 'Epsilon Inventory',
        icon: 'fa-box-open',
        items: [
            { label: 'Overview', href: '/pages/epsilon-inventory/index.html' },
            { label: 'Installation', href: '/pages/epsilon-inventory/kurulum.html' },
            { label: 'Configuration', href: '/pages/epsilon-inventory/config.html' },
            { label: 'API / Exports', href: '/pages/epsilon-inventory/api.html' },
            { label: 'Item Management', href: '/pages/epsilon-inventory/items.html' },
        ]
    },
    {
        name: 'Epsilon Garage',
        icon: 'fa-car',
        items: [
            { label: 'Overview', href: '/pages/epsilon-garage/index.html' },
            { label: 'Installation', href: '/pages/epsilon-garage/kurulum.html' },
            { label: 'Configuration', href: '/pages/epsilon-garage/config.html' },
            { label: 'API / Exports', href: '/pages/epsilon-garage/api.html' },
        ]
    },
    {
        name: 'Aetix Computer',
        icon: 'fa-laptop-code',
        items: [
            { label: 'Overview', href: '/pages/aetix-computer/index.html' },
            { label: 'Installation', href: '/pages/aetix-computer/installation.html' },
            { label: 'Configuration', href: '/pages/aetix-computer/configuration.html' },
            { label: 'Permissions', href: '/pages/aetix-computer/permissions.html' },
            { label: 'Modules', href: '/pages/aetix-computer/modules.html' },
            { label: 'Bridge / API', href: '/pages/aetix-computer/bridge.html' },
            { label: 'Database', href: '/pages/aetix-computer/database.html' },
        ]
    }
];

const SUPPORT_LINKS = [
    { label: 'FAQ', icon: 'fa-question-circle', href: '/pages/faq.html' },
    { label: 'Changelog', icon: 'fa-history', href: '/pages/changelog.html' },
];

const SOCIAL_LINKS = [
    { label: 'Discord', icon: 'fab fa-discord', href: 'https://discord.gg/aetech', color: '#5865F2' },
    { label: 'Shop', icon: 'fas fa-shopping-cart', href: 'https://aetech.tebex.io', color: '#3fb950' },
    { label: 'YouTube', icon: 'fab fa-youtube', href: 'https://youtube.com/@aetech', color: '#FF0000' },
    { label: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/EpsilonAETIX', color: '#8b949e' },
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

    const isActive = (href) => currentPath === basePath + href || currentPath.endsWith(href);
    const link = (href, icon, label, extraClass = '') => {
        const active = isActive(href) ? ' active' : '';
        return `<a href="${basePath}${href}" class="nav-link${active}${extraClass ? ' ' + extraClass : ''}" data-search="${label.toLowerCase()}">
            <i class="fas ${icon}"></i> ${label}
        </a>`;
    };

    let html = `
        <div class="sidebar-header">
            <div class="logo"><i class="fas fa-bolt"></i><span>Aetech</span></div>
            <span class="version-badge">v1.0</span>
        </div>
        <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" id="searchInput" placeholder="Search docs...">
        </div>
        <nav class="sidebar-nav">
    `;

    // Top links
    NAV_LINKS.forEach(item => {
        html += link(item.href, item.icon, item.label);
    });

    // Script dropdowns
    html += `<div class="nav-section-title" style="margin-top:18px;">Scripts</div>`;
    SCRIPTS.forEach(script => {
        const anyActive = script.items.some(i => isActive(i.href));
        html += `<div class="nav-dropdown${anyActive ? ' open' : ''}">`;
        html += `<div class="nav-dropdown-toggle${anyActive ? ' active' : ''}" data-search="${script.name.toLowerCase()}">
            <span><i class="fas ${script.icon}"></i> ${script.name}</span>
            <i class="fas fa-chevron-down dropdown-arrow"></i>
        </div>`;
        html += `<div class="nav-dropdown-content"${anyActive ? ' style="display:block"' : ''}>`;
        script.items.forEach(item => {
            const active = isActive(item.href) ? ' active' : '';
            html += `<a href="${basePath}${item.href}" class="nav-link dropdown-link${active}" data-search="${item.label.toLowerCase()} ${script.name.toLowerCase()}">
                ${item.label}
            </a>`;
        });
        html += `</div></div>`;
    });

    // Support links
    html += `<div class="nav-section-title" style="margin-top:18px;">Support</div>`;
    SUPPORT_LINKS.forEach(item => {
        html += link(item.href, item.icon, item.label);
    });

    html += `</nav>`;

    // Social footer
    html += `<div class="sidebar-footer">`;
    SOCIAL_LINKS.forEach(s => {
        html += `<a href="${s.href}" target="_blank" class="footer-link" style="color:${s.color}" title="${s.label}"><i class="${s.icon}"></i></a>`;
    });
    html += `</div>`;

    sidebar.innerHTML = html;

    // Init dropdown toggles
    sidebar.querySelectorAll('.nav-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const dropdown = toggle.closest('.nav-dropdown');
            dropdown.classList.toggle('open');
            const content = dropdown.querySelector('.nav-dropdown-content');
            content.style.display = dropdown.classList.contains('open') ? 'block' : 'none';
        });
    });

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
