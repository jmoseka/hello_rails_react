import { getGreetingAsync } from "../store/greetingReducer";

const Greeting = () => {
  const dispatch = useDispatch();
  const { loading, error, greet } = useSelector((state) => state.greeting);


  useEffect(() => {
    dispatch(getGreetingAsync());
  }, []);


  const handleGreeting = () => {
    dispatch(getGreetingAsync());
  };

  return (
    <div className="div">
      <h1>{greet}</h1>
      <button onClick={handleGreeting}>Get Greeting</button>
    </div>
  );
};

export default Greeting;