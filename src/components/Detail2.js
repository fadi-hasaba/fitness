import React from "react";
import { Typography, Stack, Button } from "@mui/material";

const Detail2 = ({ foodDetail }) => {
	return (
		<>
			<Stack
				gap="60px"
				sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
			>
				<img
					src={foodDetail.thumbnail_url}
					alt={foodDetail.name}
					loading="lazy"
					className="detail-image"
				/>
				<Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
					<Typography
						sx={{ fontSize: { lg: "64px", xs: "30px" } }}
						fontWeight={700}
						textTransform="capitalize"
					>
						{foodDetail.name}
					</Typography>
					<Typography
						sx={{ fontSize: { lg: "24px", xs: "18px" } }}
						color="#4F4C4C"
					>
						Healthy eating helps to maintain or improve overall health. We
						should consume a balanced diet consisting of essential nutrition:
						liquids, adequate proteins, essential fatty acids, vitamins,
						minerals, and calories.
					</Typography>
				</Stack>
			</Stack>
			{foodDetail?.instructions?.map((item) => (
				<Stack
					key={item.id}
					direction="row"
					gap="24px"
					alignItems="center"
					sx={{
						mt: "20px",
					}}
				>
					<Button
						sx={{
							background: "#FFF2DB",
							borderRadius: "50%",
							width: "100px",
							height: "100px",
							color: "black",
							p: "45px",
							fontSize: { lg: "30px", xs: "20px" },
						}}
					>
						{item.position}
					</Button>
					<Typography
						textTransform="capitalize"
						sx={{
							fontSize: { lg: "30px", xs: "20px" },
							bgcolor: "#f8bbd0",
							borderRadius: "20px",
							p: "10px",
						}}
					>
						{item.display_text}
					</Typography>
				</Stack>
			))}
		</>
	);
};

export default Detail2;
