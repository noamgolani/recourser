import React from "react";

const mockR = [
	{
		id: 1,
		tags: ["react", "sass"],
		views: 12,
		type: "blog",
		time: "2h",
		name: "integrate sass and react",
	},
	{
		id: 2,
		tags: ["express"],
		views: 304,
		type: "video",
		time: "30m",
		name: "express 101",
	},
	{
		id: 3,
		tags: ["typescript", "react", "express"],
		views: 43,
		type: "example",
		time: "1.5h",
		name: "full stack complete",
	},
];

function HomePage() {
	return (
		<div className="page">
			<div className="container">
				<div>
					<input type="text" />
				</div>
				<div>
					{mockR.map(({ name, id, tags, views, type, time }) => (
						<div key={id} className="resource-item">
							<div className="flex-between">
								<span>{name}</span>
								<span><b>{type}</b></span>
							</div>
							<div className="flex-between">
								<div>
									{tags.map((tag) => (
										<span className="tag">{tag}</span>
									))}
								</div>
								<span>{views} views</span>
								<span>{time} read</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default HomePage;
