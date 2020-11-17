import TodoRoute from './todo.route';

export default (app) => {
  app.use('/', TodoRoute);
};
