class TodosController < ApplicationController
  def index
    @todos = Todo.all.order(created_at: :desc)

    render json: { todos: @todos }
  end

  def create
    todo = Todo.create(todo_params)

    render json: { todo: todo }
  end

  def update
    todo = Todo.find(params[:id])

    todo.update_attributes(todo_params)

    render json: todo
  end

  def destroy
    todo = Todo.find(params[:id])

    todo.destroy

    render json: todo
  end

  private

  def todo_params
    params.require(:todo).permit(:done, :title, :body)
  end
end
