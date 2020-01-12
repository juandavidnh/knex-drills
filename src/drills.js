require('dotenv').config()
const knex = require('knex');

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL,
})

function searchItem(searchTerm){
    knexInstance
        .select('name', 'price', 'date_added', 'category')
        .from('shopping_list')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(results => console.log(results))
}

function paginateItems(pageNumber) {
    const itemsPerPage = 6;
    const offset = itemsPerPage*(pageNumber-1);

    knexInstance
        .select('name', 'price', 'date_added', 'category')
        .from('shopping_list')
        .limit(itemsPerPage)
        .offset(offset)
        .then(results => console.log(results))
}

function itemsSince(daysAgo) {
    knexInstance
        .select('name', 'price', 'date_added', 'category')
        .from('shopping_list')
        .where(
            'date_added',
            '>',
            knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
        )
        .then(result => console.log(result))
}

function categorySum() {
    knexInstance
        .select('category')
        .sum('price AS total_price')
        .from('shopping_list')
        .groupBy('category')
        .then(result => console.log(result))
}

categorySum();