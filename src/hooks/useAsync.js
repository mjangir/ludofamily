import React, {useReducer, useCallback} from 'react';

function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false);
  React.useLayoutEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);
  return useCallback(
    (...args) => (mounted.current ? dispatch(...args) : undefined),
    [dispatch],
  );
}

const initialState = {status: 'idle', data: null, error: null};

function useAsync() {
  const [{status, data, error}, setState] = useReducer(
    (s, a) => ({...s, ...a}),
    initialState,
  );

  const safeSetState = useSafeDispatch(setState);

  const run = useCallback(
    callback => {
      safeSetState({status: 'pending'});
      const result = callback();
      safeSetState({data: result, status: 'resolved'});
    },
    [safeSetState],
  );

  const setData = useCallback(result => safeSetState({data: result}), [
    safeSetState,
  ]);
  const setError = useCallback(err => safeSetState({error: err}), [
    safeSetState,
  ]);
  const reset = useCallback(() => safeSetState(initialState), [safeSetState]);

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',

    setData,
    setError,
    error,
    status,
    data,
    run,
    reset,
  };
}

export default useAsync;
