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
        console.log(item);
    };

    addItems.addEventListener('submit', addItem);
}());