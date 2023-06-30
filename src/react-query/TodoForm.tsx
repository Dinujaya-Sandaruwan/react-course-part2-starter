import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>(
    async (todo: Todo) => {
      const response = await axios.post<Todo>(
        "https://jsonplaceholder.typicode.com/todos",
        todo
      );
      return response.data;
    },
    {
      onMutate: (newTodo: Todo) => {
        const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];

        // Updating the data in cache
        queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
          newTodo,
          ...(todos || []),
        ]);

        if (ref.current) {
          ref.current.value = "";
        }

        return { previousTodos };
      },
      onSuccess: (savedTodo, newTodo) => {
        queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
          todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
        );
      },
      onError: (error, newTodo, context) => {
        if (!context) return;

        queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
      },
    }
  );

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();

          if (!ref.current?.value) {
            alert("Please enter a todo");
            return;
          }

          if (ref.current && ref.current.value) {
            addTodo.mutate({
              id: 0,
              title: ref.current.value,
              completed: false,
              userId: 1,
            });
          }
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addTodo.isLoading}>
            {addTodo.isLoading ? "Saving..." : "Add Todo"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
