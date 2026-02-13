import React, { useState } from "react";
import { Search } from "lucide-react";
import { MOCK_NEWS } from "../data/newsData";
import NewsCard from "../components/NewsCard";

const SearchPage = () => {
	const [query, setQuery] = useState("");
	const [date, setDate] = useState("");

	const filteredResults = MOCK_NEWS.filter((article) => {
		const textMatch =
			article.title?.toLowerCase().includes(query.toLowerCase()) ||
			article.excerpt?.toLowerCase().includes(query.toLowerCase());

		const dateMatch = date === "" || article.date === date;

		return textMatch && dateMatch;
	});

	return (
		<div>
			<div
				className="auth-box"
				style={{ maxWidth: "100%", marginBottom: "30px" }}
			>
				<form
					onSubmit={(e) => e.preventDefault()}
					style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}
				>
					<div style={{ flex: 2, position: "relative" }}>
						<label
							htmlFor="news-search"
							className="sr-only"
							style={{ display: "none" }}
						>
							Пошук новин
						</label>
						<Search
							size={18}
							style={{ position: "absolute", left: "12px", top: "12px" }}
						/>
						<input
							id="news-search"
							name="searchQuery"
							className="input-field"
							style={{ paddingLeft: "40px" }}
							placeholder="Пошук новин..."
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							autoComplete="off"
						/>
					</div>

					<div style={{ flex: 1 }}>
						<label
							htmlFor="date-filter"
							className="sr-only"
							style={{ display: "none" }}
						>
							Фільтр за датою
						</label>
						<input
							id="date-filter"
							name="searchDate"
							type="date"
							className="input-field"
							style={{ width: "100%" }}
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
				</form>
			</div>

			<div className="news-grid">
				{filteredResults.length > 0 ? (
					filteredResults.map((article) => (
						<NewsCard key={article.id} article={article} />
					))
				) : (
					<p style={{ textAlign: "center", width: "100%", gridColumn: "1/-1" }}>
						Нічого не знайдено за вашим запитом.
					</p>
				)}
			</div>
		</div>
	);
};

export default SearchPage;