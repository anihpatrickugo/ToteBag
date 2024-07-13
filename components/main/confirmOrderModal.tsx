import React from 'react';
import {Alert, Modal, StyleSheet, View} from 'react-native';
import ConfirmOrder from "@/assets/icons/ConfirmOrder"
import * as UI from '../common'
import { greyColor } from '@/constants/Colors';

const  ConfirmOrderModal = ({modalVisible, setModalVisible, navigation}) => {
 



  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{marginVertical: 16}}>
               <ConfirmOrder width={40} height={40}/>
            </View>

            <UI.ThemedText size='md' bold style={{marginBottom: 12}}>Thanks for your order!</UI.ThemedText>
            <UI.ThemedText size='sm' style={{marginBottom: 20, textAlign: "center"}} color={greyColor}>
                The order confirmation has been sent to rhanya109@gmail.com</UI.ThemedText>

            

            {/* buttons */}
            <View style={{marginBottom: 6, width: "100%"}}>
               <UI.Button text='Confirm' variant='coloured' onPress={()=>setModalVisible(!modalVisible)}/>
            </View>

          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    width: "90%",
    height: "45%",
    borderRadius: 20,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  radioGroup: { 
    marginBottom: 8,
    justifyContent: 'space-around', 
    borderRadius: 8,  
  }, 
  radioButton: { 
      flexDirection: 'row', 
      alignItems: 'center', 
  }, 

  radioLabel: { 
    marginLeft: 8, 
    fontSize: 16, 
    color: '#333', 
  },

});

export default ConfirmOrderModal;