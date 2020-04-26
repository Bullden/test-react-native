import React from 'react'
import { View, Text, ScrollView, StyleSheet, ImageBackground, Dimensions,TouchableOpacity,Image } from 'react-native';
import {connect} from "react-redux";
import moment from "moment";
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import {loadPhoto} from '../../redux/actions/UploadPhoto'
import { FooterNavigation } from '../FooterNavigation/FooterNavigation';

export class UploadPhoto extends React.Component {
    state = {
        photo: null,
    }
    uploadPhoto =() => {
        const options = {
            noData: true,
          }
          ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ photo: response })
                const {loadPhoto} =  this.props
                let date = moment().format('DD.MM.YYYY')
              
                function randomizeInteger(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max); 
                    return min + Math.floor((max - min) * Math.random());
                }
                let id = randomizeInteger(100000000000, 999999999999)
                loadPhoto({
                    photo: {
                        uri: response.uri,
                        date: date,
                        id: id
                    }
                })
            }
          })
    }
    render(){
        const { photo } = this.state
        console.log(photo);
        
        return(
            <View>
                <View style ={styles.wrapUploadPhoto}>
                <ScrollView showsVerticalScrollIndicator={false} style ={styles.content}>
                    <TouchableOpacity onPress={this.uploadPhoto}>
                        <Icon name={'image'} style={styles.icon}/>
                    </TouchableOpacity>
                    <Text style={styles.text}>Upload photo...</Text>
                    {photo && (
                        <View style={styles.wrapImage}>
                             <Image
                                source={{ uri: photo.uri }}
                                style={styles.image}
                            />
                        </View>
                       
                    )}
                </ScrollView>
                <FooterNavigation props ={this.props.navigation}/>
            </View>
            </View>
        )
    }
} 

const mapStateToProps = function (state) {
    return {}
}

export default connect(
    mapStateToProps, {loadPhoto}
)(UploadPhoto);

const styles = StyleSheet.create({
    wrapImage: {
        paddingTop: 20,
        paddingBottom: 20
    },
    image: {
        width: '100%',
        height: 300 
    },
    text: {
        fontSize: 50
    },
    icon: {
        fontSize: 200
    },
    wrapUploadPhoto: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        height: '90%',
        paddingLeft: 20,
        paddingRight: 20
    }
})