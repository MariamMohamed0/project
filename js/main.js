document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("mobile-menu");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }

    const darkToggles = [
        document.getElementById('dark-toggle'),        
        document.getElementById('dark-toggle-mobile') 
    ];

    const root = document.documentElement; 
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        root.classList.add('dark');
        darkToggles.forEach(btn => {
            if (btn) btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        });
    }


    darkToggles.forEach(btn => {
        if (!btn) return;
        btn.addEventListener('click', () => {
            root.classList.toggle('dark');
            const isDark = root.classList.contains('dark');
            darkToggles.forEach(b => {
                if (b) b.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
            });
            try {
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            } catch(e) {}
        });
    });
});
