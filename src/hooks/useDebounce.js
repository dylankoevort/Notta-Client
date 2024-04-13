import { useState, useEffect } from "react";

/**
 * A custom hook to debounce a value.
 *
 * @param {any} value - The value to be debounced
 * @param {number} delay - The delay in milliseconds for debouncing
 * @return {any} The debounced value
 */
function useDebounce(value, delay) {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set timeout to update debounced value after delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear timeout if value or delay changes before timeout completes
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
