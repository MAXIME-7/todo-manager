import { useState } from "react";

interface Props {
  onSwitch: () => void;
}

export default function Register({ onSwitch }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log(form);
  };

  const input =
    "w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500";
  const label = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-5"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">Create an account</h1>

        <div>
          <label className={label}>Full name</label>
          <input name="name" required value={form.name} onChange={handleChange} className={input} />
        </div>
        <div>
          <label className={label}>Email</label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} className={input} />
        </div>
        <div>
          <label className={label}>Password</label>
          <input name="password" type="password" required value={form.password} onChange={handleChange} className={input} />
        </div>
        <div>
          <label className={label}>Confirm password</label>
          <input name="confirmPassword" type="password" required value={form.confirmPassword} onChange={handleChange} className={input} />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button type="button" onClick={onSwitch} className="text-indigo-600 hover:underline">
            Log in
          </button>
        </p>
      </form>
    </div>
  );
}