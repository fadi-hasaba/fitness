import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { foodOptions, fetchData } from "../utils/fetchData";
import FoodCard from "../components/FoodCard";
import Loader from "../components/Loader";

const Foods = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [foodPerPage] = useState(6);
	const [tags, setTags] = useState([]);
	const [foods, setFoods] = useState([]);
	const [details, setDetails] = useState([]);

	useEffect(() => {
		const fetchFoodData = async () => {
			let foodData = [];

			foodData = await fetchData(
				"https://tasty.p.rapidapi.com/recipes/list?from=0&size=60&tags=healthy",
				foodOptions
			);

			setFoods(foodData.results);
		};

		fetchFoodData();
	}, [setFoods]);

	// Pagination
	const indexOfLastFood = currentPage * foodPerPage;
	const indexOfFirstFood = indexOfLastFood - foodPerPage;
	const currentFood = foods.slice(indexOfFirstFood, indexOfLastFood);

	const paginatee = (event, value) => {
		setCurrentPage(value);
	};

	if (!currentFood.length) return <Loader />;

	return (
		<Box
			id="food"
			sx={{ mt: { lg: "109px" } }}
			mt="50px"
			p="20px"
		>
			<Typography
				variant="h4"
				fontWeight="bold"
				sx={{ fontSize: { lg: "44px", xs: "30px" } }}
				mb="46px"
			>
				Healthy Foods you might love
			</Typography>
			<Stack
				direction="row"
				sx={{ gap: { lg: "107px", xs: "50px" } }}
				flexWrap="wrap"
				justifyContent="center"
			>
				{currentFood.map((food, idx) => (
					<FoodCard
						key={idx}
						food={food}
						tags={tags}
						setTags={setTags}
					/>
				))}
			</Stack>
			<Stack
				sx={{ mt: { lg: "114px", xs: "70px" } }}
				alignItems="center"
			>
				{foods.length > 6 && (
					<a href="#food">
						<Pagination
							color="standard"
							shape="rounded"
							defaultPage={1}
							count={Math.ceil(foods.length / foodPerPage)}
							page={currentPage}
							onChange={paginatee}
							size="large"
						/>
					</a>
				)}
			</Stack>
		</Box>
	);
};

export default Foods;
