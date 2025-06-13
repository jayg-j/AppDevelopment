function AccountCreatedScreen({ goTo }) {
  return (
    <div className="bg-white p-8 rounded shadow-md w-80 text-center">
      <div className="text-green-600 text-4xl mb-4">✔️</div>
      <h1 className="text-xl font-bold text-green-700">ACCOUNT CREATED!</h1>
      <button className="mt-4 text-teal-600 underline" onClick={() => goTo("login")}>Go to Login</button>
    </div>
  );
}

export default AccountCreatedScreen;
