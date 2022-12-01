const ItemCtrl = (function (){
    //private
    //itemCtrl module construct
    const Item = function (id, mame, calories){
        this.id = id
        this.name = name
        this.calories = calories
    }
    //data structure
    const data = {
        items: [
            new Item(0, 'Steak Dinner', 1200),
            new Item(1, 'Cookie', 200),
            new Item(2, 'Eggs', 300)
        ],
        total: 0
    }

    //public methods
    return {
        logData: function (){
            return data
        },
        getTotalCalories: function (){
            let total = 0
            data.items.forEach(function (item){
                total = total + item.calories
            })
            data.total = total
            return data.total
        },
        getItems: function (){
            return data.items
        },
        addItem: function (name, calories){
            let ID;
            if(data.items.length > 0){

            }
        }
    }

})();

const UICtrl = (function (){
    return{
        populateItemList: function (items){
            let html = ''
            items.forEach(function (item){
                html += `<li id="item-${item.id}"><strong>${item.name}: </strong><em>${item.calories}</em>Calories</li>`
            })
            document.querySelector('ul').innerHTML = html
        },
        showTotalCalories: function (totalCalories){
            document.querySelector('.total-calories').textContent = totalCalories
        },
        getItemInput: function (){
            const userInput = {
                name: (document.querySelector('#item-name').value),
                calories: document.querySelector('item-calories').value
            }

        }
    }

})()

const App = (function (){
    const itemAddSubmit = function (event){
        console.log('data is submitted')
        const userInput = UICtrl.getItemInput()
        UICtrl.getItemInput()
        event.preventDefault()
    }


    return{
        init: function (){
            const items = ItemCtrl.getItems()
            console.log(items)
            UICtrl.populateItemList(items)
            const totalCalories = ItemCtrl.getTotalCalories()
            UICtrl.showTotalCalories(totalCalories)

            document.querySelector('.add-btn').addEventListener('click', itemAddSubmit)
        }
    }
})(ItemCtrl, UICtrl)

App.init()