document.addEventListener('DOMContentLoaded', () => {
    console.log('Mean Girls Project Loaded');

    // MAIN CUSTOM CURSOR LOGIC
    const mainCursor = document.createElement('div');
    mainCursor.classList.add('custom-cursor');
    document.body.appendChild(mainCursor);

    document.addEventListener('mousemove', (e) => {
        mainCursor.style.display = 'block';
        mainCursor.style.left = e.clientX + 'px';
        mainCursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseout', (e) => {
        if (!e.relatedTarget && !e.toElement) {
            mainCursor.style.display = 'none';
        }
    });
    document.addEventListener('mouseenter', () => {
        mainCursor.style.display = 'block';
    });

    // Example interaction: Log clicks on movie items
    const movies = document.querySelectorAll('.movie-item');
    movies.forEach(movie => {
        movie.addEventListener('click', () => {
            console.log(`Clicked on: ${movie.innerText}`);
        });
    });
    // List Hover interaction
    const listItems = document.querySelectorAll('.large-text-list li');
    const hoverImgContainer = document.querySelector('.list-hover-img');
    const hoverPreviewImg = hoverImgContainer ? hoverImgContainer.querySelector('.hover-preview-img') : null;

    if (listItems.length && hoverImgContainer && hoverPreviewImg) {
        listItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const imgPath = item.getAttribute('data-image');
                if (imgPath) {
                    hoverPreviewImg.src = `../images/page/all_films/${imgPath}`;
                }
                hoverImgContainer.style.opacity = '1';
            });

            item.addEventListener('mouseleave', () => {
                hoverImgContainer.style.opacity = '0';
            });
        });
    }

    // Grid/List View Toggle
    const btnGrid = document.getElementById('btn-grid-view');
    const btnList = document.getElementById('btn-list-view');
    const viewGrid = document.getElementById('view-grid');
    const viewList = document.getElementById('view-list');

    if (btnGrid && btnList && viewGrid && viewList) {
        btnGrid.addEventListener('click', () => {
            viewGrid.classList.remove('hidden');
            viewList.classList.add('hidden');
            btnGrid.classList.add('active');
            btnList.classList.remove('active');
        });

        btnList.addEventListener('click', () => {
            viewGrid.classList.add('hidden');
            viewList.classList.remove('hidden');
            btnList.classList.add('active');
            btnGrid.classList.remove('active');
        });
    }

    // Docs Tabs Toggle
    const docsTabs = document.querySelectorAll('.docs-tabs .tab');
    const tabSections = document.querySelectorAll('.docs-articles[data-tab]');
    if (docsTabs.length && tabSections.length) {
        docsTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                docsTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const selected = tab.textContent.trim().toLowerCase();
                tabSections.forEach(section => {
                    if (selected === 'all') {
                        section.classList.remove('hidden');
                    } else if (section.dataset.tab === selected) {
                        section.classList.remove('hidden');
                    } else {
                        section.classList.add('hidden');
                    }
                });
            });
        });
    }

    // Detail List Cursor Hover Effect
    const listRows = document.querySelectorAll('.list-row');
    const cursorImg = document.getElementById('cursor-img');
    const cursorPosterImg = cursorImg ? cursorImg.querySelector('.cursor-poster-img') : null;

    if (listRows.length && cursorImg) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            cursorImg.style.transform = `translate(${x + 15}px, ${y + 15}px)`;
        });

        listRows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                const imgPath = row.getAttribute('data-image');
                if (cursorPosterImg && imgPath) {
                    cursorPosterImg.src = `../images/page/all_films/${imgPath}`;
                }
                cursorImg.style.opacity = '1';
            });

            row.addEventListener('mouseleave', () => {
                cursorImg.style.opacity = '0';
            });
        });
    }
});
