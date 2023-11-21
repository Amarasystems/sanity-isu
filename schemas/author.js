// schemas/posts.js
export default {
    name: 'author',
    type: 'document',
    title: 'Нийтлэгч',
    fields: [
      {
        name: 'author_name',
        type: 'string',
        title: 'Нийтлэгчийн нэр',
        validation: (Rule) => Rule.required().error('Нэрийг заавал оруулна уу!')
      },
      {
        title: "Нийтлэгчийн зураг",
        name: "profile",
        type: "image",
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required().error('Зургийг заавал оруулна уу!')
      },
      {
        name: 'bio',
        type: 'string',
        title: 'Био',
      },
    //   {
    //     title: "Огноо",
    //     name: "date",
    //     type: "datetime",
    //     validation: (Rule) => Rule.required().error('Огноог заавал оруулна уу!')
    //   },
    //   {
    //     title: "Slug",
    //     name: "slug",
    //     type: "slug",
    //     options: {
    //       source: 'title', 
    //       slugify: input => input
    //         .toLowerCase()
    //         .replace(/\s+/g, '_')
    //         .slice(0, 200)
    //     }
    //   },

    ]
  }