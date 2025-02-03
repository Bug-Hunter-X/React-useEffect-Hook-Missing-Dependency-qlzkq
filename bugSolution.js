```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [someOtherState, setSomeOtherState] = useState(false);

  useEffect(() => {
    console.log('Count updated:', count);
    console.log('someOtherState updated:', someOtherState);
  }, [count, someOtherState]); // <-- Added someOtherState to dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setSomeOtherState(!someOtherState)}>Toggle</button>
    </div>
  );
}
```