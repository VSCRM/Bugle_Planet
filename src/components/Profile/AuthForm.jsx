import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const AuthForm = ({ isLogin, onSubmit, loading, errors, validate }) => {
	const [showPass, setShowPass] = useState(false);
	const [form, setForm] = useState({
		username: "",
		password: "",
		nickname: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
		validate(name, value);
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(form);
			}}
		>
			<div style={{ marginBottom: "15px" }}>
				<input
					name="username"
					placeholder="ЛОГІН"
					className={`input-field ${errors.username ? "input-error" : ""}`}
					onChange={handleChange}
					required
				/>
				{errors.username && (
					<span style={{ color: "#8b0000", fontSize: "11px" }}>
						{errors.username}
					</span>
				)}
			</div>
			{!isLogin && (
				<div style={{ marginBottom: "15px" }}>
					<input
						name="nickname"
						placeholder="НІКНЕЙМ"
						className={`input-field ${errors.nickname ? "input-error" : ""}`}
						onChange={handleChange}
						required
					/>
					{errors.nickname && (
						<span style={{ color: "#8b0000", fontSize: "11px" }}>
							{errors.nickname}
						</span>
					)}
				</div>
			)}
			<div style={{ marginBottom: "20px" }}>
				<div style={{ position: "relative" }}>
					<input
						name="password"
						type={showPass ? "text" : "password"}
						placeholder="ПАРОЛЬ"
						className={`input-field ${errors.password ? "input-error" : ""}`}
						onChange={handleChange}
						required
					/>
					<button
						type="button"
						onClick={() => setShowPass(!showPass)}
						style={{
							position: "absolute",
							right: 10,
							top: 12,
							background: "none",
							border: "none",
						}}
					>
						{showPass ? <EyeOff size={18} /> : <Eye size={18} />}
					</button>
				</div>
				{errors.password && (
					<span style={{ color: "#8b0000", fontSize: "11px" }}>
						{errors.password}
					</span>
				)}
			</div>
			<button
				type="submit"
				className="btn-dark"
				disabled={loading || Object.values(errors).some((e) => e)}
			>
				{loading ? (
					<Loader2 className="animate-spin" size={20} />
				) : isLogin ? (
					"УВІЙТИ"
				) : (
					"ЗАРЕЄСТРУВАТИСЯ"
				)}
			</button>
		</form>
	);
};

export default AuthForm;