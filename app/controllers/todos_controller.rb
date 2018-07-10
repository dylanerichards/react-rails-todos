class TodosController < ApplicationController
  def index
    @todos = Todo.all.sort_by(&:id)

    render json: { todos: @todos }
  end

  def update
    todo = Todo.find(params[:id])

    todo.update_attributes(todo_params)

    render json: todo
  end

  private

  def todo_params
    params.require(:todo).permit(:done)
  end
end
