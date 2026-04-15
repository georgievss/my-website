(() => {
    const pageLinks = document.querySelectorAll(".page-links a");
    const overlay = document.querySelector(".page-transition-overlay");

    requestAnimationFrame(() => {
        document.body.classList.add("page-ready");
    });

    if (!overlay || pageLinks.length === 0) {
        return;
    }

    pageLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            if (
                event.defaultPrevented ||
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
            ) {
                return;
            }

            const href = link.getAttribute("href");
            if (!href || href.startsWith("#")) {
                return;
            }

            event.preventDefault();
            document.body.classList.add("is-transitioning");

            window.setTimeout(() => {
                window.location.href = href;
            }, 320);
        });
    });
})();
