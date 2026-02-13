import React from "react";

const AuthLayout = ({ children, title }) => {
	return (
		<div
			style={{
				maxWidth: "450px",
				margin: "40px auto",
				padding: "30px",
				background: "#fff",
				border: "3px solid #2c2416",
				boxShadow: "10px 10px 0px #d4a574",
			}}
		>
			{title && (
				<h2
					style={{
						textAlign: "center",
						marginBottom: "25px",
						textTransform: "uppercase",
						letterSpacing: "1px",
						borderBottom: "2px solid #eee",
						paddingBottom: "10px",
					}}
				>
					{title}
				</h2>
			)}
			{children}
		</div>
	);
};

export default AuthLayout;