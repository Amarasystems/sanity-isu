// schemas/posts.js
export default {
    name: 'category',
    type: 'document',
    title: 'Категори',
    fields: [
      {
        name: 'category_name',
        type: 'string',
        title: 'Категорийн нэр',
        validation: (Rule) => Rule.required().error('Категорийн нэрийг заавал оруулна уу!')
      },
      {
        title: "Огноо",
        name: "date",
        type: "datetime",
      },
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: 'category_name', 
          slugify: input => input
            .toLowerCase()
            .replace(/\s+/g, '_')
            .slice(0, 200)
        },
        validation: (Rule) => Rule.required().error('Slug-г заавал generate хийнэ үү!')
      },

    ]
  }