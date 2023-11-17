import { TodoProvider } from './context/todoContext';
import {Addtodo} from './components/addtodo'
import {Todolist} from './components/todolist'



function App() {



  return (
    <TodoProvider>
    
    <div className="  flex flex-col  items-center mt-10 p-10 rounded-lg shadow-md w-96 mx-auto  ">

      <h1 className='text-3xl font-semibold'>Todo Application</h1>
      <Addtodo/>
      <Todolist/> 

    </div>
    </TodoProvider>

  );
}

export default App;
