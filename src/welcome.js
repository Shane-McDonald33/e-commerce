import React, { Component } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import itemData from './itemData';



  

class WelcomePage extends Component {
    constructor(props) {
        super(props);
        const useStyles = makeStyles((theme) => ({
            root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden',
              backgroundColor: theme.palette.background.paper,
            },
            imageList: {
              width: 500,
              height: 450,
            },
            icon: {
              color: 'rgba(255, 255, 255, 0.54)',
            },
          }));
    
    export default function TitleBarImageList() {
        const classes = useStyles()
    }}
    render() {
        return (
            <h1>Welcome Shopper</h1>
        )
            
        
    }
}



function mapStateToProps (state) {
    return {}
}


function mapDispatchToProps (dispatch) {
    return {
        choose_item: function (data) {
            dispatch(choose_item(data))
        }
    }
}

var ConnectedWelcomePage = connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
export default ConnectedWelcomePage
        