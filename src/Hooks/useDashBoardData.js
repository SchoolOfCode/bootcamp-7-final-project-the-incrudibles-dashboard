import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useDashBoardData() {
  const { data, error } = useSWR(
    `https://incrudibles.herokuapp.com/responses`,
    fetcher
  );

  return {
    responses: data,
    isLoading: !error && !data,
    isError: error,
  };
}
