// schemas/stories.js
export default {
    title: 'Стори',
    name: 'story',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Сторины гарчиг',
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
        title: "Сторид оруулах зураг",
        name: "story_image",
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
        title: "Огноо",
        name: "date",
        type: "datetime",
        validation: (Rule) => Rule.required().error('Огноог заавал оруулна уу!')
      },
    ]
  }