import React, { useState } from "react";
import { LogOut, Bookmark, Trash2, Settings } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import ArticleLayout from "../components/Layouts/ArticleLayout";
import EditProfileForm from "../components/Profile/EditProfileForm";

const ProfilePage = () => {
	const { user, logout, savedArticles, unsaveArticle, updateUser } = useAuth();
	const [isEditing, setIsEditing] = useState(false);
	const [errors, setErrors] = useState({});

	const validate = (name, value) => {
		let error = "";
		const latinCapitalStart = /^[A-Z][a-zA-Z0-9]*$/;
		if (
			name === "username" &&
			(value.length < 3 || !latinCapitalStart.test(value))
		)
			error = "Латиниця, від 3 симв., Велика";
		if (
			name === "nickname" &&
			(value.length < 2 || !latinCapitalStart.test(value))
		)
			error = "Латиниця, від 2 симв., Велика";
		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	if (!user) return <Navigate to="/login" />;

	return (
		<ArticleLayout showBack={false}>
			<div
				style={{
					background: "#fff",
					padding: "30px",
					border: "2px solid #2c2416",
					boxShadow: "8px 8px 0px #d4a574",
				}}
			>
				{isEditing ? (
					<EditProfileForm
						user={user}
						errors={errors}
						validate={validate}
						onCancel={() => setIsEditing(false)}
						onSave={(data) => {
							updateUser(data);
							setIsEditing(false);
						}}
					/>
				) : (
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
							<img
								src={`https://ui-avatars.com/api/?name=${user.nickname}&background=d4a574&color=fff`}
								style={{ width: "80px", border: "2px solid #2c2416" }}
								alt="avatar"
							/>
							<div>
								<h2 style={{ margin: 0 }}>{user.nickname}</h2>
								<p style={{ color: "#666" }}>@{user.username}</p>
								<button
									onClick={() => setIsEditing(true)}
									style={{
										background: "none",
										border: "none",
										color: "#d4a574",
										cursor: "pointer",
										fontWeight: "bold",
										fontSize: "12px",
									}}
								>
									<Settings size={14} /> НАЛАШТУВАННЯ
								</button>
							</div>
						</div>
						<button
							onClick={logout}
							className="btn-dark"
							style={{ width: "auto" }}
						>
							<LogOut size={16} /> ВИХІД
						</button>
					</div>
				)}
			</div>

			<div style={{ marginTop: "40px" }}>
				<h3
					style={{ borderBottom: "2px solid #2c2416", paddingBottom: "10px" }}
				>
					<Bookmark size={20} /> ЗБЕРЕЖЕНІ
				</h3>
				{savedArticles.length > 0 ? (
					savedArticles.map((art) => (
						<div
							key={art.id}
							style={{
								display: "flex",
								justifyContent: "space-between",
								padding: "15px",
								borderBottom: "1px solid #eee",
							}}
						>
							<div>
								<div style={{ fontWeight: "bold" }}>{art.title}</div>
								<Link
									to={`/news/${art.id}`}
									style={{ fontSize: "12px", color: "#d4a574" }}
								>
									ЧИТАТИ →
								</Link>
							</div>
							<button
								onClick={() => unsaveArticle(art.id)}
								style={{ background: "none", border: "none", color: "#8b0000" }}
							>
								<Trash2 size={20} />
							</button>
						</div>
					))
				) : (
					<p style={{ padding: "20px", textAlign: "center", color: "#666" }}>
						У вас поки немає збережених статей.
					</p>
				)}
			</div>
		</ArticleLayout>
	);
};

export default ProfilePage;