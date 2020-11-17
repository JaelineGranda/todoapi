import Todo from './../models/todo';

// promise for searching for todo items in server
const search = (filter) => {
    const promise = Todo.find(filter).exec();
    return promise;
};

// promise for getting todo items by id
const get = (id) => {
    const promise = Todo.findById(id).exec();
    return promise;
}

// promise for creating a new todo item
const create = (newTodo) => {
    const todo = new Todo(newTodo);
    const promise = todo.save()
    return promise;
}

// promise for finding todo item by id and updating
const update = (id, updatedTodo) => {
    const promise = Todo.findByIdAndUpdate(
        { _id: id },
        updatedTodo,
        { new: true }
    ).exec();
    return promise;
}

// promise for removing todo item by id
const remove = (id) => {
    const promise = Todo.remove({ _id: id}).exec();
    return promise;
}

export default {
    search: search,
    get: get,
    create: create,
    update: update,
    remove: remove
}