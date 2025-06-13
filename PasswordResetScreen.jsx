function PasswordResetScreen({ goTo }) {
  return (
    <div className="bg-white p-8 rounded shadow-md w-80">
      <h1 className="text-xl font-bold mb-4 text-teal-600">YOUR NEW PASSWORD</h1>
      <input className="w-full p-2 mb-2 border" placeholder="Enter Password" />
      <input className="w-full p-2 mb-2 border" type="password" placeholder="Re-enter Password" />
      <button className="w-full bg-teal-600 text-white py-2" onClick={() => goTo("created")}>RESET PASSWORD</button>
    </div>
  );
}

export default PasswordResetScreen;
