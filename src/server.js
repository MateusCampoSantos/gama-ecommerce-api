import express from 'express'; 
import routes from './routes';
const app = express();
const port = 3333; 

//swagger
import expressJSDocSwagger from 'express-jsdoc-swagger';

//swagger
const options = {
  info: {
    version: '1.0.0',
    title: 'Gama ecommerce api',
    description: '',  
    license: {
      name: 'MIT',
    },
  },
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './**/*.js',
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/api-docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,
  // Open API JSON Docs endpoint.
  apiDocsPath: '/v3/api-docs',
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {},
};

expressJSDocSwagger(app)(options);

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})