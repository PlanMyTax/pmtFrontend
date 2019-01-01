import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	root: {
		width: "100%"
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing.unit * 2,
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing.unit * 3,
			width: "auto"
		}
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit",
		width: "100%"
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: 200
		}
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	avatar: {
		margin: 0,
	},
	button: {
		margin: theme.spacing.unit,
		border: '1px solid white',
		color: '#fff',
		'&:hover': {
			backgroundColor: '#242f44',
			borderColor: '#fff',
		  },
		  fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		  ]
	},
});

class PrimarySearchAppBar extends React.Component {
	state = {
		anchorEl: null,
		mobileMoreAnchorEl: null
	};

	handleProfileMenuOpen = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleMenuClose = () => {
		this.setState({ anchorEl: null });
		this.handleMobileMenuClose();
	};

	handleMobileMenuOpen = event => {
		this.setState({ mobileMoreAnchorEl: event.currentTarget });
	};

	handleMobileMenuClose = () => {
		this.setState({ mobileMoreAnchorEl: null });
	};

	render() {
		const { anchorEl, mobileMoreAnchorEl } = this.state;
		const { classes } = this.props;
		const isMenuOpen = Boolean(anchorEl);
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

		const renderMenu = (
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				open={isMenuOpen}
				onClose={this.handleMenuClose}
			>
				<MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
				<MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
			</Menu>
		);

		const renderMobileMenu = (
			<Menu
				anchorEl={mobileMoreAnchorEl}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				open={isMobileMenuOpen}
				onClose={this.handleMobileMenuClose}
			>
				<MenuItem>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<MailIcon />
						</Badge>
					</IconButton>
					<p>Messages</p>
				</MenuItem>
				<MenuItem>
					<IconButton color="inherit">
						<Badge badgeContent={11} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<p>Notifications</p>
				</MenuItem>
				<MenuItem onClick={this.handleProfileMenuOpen}>
					<IconButton color="inherit">
						{/* <AccountCircle /> */}
						{/* <Avatar alt="Raghav" src="../../Raghvendra_Dixit.jpg" className={classes.avatar} /> */}
						<Avatar alt="Raghav" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcg_MPW_G_TTe2t6Fwcc2CHSBVSjv-48Ps7fFLjwh5Q5Y6gnp" className={classes.avatar} />
					</IconButton>
					<p>Profile</p>
				</MenuItem>
			</Menu>
		);

		return (
			<div className={classes.root}>
				<AppBar position="static" style={{ background: "#2E3B55" }}>
					<Toolbar>
						<IconButton
							className={classes.menuButton}
							color="inherit"
							aria-label="Open drawer"
						>
							<MenuIcon />
						</IconButton>
						<Typography
							className={classes.title}
							variant="h6"
							color="inherit"
							noWrap
						>
							<b>Lekha Jokha</b>
						</Typography>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
							/>
						</div>
						{/* <button className = "btn btn-primary">Search</button> */}
						<Button size="small" variant="outlined" className={classes.button}>Search</Button>
						<div className={classes.grow} />
						<div className={classes.sectionDesktop} style ={{marginRight: '2px'}}>
							<Typography style={{ paddingTop: '14px' }}
								className={classes.title}
								variant="h6"
								color="inherit"
								noWrap
							>
							Howdy! Raghav
            				</Typography>
							<IconButton color="inherit">
								<Badge badgeContent={4} color="secondary">
									<MailIcon />
								</Badge>
							</IconButton>
							<IconButton color="inherit">
								<Badge badgeContent={11} color="secondary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
							<IconButton
								aria-owns={isMenuOpen ? "material-appbar" : undefined}
								aria-haspopup="true"
								onClick={this.handleProfileMenuOpen}
								color="inherit"
							>
								{/* <AccountCircle /> */}
								<Avatar alt="Raghav" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcg_MPW_G_TTe2t6Fwcc2CHSBVSjv-48Ps7fFLjwh5Q5Y6gnp" className={classes.avatar} />
								{/* <Avatar alt="Raghav" src="../../../public/profile.png" className={classes.avatar} /> */}
							</IconButton>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton
								aria-haspopup="true"
								onClick={this.handleMobileMenuOpen}
								color="inherit"
							>
								<MoreIcon />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				{renderMenu}
				{renderMobileMenu}
			</div>
		);
	}
}

PrimarySearchAppBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimarySearchAppBar);