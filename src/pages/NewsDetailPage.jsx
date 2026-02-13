import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MOCK_NEWS as newsData } from "../data/newsData";
import { Clock, User, Bookmark, BookmarkCheck } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import ArticleLayout from "../components/Layouts/ArticleLayout";

const NewsDetailPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { saveArticle, unsaveArticle, savedArticles } = useAuth();
	const article = newsData.find((n) => n.id === parseInt(id));
	const isSaved = savedArticles.some((a) => a.id === article?.id);

	const handleSaveClick = () => {
		if (isSaved) {
			unsaveArticle(article.id);
		} else {
			const result = saveArticle(article);
			if (result === "redirect") {
				navigate("/login");
			}
		}
	};

	if (!article)
		return (
			<ArticleLayout>
				<h2>Новину не знайдено</h2>
			</ArticleLayout>
		);

	return (
		<ArticleLayout>
			<img
				src={article.image}
				alt={article.title}
				style={{ width: "100%", height: "auto", border: "3px solid #2c2416" }}
			/>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "20px",
				}}
			>
				<span className="category-badge">{article.category}</span>
				<button
					className="btn-dark"
					onClick={handleSaveClick}
					style={{
						width: "auto",
						backgroundColor: isSaved ? "#d4a574" : "#2c2416",
					}}
				>
					{isSaved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}{" "}
					{isSaved ? "ЗБЕРЕЖЕНО" : "ЗБЕРЕГТИ"}
				</button>
			</div>
			<h1
				style={{
					fontSize: "42px",
					margin: "20px 0",
					textTransform: "uppercase",
				}}
			>
				{article.title}
			</h1>
			<div
				style={{
					display: "flex",
					gap: "20px",
					color: "#666",
					borderBottom: "2px solid #eee",
					paddingBottom: "10px",
					marginBottom: "20px",
				}}
			>
				<span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
					<User size={14} /> {article.author}
				</span>
				<span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
					<Clock size={14} /> {article.date}
				</span>
			</div>
			<div
				style={{ fontSize: "19px", lineHeight: "1.7", textAlign: "justify" }}
			>
				<p style={{ fontWeight: "bold" }}>{article.excerpt}</p>
				<p>{article.content || ""}</p>
			</div>
		</ArticleLayout>
	);
};

export default NewsDetailPage;