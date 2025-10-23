import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'nutrition',
  title: 'Nutrition & Supplements',
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
      name: 'supplements',
      title: 'Recommended Supplements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Supplement Name', type: 'string' },
            { name: 'link', title: 'Link (Optional)', type: 'url' },
            { name: 'note', title: 'Note', type: 'text', rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'text',
      rows: 3,
      initialValue: 'Detta är inte medicinsk rådgivning. Rådgör med din vårdgivare vid medicinska frågor eller innan du börjar använda nya tillskott.',
    }),
  ],
})
