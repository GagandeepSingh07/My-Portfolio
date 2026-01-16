/* ==========================
   BADGE TEXT UPDATE
   ========================== */

const badgeTextMap = {
    'recent-badge': 'Recent',
    'replaced-badge': 'Replaced',
    'new-badge': 'New',
    'old-badge': 'Old'
};

Object.entries(badgeTextMap).forEach(([cls, text]) => {
    document.querySelectorAll(`div.${cls}`).forEach(el => {
        el.textContent = text;
    });
});