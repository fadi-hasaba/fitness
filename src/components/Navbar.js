import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
	<Stack
		direction="row"
		// justifyContent="space-around"
		sx={{
			gap: { sm: "123px", xs: "40px" },
			mt: { sm: "32px", xs: "20px" },
			justifyContent: "none",
		}}
		px="20px"
	>
		<Link
			to="/"
			sx={{
				width: { lg: "48px", xs: "30px" },
				height: { lg: "48px", xs: "30px" },
				margin: { lg: "0px 20px", xs: "0px 10px" },
			}}
		>
			<img
				src={Logo}
				alt="logo"
			/>
		</Link>
		<Stack
			direction="row"
			gap="40px"
			fontFamily="Alegreya"
			alignItems="flex-end"
			sx={{ fontSize: { lg: "26px", xs: "20px" } }}
		>
			<Link
				to="/"
				style={{
					textDecoration: "none",
					color: "#3A1212",
					borderBottom: "3px solid #FF2625",
				}}
			>
				Home
			</Link>
			{/* <Link
				to="/"
				style={{
					textDecoration: "none",
					color: "#3A1212",
					borderBottom: "3px solid #FF2625",
				}}
			>
				Exercises
			</Link> */}
			<Link
				to="/foods"
				style={{
					textDecoration: "none",
					color: "#3A1212",
					borderBottom: "3px solid #FF2625",
				}}
			>
				Foods
			</Link>
		</Stack>
	</Stack>
);

export default Navbar;
