(function(){
    const addItems = document.querySelector('.add-items');
    const itemList = document.querySelector('.plates');
    // Get the 'items' in the local storage and if they cannot find it, create the empty array.
    const items = JSON.parse(localStorage.getItem('items')) || [];
    
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
                    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                    <label for="item${i}">${plate.text}</label>
                </li>
            `;
        }).join('');
    };

    const toggleDone = (e) => {
        console.log(e.target);
        if(!e.target.matches('input')) return;
        const elem = e.target;
        const index = elem.dataset.index;
        items[index].done = !items[index].done;
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemList);
    }

    addItems.addEventListener('submit', addItem);
    itemList.addEventListener('click', toggleDone);
    populateList(items, itemList);
}());