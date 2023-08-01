class TodosController < ApplicationController
  def index
    @todos = Todo.all
    render inertia: 'todos/index/index', props: {todos: @todos}
  end
end
