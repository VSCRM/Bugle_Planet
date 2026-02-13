import React, { useState } from "react";
import { Check, X, Eye, EyeOff } from "lucide-react";

const EditProfileForm = ({ user, onSave, onCancel, errors, validate }) => {
	const [showPass, setShowPass] = useState(false);
	const [editForm, setEditForm] = useState({
		username: user.username,
		nickname: user.nickname,
		password: user.password,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditForm({ ...editForm, [name]: value });
		validate(name, value);
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSave(editForm);
			}}
		>
			<h3
				style={{
					marginTop: 0,
					borderBottom: "1px solid #eee",
					paddingBottom: "10px",
				}}
			>
				НАЛАШТУВАННЯ
			</h3>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: "15px",
					marginBottom: "15px",
				}}
			>
				<div>
					<label style={{ fontSize: "11px", fontWeight: "bold" }}>ЛОГІН</label>
					<input
						name="username"
						value={editForm.username}
						onChange={handleChange}
						className="input-field"
					/>
					{errors.username && (
						<span style={{ color: "#8b0000", fontSize: "10px" }}>
							{errors.username}
						</span>
					)}
				</div>
				<div>
					<label style={{ fontSize: "11px", fontWeight: "bold" }}>
						НІКНЕЙМ
					</label>
					<input
						name="nickname"
						value={editForm.nickname}
						onChange={handleChange}
						className="input-field"
					/>
					{errors.nickname && (
						<span style={{ color: "#8b0000", fontSize: "10px" }}>
							{errors.nickname}
						</span>
					)}
				</div>
			</div>
			<div style={{ marginBottom: "20px" }}>
				<label style={{ fontSize: "11px", fontWeight: "bold" }}>
					НОВИЙ ПАРОЛЬ
				</label>
				<div style={{ position: "relative" }}>
					<input
						name="password"
						type={showPass ? "text" : "password"}
						value={editForm.password}
						onChange={handleChange}
						className="input-field"
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
						{showPass ? <EyeOff size={16} /> : <Eye size={16} />}
					</button>
				</div>
				{errors.password && (
					<span style={{ color: "#8b0000", fontSize: "10px" }}>
						{errors.password}
					</span>
				)}
			</div>
			<div style={{ display: "flex", gap: "10px" }}>
				<button
					type="submit"
					className="btn-dark"
					style={{ width: "auto", padding: "10px 25px" }}
					disabled={Object.values(errors).some((e) => e)}
				>
					<Check size={16} /> ЗБЕРЕГТИ
				</button>
				<button
					type="button"
					onClick={onCancel}
					style={{
						background: "#eee",
						border: "2px solid #2c2416",
						padding: "10px 25px",
						cursor: "pointer",
						fontWeight: "bold",
					}}
				>
					<X size={16} /> СКАСУВАТИ
				</button>
			</div>
		</form>
	);
};

export default EditProfileForm;