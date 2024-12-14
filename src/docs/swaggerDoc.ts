
import { NODE_URL } from '@config/vars'
import swaggerjsdoc from 'swagger-jsdoc'

const options = {
  
    definition: {
      openapi:"3.0.0",
      info: {
        title: 'Workflow Api doc.',
        version: '2.0.0',
        description: 'This is a Workflow Api doc.',
      },
      servers: [
        {
          url: NODE_URL,
        },
      ],
    },
    apis: ['./dist/modules/*/*.router.js']
  }

export const Doc = swaggerjsdoc(options)
