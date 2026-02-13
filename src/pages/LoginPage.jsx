import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/Layouts/AuthLayout";
import AuthForm from "../components/Profile/AuthForm";

const LoginPage = () => {
	const { login, loading } = useAuth();
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
		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	const handleSubmit = (data) => {
		setAuthError("");
		const result = login(data.username, data.password);
		if (!result.success) {
			setAuthError(result.message);
		} else {
			navigate("/profile");
		}
	};

	return (
		<AuthLayout title="Вхід">
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
				isLogin={true}
				loading={loading}
				errors={errors}
				validate={validate}
				onSubmit={handleSubmit}
			/>
			<div style={{ marginTop: "20px", textAlign: "center" }}>
				<Link
					to="/register"
					style={{ color: "#2c2416", textDecoration: "underline" }}
				>
					Створити акаунт
				</Link>
			</div>
		</AuthLayout>
	);
};

export default LoginPage;