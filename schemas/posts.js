// schemas/posts.js
export default {
    name: 'post',
    type: 'document',
    title: 'Постууд',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Постын гарчиг',
        validation: (Rule) => Rule.required().min(10).max(90).warning('Гарчигийн урт 10-90 тэмдэгтийн хооронд байна!')
      }, 
      {
        name: 'author',
        title: 'Нийтлэгч',
        type: 'reference',
        to: [{type: 'author'}],
        validation: (Rule) => Rule.required().error('Нийтлэгчийг заавал оруулна уу!')
      },
      {
        title: "Постын зураг",
        name: "cover_image",
        type: "image",
        fields: [
            {
              title: "Зургийн тайлбар",
              name: "alt",
              type: "text",
            },
        ],
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required().warning('Зураг оруулна уу!')
      },
      {
        name: 'content',
        type: 'array',
        title: 'Постын агуулга',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                title: "Зургийн тайлбар",
                name: "alt",
                type: "text",
                options: {
                  isHighlighted: true,
                }
              },
              {
                title: "Зургийн байрлал",
                name: "position",
                type: "string",
                options: {
                  isHighlighted: true,
                  list: [
                    {title: "Голлуулж", value: 'center'},
                    {title: "Баруун талд", value: 'right'},
                    {title: "Зүүн талд", value: 'left'},
                  ],
                  layout: "radio",
                }
              },
          ],
          options: {
            hotspot: true,
          },
          }
        ]
      },
      {
        title: "Категори",
        name: "category",
        type: "reference",
        to: [{type: "category"}],
        validation: (Rule) => Rule.required().error('Категорийг заавал оруулна уу!')
      },
      {
        title: "Огноо",
        name: "date",
        type: "datetime",
        validation: (Rule) => Rule.required().error('Огноог заавал оруулна уу!')
      },
      {
        title: "Slug",
        name: "slug",
        type: "slug",
        options: {
          source: 'title', 
          slugify: input => input
            .toLowerCase()
            .replace(/\s+/g, '_')
            .slice(0, 200)
        },
        validation: (Rule) => Rule.required().error('Слагийг заавал generate хийнэ үү!')
      },
    ]
  }