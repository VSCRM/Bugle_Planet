import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";

const Header = () => {
	const navigate = useNavigate();

	const getFormattedDate = () => {
		const today = new Date();
		const days = [
			"Неділя",
			"Понеділок",
			"Вівторок",
			"Середа",
			"Четвер",
			"П'ятниця",
			"Субота",
		];
		const months = [
			"Січня",
			"Лютого",
			"Березня",
			"Квітня",
			"Травня",
			"Червня",
			"Липня",
			"Серпня",
			"Вересня",
			"Жовтня",
			"Листопада",
			"Грудня",
		];

		return `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
	};

	return (
		<header className="header">
			<div className="header-top">
				<div className="header-item">
					<Calendar size={14} />
					<span>{getFormattedDate()}</span>
				</div>
				<div className="header-item">
					<MapPin size={14} />
					<span>Калуш</span>
				</div>
			</div>

			<div className="header-main">
				<div className="logo" onClick={() => navigate("/")}>
					<img
						src="/Logo.png"
						alt="Лого"
						className="logo-img"
						onError={(e) => {
							e.target.style.display = "none";
						}}
					/>
					<div>
						<h1 className="logo-title">BUGLE PLANET</h1>
					</div>
				</div>
			</div>

			<nav className="nav">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? "nav-link active" : "nav-link"
					}
				>
					Головна
				</NavLink>
				<NavLink
					to="/search"
					className={({ isActive }) =>
						isActive ? "nav-link active" : "nav-link"
					}
				>
					Пошук
				</NavLink>
				<NavLink
					to="/profile"
					className={({ isActive }) =>
						isActive ? "nav-link active" : "nav-link"
					}
				>
					Профіль
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;