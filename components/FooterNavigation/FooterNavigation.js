import React from 'react';
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";


export class FooterNavigation extends React.Component{
    photo = () => {
        const {navigate} = this.props.props
        navigate('UploadPhoto')
    }
    gallery = () => {
        const {navigate} = this.props.props
        navigate('Gallery')
    }
    render() {
        return(
            <View style={styles.wrapFooter}>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.gallery}>
                        <Icon name={'list'} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.photo}>
                        <Icon name={'image'} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = function (state) {
    return {
      
    }
}

export default connect(
    mapStateToProps
)(FooterNavigation);

const styles = StyleSheet.create({
    icon: {
        fontSize: 50,
        color: '#fff'
    },
    text: {
        fontSize: 16,
        color: '#C8C7CC',
        fontWeight: 'bold'
    },
    active: {
        color: '#FAE902'
    },
    wrapFooter: {
        backgroundColor: 'gray',
        padding: 10,
        width: '100%',
        height: 70,
        // borderTopWidth: 1,
        // borderTopColor: '#000'
        // shadowColor: "#000",
        // shadowOffset: {
	    //     width: 0,
	    //     height: 2,
        // },
        // shadowOpacity: 0.23,
        // shadowRadius: 2.62,

        // elevation: 4,
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})