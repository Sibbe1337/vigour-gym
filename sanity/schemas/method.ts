import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'method',
  title: 'How We Work (Method)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ingress',
      title: 'Ingress',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Main Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'bioSignature',
      title: 'BioSignature Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string', initialValue: 'BioSignature' },
        { name: 'intro', title: 'Introduction', type: 'text', rows: 4 },
        {
          name: 'bullets',
          title: 'Key Points',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'faq',
          title: 'FAQ',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'question', title: 'Question', type: 'string' },
                { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
              ],
            },
          ],
        },
        { name: 'disclaimer', title: 'Disclaimer', type: 'text', rows: 2 },
      ],
    }),
  ],
})
