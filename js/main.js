(function(){
    const addItems = document.querySelector('.add-items');
    const itemList = document.querySelector('.plates');
    const items = [];

    const addItem = (e) => {
        e.preventDefault();
        const text = (e.currentTarget.querySelector('[name=item]')).value;
        const item = {
            text,
            done: false
        };
        items.push(item);
        populateList(items, itemList);
        // add the list to the local storage
        localStorage.setItem('items', JSON.stringify(items));
        e.currentTarget.reset();
    };

    // naming parameters in different names as items and itemList for sustainability
    const populateList = (plates = [], platesList) => {
        platesList.innerHTML = plates.map((plate, i) => {
            return `
                <li>
                    <input type="checkbox" data-index=${i} ${plate.done} ? 'checked' : '' />
                    <label>${plate.text}</label>
                </li>
            `;
        }).join('');
    };

    addItems.addEventListener('submit', addItem);
}());