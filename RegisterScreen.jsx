function RegisterScreen({ goTo }) {
  return (
    <div className="bg-white p-8 rounded shadow-md w-80">
      <h1 className="text-xl font-bold text-center mb-4 text-teal-600">CREATE NEW ACCOUNT</h1>
      <input className="w-full p-2 mb-2 border" placeholder="First Name" />
      <input className="w-full p-2 mb-2 border" placeholder="Last Name" />
      <input className="w-full p-2 mb-2 border" placeholder="Gender" />
      <input className="w-full p-2 mb-2 border" placeholder="Email" />
      <input className="w-full p-2 mb-2 border" type="password" placeholder="Password" />
      <button className="w-full bg-teal-600 text-white py-2" onClick={() => goTo("created")}>CREATE ACCOUNT</button>
    </div>
  );
}

export default RegisterScreen;
