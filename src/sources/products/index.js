const Airtable = require('airtable');
const slug = require('slug')

module.exports = function (api, opts) {
    const base = new Airtable({
        apiKey: opts.apiKey
    }).base(opts.base);

    api.loadSource(async store => {
        const contentType = store.addCollection({
            typeName: 'Product',
        });


        await base('Products').select().eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const item = record._rawJson;

                contentType.addNode({
                    id: item.id,
                    title: item.fields.Name,
                    slug: slug(item.fields.Name),
                    content: item.fields,
                });
            });
            fetchNextPage();
        });
    });
};