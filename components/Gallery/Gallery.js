import React from 'react'
import { View, Text, ScrollView, StyleSheet, ImageBackground, Dimensions,TouchableOpacity, Image } from 'react-native';
import {connect} from "react-redux";
var axios = require("axios");
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/AntDesign';
import {getPhotos} from '../../redux/actions/UploadPhoto'
import { FooterNavigation } from '../FooterNavigation/FooterNavigation';


export class Gallery extends React.Component {

    
    componentDidMount(){
        const {getPhotos} = this.props
        getPhotos({})
    }
    render(){
        console.log('PROPS',this.props.photos);
        let photos = this.props.photos
    
        
        return(
            <View style ={styles.wrapGallery}>
                <ScrollView showsVerticalScrollIndicator={false} style ={styles.content}>
                    <View style={styles.wrapAllBlockImages}>
                    {photos.map((i) => (
                        <View key = {i.id} style={styles.wrapBlockImage}>
                            <Image source={{uri: i.uri}} style={styles.image} />
                            <View style={styles.wrapLikeDate}>
                                <Stars
                                    default={0}
                                    count={1}
                                    backingColor={'#000'}
                                    fullStar={<Icon name={'heart'} style={[styles.starAbsolute]}/>}
                                    emptyStar={<Icon name={'hearto'}
                                    style={[styles.starAbsolute, styles.emptyStarAbsolute]}/>}
                                />
                                <Text style={styles.date}>{i.date}</Text>
                            </View>
                        </View>
                    ))}
                    </View>
                </ScrollView>
                <FooterNavigation props ={this.props.navigation}/>
            </View>
        )
    }
} 

const mapStateToProps = function (state) {
    return {
        photos: state.photo.photos
    }
}

export default connect(
    mapStateToProps,{getPhotos}
)(Gallery);

const styles = StyleSheet.create({
    wrapAllBlockImages: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10
    },
    wrapBlockImage: {
        width: 300,
        paddingTop:10,
        borderBottomColor: '#000',
        borderBottomWidth: 2
    },
    wrapLikeDate: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10
    },
    date: {
        fontSize: 30
    },
    image: {
        width: '100%', 
        height: 300
    },
    starAbsolute: {
        fontSize: 45,
        color: 'black',
        backgroundColor: 'transparent',
        textShadowColor: '#DAD9E2',
    },
    emptyStarAbsolute: {
        color: '#000',
    },
    wrapGallery: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        height: '90%',
    }

})