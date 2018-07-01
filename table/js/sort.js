'use strict';

function handleTableClick(event) {
    const th = event.target;
    const table = event.currentTarget;

    let thList = document.querySelectorAll('th');

    Array.from(thList).forEach(item => {
        if (item !== th) {
            item.removeAttribute(`data-dir`);
        }else {
            item.dataset.dir = th.dataset.dir ? -th.dataset.dir : 1;
            sortTable(item.dataset.propName, item.dataset.dir);
            table.dataset.sortBy = th.dataset.propName;
        }
    });

}