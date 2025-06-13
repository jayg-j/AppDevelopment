function FeedScreen() {
  return (
    <div className="bg-white p-6 rounded shadow-md w-[400px]">
      <h1 className="text-xl font-bold text-teal-600 mb-4">Feed</h1>
      {["First post", "Second post"].map((text, i) => (
        <div key={i} className="bg-gray-100 p-4 mb-3 rounded">
          <p>{text}</p>
          <div className="flex justify-end space-x-2 mt-2">
            <span>👍</span>
            <span>👎</span>
            <span>💬</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedScreen;
