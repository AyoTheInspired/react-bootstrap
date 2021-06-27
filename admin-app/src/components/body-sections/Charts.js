import React, { useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
import { Badge } from "react-bootstrap";
import { dailyFeedInfo } from "../../appData";
import "../content.css";

function Charts() {
	const [chartData, setChartData] = useState({
		options: {
			chart: {
				toolbar: {
					show: false,
				},
				stroke: {
					width: 0.5,
				},
				id: "basic-bar",
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"June",
					"July",
					"Aug",
					"Sept",
					"Oct",
					"Nov",
					"Dec",
				],
			},
		},
		series: [
			{
				name: "series-1",
				data: [30, 40, 45, 50, 49, 60, 70, 91],
			},
			{
				name: "series-2",
				data: [80, 49, 15, 57, 33, 60, 90, 94],
			},
		],
	});

	// this.state =

	return (
		<section className="d-flex justify-content-between align-items-center flex-wrap col-lg my-2 px-2">
			<Graph className="flexed app col-lg-7 col-md-10 col-sm-10 mr-4">
				<div className="row">
					<div className="mixed-chart">
						<div className="graph__title d-flex justify-content-between align-items-center">
							<h6 className="mb-0">Total Revenue</h6>
							<Badge className="bg-primary text-white p-1">Monthly</Badge>
						</div>
						<Chart
							options={chartData.options}
							series={chartData.series}
							type="line"
							width="700"
						/>
					</div>
				</div>
			</Graph>
			<DailyFeed className="feed__wrapper col-lg col-md-10 col-sm-10 d-flex flex-column p-3">
				<div className="d-flex justify-content-between align-items-center">
					<h5 className="feed__title mb-0">Daily Feed</h5>
					<Badge className="bg-primary text-white p-1">Today</Badge>
				</div>
				{dailyFeedInfo.map((feed) => {
					const { imgSrc, msg, timeBelow, detail, timeBadge } = feed;
					return (
						<div className="feed__container d-flex justify-content-center my-2 py-3 px-2">
							<div className="feed__image-container">
								<img
									src={imgSrc}
									alt=""
									width="36"
									height="36"
									className="feed__image mr-2"
								/>
							</div>
							<div>
								<p className="feed__msg mb-1">
									{msg}
									<small className="feed__time-below">{timeBelow}</small>
								</p>
								{detail && <p className="feed__detail p-2">{detail}</p>}
							</div>
							<div className="badge__container ml-auto">
								<Badge className="feed__time-badge">{timeBadge}</Badge>
							</div>
						</div>
					);
				})}
				{/* <div className="feed__button"> */}
				<btn className="mb-0 btn w-100 btn-primary text-center text-white">
					Load More
				</btn>
				{/* </div> */}
			</DailyFeed>
		</section>
	);
}

export default Charts;

const Graph = styled.div`
	background: #fff;
	padding: 25px;
`;

const DailyFeed = styled.div`
	background: #fff;
`;
