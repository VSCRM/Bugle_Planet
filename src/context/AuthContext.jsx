import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const savedUser = localStorage.getItem("user");
		return savedUser ? JSON.parse(savedUser) : null;
	});

	const [savedArticles, setSavedArticles] = useState(() => {
		const savedUser = localStorage.getItem("user");
		if (savedUser) {
			const username = JSON.parse(savedUser).username;
			const saved = localStorage.getItem(`saved_${username}`);
			return saved ? JSON.parse(saved) : [];
		}
		return [];
	});

	const [pendingArticle, setPendingArticle] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (user) {
			localStorage.setItem("user", JSON.stringify(user));

			if (pendingArticle) {
				// eslint-disable-next-line react-hooks/set-state-in-effect
				setSavedArticles((prev) => {
					if (!prev.find((a) => a.id === pendingArticle.id)) {
						const newList = [...prev, pendingArticle];
						localStorage.setItem(
							`saved_${user.username}`,
							JSON.stringify(newList),
						);
						return newList;
					}
					return prev;
				});
				setPendingArticle(null);
			}
		} else {
			localStorage.removeItem("user");
			setSavedArticles([]);
		}
	}, [user, pendingArticle]);

	useEffect(() => {
		if (user) {
			localStorage.setItem(
				`saved_${user.username}`,
				JSON.stringify(savedArticles),
			);
		}
	}, [savedArticles, user]);

	const login = (username, password) => {
		setLoading(true);
		const storedData = localStorage.getItem(`user_db_${username}`);
		if (storedData) {
			const foundUser = JSON.parse(storedData);
			if (foundUser.password === password) {
				setUser(foundUser);
				const saved = localStorage.getItem(`saved_${username}`);
				if (saved) setSavedArticles(JSON.parse(saved));
				setLoading(false);
				return { success: true };
			}
			setLoading(false);
			return { success: false, message: "Невірний пароль!" };
		}
		setLoading(false);
		return { success: false, message: "Користувача не існує!" };
	};

	const register = (username, password, nickname) => {
		setLoading(true);
		const existingUser = localStorage.getItem(`user_db_${username}`);
		if (existingUser) {
			setLoading(false);
			return { success: false, message: "Цей логін вже зайнятий!" };
		}
		const newUser = { username, password, nickname };
		localStorage.setItem(`user_db_${username}`, JSON.stringify(newUser));
		setUser(newUser);
		setSavedArticles([]);
		setLoading(false);
		return { success: true };
	};

	const logout = () => {
		setUser(null);
		setSavedArticles([]);
		setPendingArticle(null);
	};

	const updateUser = (newData) => {
		const updatedUser = { ...user, ...newData };
		setUser(updatedUser);
		localStorage.setItem(
			`user_db_${user.username}`,
			JSON.stringify(updatedUser),
		);
	};

	const saveArticle = (article) => {
		if (!user) {
			setPendingArticle(article);
			return "redirect";
		}
		if (!savedArticles.find((a) => a.id === article.id)) {
			setSavedArticles((prev) => [...prev, article]);
		}
		return "saved";
	};

	const unsaveArticle = (id) => {
		setSavedArticles((prev) => prev.filter((a) => a.id !== id));
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				register,
				logout,
				loading,
				savedArticles,
				saveArticle,
				unsaveArticle,
				updateUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);