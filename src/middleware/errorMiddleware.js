import { setError } from '../redux/slice/errorSlice'; 

const errorMiddleware = store => next => action => {

  if (action.type === 'user/createUser/rejected' ) {
    console.log(action,"action")
      store.dispatch(setError(!action.payload ? "Something went wrong" : action.payload));
    }
    return next(action);
  };
  
  export default errorMiddleware;
  