import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/Layouts/AuthLayout";
import AuthForm from "../components/Profile/AuthForm";

const RegisterPage = () => {
	const { register, loading } = useAuth();
	const [errors, setErrors] = useState({});
	const [authError, setAuthError] = useState("");
	const navigate = useNavigate();

	const validate = (name, value) => {
		let error = "";
		const latinCapitalStart = /^[A-Z][a-zA-Z0-9]*$/;
		if (
			name === "username" &&
			(value.length < 3 || !latinCapitalStart.test(value))
		)
			error = "Латиниця, від 3 симв., Велика";
		if (name === "password" && value.length < 6) error = "Мін. 6 символів";
		if (
			name === "nickname" &&
			(value.length < 2 || !latinCapitalStart.test(value))
		)
			error = "Латиниця, від 2 симв., Велика";
		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	const handleSubmit = (data) => {
		setAuthError("");
		const result = register(data.username, data.password, data.nickname);
		if (!result.success) {
			setAuthError(result.message);
		} else {
			navigate("/profile");
		}
	};

	return (
		<AuthLayout title="Реєстрація">
			{authError && (
				<div
					style={{
						color: "white",
						background: "#8b0000",
						padding: "10px",
						marginBottom: "15px",
						fontSize: "14px",
						textAlign: "center",
						border: "2px solid #2c2416",
					}}
				>
					{authError}
				</div>
			)}
			<AuthForm
				isLogin={false}
				loading={loading}
				errors={errors}
				validate={validate}
				onSubmit={handleSubmit}
			/>
			<div style={{ marginTop: "20px", textAlign: "center" }}>
				<Link
					to="/login"
					style={{ color: "#2c2416", textDecoration: "underline" }}
				>
					Вже є акаунт? Увійти
				</Link>
			</div>
		</AuthLayout>
	);
};

export default RegisterPage;