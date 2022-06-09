import { v4 as uuidv4 } from "uuid";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";

interface IButtonOption {
	id: string;
	text: string;
	path: string;
	Icon: any;
}

interface IOptionDropdown {
	id: string;
	text: string;
	info: {
		path: string;
		Icon: any;
		options: {
			id?: string | number;
			name?: string;
		}[];
	}[];
}

export const ButtonsOptions: IButtonOption[] = [
	{
		id: uuidv4(),
		text: "Movies",
		path: "home",
		Icon: MovieCreationOutlinedIcon,
	},
	{
		id: uuidv4(),
		text: "Trending",
		path: "trending",
		Icon: WhatshotOutlinedIcon,
	},
];

export const DropdownOptions: IOptionDropdown[] = [
	{
		id: uuidv4(),
		text: "Genres",
		info: [
			{
				path: "genres",
				Icon: LocalMoviesOutlinedIcon,
				options: [],
			},
		],
	},
	//2
	{
		id: uuidv4(),
		text: "Movies Type",
		info: [
			{
				path: "types",
				Icon: FormatListBulletedOutlinedIcon,
				options: [
					{
						id: uuidv4(),
						name: "Top",
					},
					{
						id: uuidv4(),
						name: "Popular",
					},
					{
						id: uuidv4(),
						name: "Upcoming",
					},
				],
			},
		],
	},

	//3
	{
		id: uuidv4(),
		text: "TV",
		info: [
			{
				path: "tv",
				Icon: LiveTvOutlinedIcon,
				options: [
					{
						id: uuidv4(),
						name: "On The Air",
					},
					{
						id: uuidv4(),
						name: "Airing Today",
					},
					{
						id: uuidv4(),
						name: "Popular",
					},

					{ id: uuidv4(), name: "Top Rated" },
				],
			},
		],
		//2
	},
];
