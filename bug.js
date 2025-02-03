```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count updated:', count);
  }, [count]); // <-- Missing dependency: someOtherState

  const [someOtherState, setSomeOtherState] = useState(false);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setSomeOtherState(!someOtherState)}>Toggle</button>
    </div>
  );
}
```