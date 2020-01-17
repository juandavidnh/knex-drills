const ShoppingListService = require('../src/shopping-list-service')
const knex = require('knex')


describe(`Shopping list object`, () => {
    let db
    let testShoppingItems = [
        {
            id: 1,
            name: 'Felix',
            price: "13.00",
            category: 'Breakfast',
            checked: true,
            date_added: new Date('2000-05-22T16:28:32.615Z')
        },
        {
            id: 2,
            name: 'Bolitas de Gasa',
            price: "15.00",
            category: 'Lunch',
            checked: false,
            date_added: new Date('2024-06-01T15:03:31.494Z')
        },
        {
            id: 3,
            name: 'Comida de Poni',
            price: "5.00",
            category: 'Snack',
            checked: true,
            date_added: new Date('2010-11-13T01:04:45.222Z')
        },
    ]

    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
    })

    before(() => db('shopping_list').truncate())

    afterEach(() => db('shopping_list').truncate())

    after(() => db.destroy())

    describe(`CRUD should successfuly pass:`, () => {
        context('Given shopping list has data', () => {
            beforeEach(() => {
                return db
                    .into('shopping_list')
                    .insert(testShoppingItems)
            })
        
            it('getAllShoppingItems() should show all shopping items from shoppin_list table', () => {
                return ShoppingListService.getAllShoppingItems(db)
                    .then(actual =>
                        expect(actual).to.eql(testShoppingItems))
            })

            it('getById() should return a specific shopping item', () => {
                const secondId = 2
                const secontItem = testShoppingItems[secondId-1]

                return ShoppingListService.getById(db, secondId)
                    .then(actual => {
                        expect(actual).to.eql({
                            id: secondId,
                            name: secontItem.name,
                            price: secontItem.price,
                            category: secontItem.category,
                            checked: secontItem.checked,
                            date_added: secontItem.date_added,
                        })
                    })
            })

            it('deleteShoppingItem() should return array without selected item', () => {
                const shoppingItemId = 2

                return ShoppingListService.deleteShoppingItem(db, shoppingItemId)
                    .then(() => ShoppingListService.getAllShoppingItems(db))
                    .then(allShoppingItems => {
                        const expected = testShoppingItems.filter(item => item.id !== shoppingItemId)
                        expect(allShoppingItems).to.eql(expected)
                    })
            })

            it('updateShoppingItem() should uddate fields of an item', () => {
                const shoppingItemId = 3
                const newInfo ={
                    name: 'wabbit',
                    category: 'Breakfast',
                    checked: false,
                }

                return ShoppingListService.updateShoppingItem(db, shoppingItemId, newInfo)
                    .then(() => ShoppingListService.getById(db, shoppingItemId))
                    .then(shopping_item => {
                        expect(shopping_item).to.eql({
                            id: 3,
                            price: "5.00",
                            date_added: new Date('2010-11-13T01:04:45.222Z'),
                            ...newInfo,
                        })
                    })
            })
        })

        context('Given shopping list is empty', () => {
            it('getAllShoppingItems() resolves to an empty array', () => {
                return ShoppingListService.getAllShoppingItems(db)
                    .then(actual =>
                        expect(actual).to.eql([]))
            })

            it('addShoppingItem() will insert a new shopping item', () => {
                const newShoppingItem = {
                    name: 'Dog',
                    price: "18.00",
                    category: 'Lunch',
                    checked: false,
                    date_added: new Date('2013-05-22T15:28:32.615Z')
                }

                return ShoppingListService.addShoppingItem(db, newShoppingItem)
                    .then(actual => 
                        expect(actual).to.eql({
                            id: 1,
                            name: newShoppingItem.name,
                            price: newShoppingItem.price,
                            category: newShoppingItem.category,
                            checked: newShoppingItem.checked,
                            date_added: newShoppingItem.date_added,
                        })
                    )
            })
        })
    })
})