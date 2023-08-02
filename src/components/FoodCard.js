import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const FoodCard = ({ food }) => (
	<Link
		className="exercise-card"
		to={`/food/${food.id}`}
	>
		<Stack>
			<img
				src={food.thumbnail_url}
				alt={food.name}
				loading="lazy"
			/>
			<Stack direction="row">
				<Button
					sx={{
						ml: "21px",
						mt: "21px",
						color: "#fff",
						background: "#FCC757",
						fontSize: "14px",
						borderRadius: "20px",
						textTransform: "capitalize",
					}}
				>
					{food.tags[0].name}
				</Button>
				<Button
					sx={{
						ml: "21px",
						mt: "21px",
						color: "#fff",
						background: "#FFA9A9",
						fontSize: "14px",
						borderRadius: "20px",
						textTransform: "capitalize",
					}}
				>
					{food.tags[1].name}
				</Button>
			</Stack>
			<Typography
				ml="21px"
				color="#000"
				fontWeight="bold"
				sx={{ fontSize: { lg: "24px", xs: "20px" } }}
				mt="11px"
				pb="10px"
				textTransform="capitalize"
			>
				{food.name}
			</Typography>
		</Stack>
	</Link>
);

export default FoodCard;
