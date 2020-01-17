const ShoppingListService = {
    getAllShoppingItems(knex) {
        return knex.select('*').from('shopping_list')
    },

    getById(knex, id) {
        return knex 
            .select('*')
            .from('shopping_list')
            .where('id', id)
            .first()
    },

    deleteShoppingItem(knex, id) {
        return knex
            .from('shopping_list')
            .where({id})
            .delete()
    },

    updateShoppingItem(knex, id, updateData) {
        return knex 
            .from('shopping_list')
            .where({id})
            .update(updateData)
    },

    addShoppingItem(knex, newItem) {
        return knex 
            .insert(newItem)
            .into('shopping_list')
            .returning('*')
            .then(rows => rows[0])
    }
};

module.exports = ShoppingListService;