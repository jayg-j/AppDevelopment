function OTPVerifyScreen({ goTo }) {
  return (
    <div className="bg-white p-8 rounded shadow-md w-80 text-center">
      <h1 className="text-xl font-bold mb-4 text-teal-600">ENTER 4 DIGIT OTP</h1>
      <div className="flex justify-between mb-4">
        {[...Array(4)].map((_, i) => (
          <input key={i} maxLength={1} className="w-10 h-10 border text-center" />
        ))}
      </div>
      <button className="w-full bg-teal-600 text-white py-2" onClick={() => goTo("reset")}>RESET PASSWORD</button>
    </div>
  );
}

export default OTPVerifyScreen;
