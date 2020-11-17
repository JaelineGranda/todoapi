import todoService from './../services/todo.service';

const index = (request, response) => {
    todoService.search({})
        .then((todos) => {
            response.status(200);
            response.json(todos);
        })
        .catch(handleError(response));
};

const get = (request, response) => {
    const id = request.params.id;
    todoService.get(id)
        .then((todo) => {
            response.status(200);
            response.json(todo);
        })
        .catch(handleError(response));
};

const create = (request, response) => {
    const newTodo = Object.assign({}, request.body);
    todoService.create(newTodo)
        .then((todo) => {
            response.status(200);
            response.json(todo);
        })
        .catch(handleError(response));
};

const update = (request, response) => {
    const id = request.params.id;
    const updateTodo = Object.assign({}, request.body);
    todoService.update(id, updateTodo)
        .then((todo) => {
            response.status(200);
            response.json(todo);
        })
        .catch(handleError(response));
};

const remove = (request, response) => {
    const id = request.params.id;
    todoService.remove(id)
        .then((todo) => {
            response.status(200);
            response.json({});
                message: "Delete Successful"
        })
        .catch(handleError(response));
};

const handleError = (response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}

export default {
    index: index,
    get: get,
    create: create,
    update: update,
    remove: remove
}