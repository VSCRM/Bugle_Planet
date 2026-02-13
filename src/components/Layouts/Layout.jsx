import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
	return (
		<div
			className="app-wrapper"
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				backgroundColor: "#fcfaf7",
			}}
		>
			<Header />
			<main
				className="container"
				style={{
					flex: "1",
					padding: "40px 20px",
					maxWidth: "1200px",
					margin: "0 auto",
					width: "100%",
				}}
			>
				{children}
			</main>
			<footer
				style={{
					textAlign: "center",
					padding: "30px",
					background: "#2c2416",
					color: "#f5f0e8",
					borderTop: "4px solid #d4a574",
					marginTop: "50px",
				}}
			>
				<p style={{ fontWeight: "bold", letterSpacing: "1px", margin: 0 }}>
					© 2026 BUGLE PLANET
				</p>
				<p style={{ fontSize: "13px", opacity: 0.8, marginTop: "5px" }}>
					Калуш, Івано-Франківська обл. • Незалежне видання
				</p>
			</footer>
		</div>
	);
};

export default Layout;