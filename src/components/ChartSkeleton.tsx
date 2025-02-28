export const ChartSkeleton = () => {
  return (
    <div
      role="status"
      className="flex h-full w-full animate-pulse items-end justify-between"
    >
      {[30, 50, 75, 40, 90, 60, 80].map((height, index) => (
        <div
          key={index}
          className="w-8 rounded-md bg-gray-200 dark:bg-gray-700"
          style={{ height: `${height}%` }}
        ></div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};
