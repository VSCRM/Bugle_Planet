import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ArticleLayout = ({ children, maxWidth = "800px", showBack = true }) => {
	const navigate = useNavigate();
	return (
		<div style={{ maxWidth: maxWidth, margin: "0 auto" }}>
			{showBack && (
				<button
					onClick={() => navigate(-1)}
					style={{
						background: "none",
						border: "none",
						display: "flex",
						alignItems: "center",
						gap: "5px",
						cursor: "pointer",
						marginBottom: "20px",
						fontWeight: "bold",
						color: "#2c2416",
						textTransform: "uppercase",
						fontSize: "12px",
					}}
				>
					<ArrowLeft size={18} /> НАЗАД
				</button>
			)}
			{children}
		</div>
	);
};

export default ArticleLayout;