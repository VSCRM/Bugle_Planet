import React, { useState } from "react";
import { MOCK_NEWS, CATEGORIES } from "../data/newsData";
import NewsCard from "../components/NewsCard";

const HomePage = () => {
	const [cat, setCat] = useState("Всі");
	const filtered =
		cat === "Всі" ? MOCK_NEWS : MOCK_NEWS.filter((n) => n.category === cat);

	return (
		<>
			<div
				style={{
					display: "flex",
					gap: "8px",
					marginBottom: "30px",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				{CATEGORIES.map((c) => (
					<button
						key={c}
						onClick={() => setCat(c)}
						className="btn-dark"
						style={{
							width: "auto",
							background: cat === c ? "#d4a574" : "#2c2416",
						}}
					>
						{c}
					</button>
				))}
			</div>
			<div className="news-grid">
				{filtered.map((item) => (
					<NewsCard key={item.id} article={item} featured={item.featured} />
				))}
			</div>
		</>
	);
};

export default HomePage;