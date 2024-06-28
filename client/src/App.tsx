import { useContext } from "react";
import Form from "./components/Form";
import { TodoContext } from "./components/TodoProvider";
import { ContextType } from "./types";

function App() {
  const { users, isLoading, error } = useContext<ContextType>(TodoContext);

  return (
    <div className="max-w-[600px] mx-auto">
      <Form />

      {!users.length && !isLoading && !error ? (
        <div className="h-20 flex justify-center items-center">
          <p className="text-center text-white mt-4">No users found</p>
        </div>
      ) : error && !isLoading ? (
        <p className="text-center text-red-500 text-sm">{error}</p>
      ) : users.length && !isLoading ? (
        <div className="mt-4">
          {users.map((user) => (
            <div
              className="p-5 bg-[#15101C] rounded-xl flex justify-between items-center mb-3"
              key={user.number}
            >
              <p className="text-[#9E78CF]">{user.email}</p>
              <p className="text-[#9E78CF]">{user.number}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-20 flex justify-center items-center">
          <p className="text-center text-white mt-4">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default App;
