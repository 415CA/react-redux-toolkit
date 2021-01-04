import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, dataSelector } from '../../../redux/slices/Data';

const useFetchData = (initialUrl, initialQuery) => {
  const [url, setUrl] = useState(initialUrl);
  const [query, setQuery] = useState(initialQuery);

  const { data, isLoading, hasError } = useSelector(dataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(url, query));
  }, [url]);

  return [{ data, isLoading, hasError }, setUrl, setQuery];
};

export default useFetchData;
