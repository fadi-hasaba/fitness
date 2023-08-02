import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { foodOptions, fetchData } from "../utils/fetchData";
import Detail2 from "../components/Detail2";

const FoodDetail = () => {
	const [foodDetail, setFoodDetail] = useState({});

	const { id } = useParams();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });

		const fetchFoodsData = async () => {
			const foodDbUrl = "https://tasty.p.rapidapi.com";

			const foodDetailData = await fetchData(
				`${foodDbUrl}/recipes/get-more-info?id=${id}`,
				foodOptions
			);
			setFoodDetail(foodDetailData);
		};

		fetchFoodsData();
	}, [id]);

	const fetchPromise = fetch(
		`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`,
		foodOptions
	);
	fetchPromise
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			return response.nutrition;
		});

	if (!foodDetail) return <div>No Data</div>;

	return (
		<Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
			<Detail2
				foodDetail={foodDetail}
				nutrition={foodDetail.nutrition}
			/>
		</Box>
	);
};

export default FoodDetail;
