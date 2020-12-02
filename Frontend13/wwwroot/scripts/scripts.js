document.addEventListener('DOMContentLoaded', () => {
    let navigation = document.querySelectorAll('.page-item');
    let currentPage = 1;
    let newPage = 1;

    navigation[0].addEventListener('click', chooseAndShowNewPage);
    navigation[1].addEventListener('click', chooseAndShowNewPage);
    navigation[2].addEventListener('click', chooseAndShowNewPage);
    navigation[3].addEventListener('click', chooseAndShowNewPage);
    navigation[4].addEventListener('click', chooseAndShowNewPage);

    function chooseAndShowNewPage(event) {
        switch (event.target.id) {
            case 'first-page-link':
                newPage = 1;
                break;
            case 'second-page-link':
                newPage = 2;
                break;
            case 'third-page-link':
                newPage = 3;
                break;
            case 'previous-page-link':
                if (currentPage != 1) {
                    newPage = currentPage - 1;
                }
                break;
            case 'next-page-link':
                if (currentPage != 3) {
                    newPage = currentPage + 1;
                }
                break;
        }
        showPage();
    }

    function showPage() {
        if (currentPage != newPage) {
            let target = $('#page-' + newPage);
            let prevTarget = $('#page-' + currentPage);
            prevTarget.collapse('hide');
            setTimeout(() => target.collapse('show'), 500);
            currentPage = newPage;
        }
    }
});