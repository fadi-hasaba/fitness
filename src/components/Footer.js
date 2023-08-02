import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => (
	<Box
		mt="80px"
		bgcolor="#FFF3F4"
	>
		<Stack
			gap="40px"
			sx={{ alignItems: "center" }}
			flexWrap="wrap"
			px="40px"
			pt="24px"
			direction="row"
			alignItems="center"
			justifyContent="center"
		>
			<img
				src={Logo}
				alt="logo"
				style={{ width: "200px", height: "41px" }}
			/>
			<Stack gap="10px">
				<a href="https://m.facebook.com/111228175375761/">
					<FacebookIcon
						style={{ width: "30px", height: "30px", m: "3px" }}
						className="social-media-icons"
						color="primary"
					/>
				</a>
				<a href="https://instagram.com/gold.gym99?igshid=OGY3MTU3OGY1Mw==">
					<InstagramIcon
						className="social-media-icons"
						sx={{ color: "#b71c1c" }}
						style={{ width: "30px", height: "30px", m: "3px" }}
					/>
				</a>
			</Stack>
		</Stack>

		<Typography
			variant="h5"
			sx={{ fontSize: { lg: "28px", xs: "20px" } }}
			mt="41px"
			textAlign="center"
			pb="40px"
		>
			Made with ❤️
		</Typography>
	</Box>
);

export default Footer;
