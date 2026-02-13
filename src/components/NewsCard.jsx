import React, { useState } from "react";
import { Clock, Bookmark, BookmarkCheck, Trash2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ article, featured = false }) => {
	const { _user, saveArticle, unsaveArticle, savedArticles } = useAuth();
	const navigate = useNavigate();
	const [isHoveringSaved, setIsHoveringSaved] = useState(false);

	const isSaved = savedArticles.some((a) => a.id === article.id);

	const handleAction = (e) => {
		e.preventDefault();
		if (isSaved) {
			unsaveArticle(article.id);
		} else {
			const result = saveArticle(article);
			if (result === "redirect") {
				navigate("/profile");
			}
		}
	};

	const addDefaultSrc = (ev) => {
		ev.target.src =
			"https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800";
	};

	const getButtonStyle = () => {
		if (isSaved) {
			return {
				width: "auto",
				display: "flex",
				alignItems: "center",
				gap: "8px",
				backgroundColor: isHoveringSaved ? "#8b0000" : "#d4a574",
				color: isHoveringSaved ? "#ffffff" : "#2c2416",
				transition: "all 0.2s ease",
			};
		}
		return {
			width: "auto",
			display: "flex",
			alignItems: "center",
			gap: "8px",
		};
	};

	return (
		<article className={featured ? "featured-card" : "news-card"}>
			<div className="card-image">
				<img src={article.image} alt={article.title} onError={addDefaultSrc} />
			</div>
			<div className="card-meta">
				<span className="category-badge">{article.category}</span>
				<span>
					<Clock size={12} /> {article.date}
				</span>
			</div>
			<h2 style={{ fontSize: featured ? "32px" : "20px", margin: "12px 0" }}>
				{article.title}
			</h2>
			<p style={{ flexGrow: 1 }}>{article.excerpt}</p>
			<div style={{ marginTop: "auto", paddingTop: "15px" }}>
				<button
					className={isSaved ? "" : "btn-dark"}
					onClick={handleAction}
					onMouseEnter={() => setIsHoveringSaved(true)}
					onMouseLeave={() => setIsHoveringSaved(false)}
					style={getButtonStyle()}
				>
					{isSaved ? (
						isHoveringSaved ? (
							<Trash2 size={18} />
						) : (
							<BookmarkCheck size={18} />
						)
					) : (
						<Bookmark size={18} />
					)}

					{isSaved ? (isHoveringSaved ? "Видалити" : "Збережено") : "Зберегти"}
				</button>
			</div>
		</article>
	);
};

export default NewsCard;