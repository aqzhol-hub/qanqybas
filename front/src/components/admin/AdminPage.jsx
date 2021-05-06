import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { RiDatabase2Fill,RiAdminFill } from "react-icons/ri";
import {admin_router} from "./AdminRouter";
import {Link, Route, Switch} from "react-router-dom";
import CountryTable from "./country/CountryTable";
import CountryEdit from "./country/CountryEdit";
import CityTable from './city/CItyTable'
import CityEdit from "./city/CityEdit";
import Input from "./place/PlaceTable";
import PlaceTable from "./place/PlaceTable";
import PlaceEdit from "./place/PlaceEdit";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
                <Divider />
                    <List>
                        {
                            admin_router.map((route, index) => (
                                <ListItem button key={index}>
                                    <ListItemIcon><h3><RiDatabase2Fill /></h3></ListItemIcon>
                                    <ListItemText>
                                        <Link to={route.link}>{route.name}</Link>
                                    </ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <RiAdminFill />
                        Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <Switch>
                    <Route path='/admin/country' exact={true} strict={true}>
                        <CountryTable />
                    </Route>
                    <Route path='/admin/country/:id' exact={true} strict={true}>
                        <CountryEdit />
                    </Route>

                    <Route path='/admin/city' exact={true} strict={true}>
                        <CityTable />
                    </Route>
                    <Route path='/admin/city/:id' exact={true} strict={true}>
                        <CityEdit />
                    </Route>

                    <Route path='/admin/places' exact={true} strict={true}>
                        <PlaceTable />
                    </Route>
                    <Route path='/admin/places/:id' exact={true} strict={true}>
                        <PlaceEdit />
                    </Route>

                </Switch>
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
