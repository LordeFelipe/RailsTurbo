class TodosController < ApplicationController
  def index
    @todos = Todo.all
    render inertia: 'todos/index/index', props: {todos: @todos}
  end

  def new
    render inertia: 'todos/new/index'
  end

  def create
    Todo.create!(name: params[:name])
    redirect_to todos_path
  end
end
