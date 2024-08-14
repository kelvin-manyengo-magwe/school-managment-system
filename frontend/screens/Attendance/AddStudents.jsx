import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,TouchableHighlight, Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';



function AddStudents({ setModal }){

    return(
      <View className="w-full h-full bg-white">
          <Text>Add Attendance</Text>


          {/*Add and Close button view*/}
          <View style={styles.bottomButtons}>
                <TouchableHighlight  activeOpacity={0.8} underlayColor={'bg-sky-600'} onPress={() => setModal(false)}>
                      <View style={styles.actualButtons}>
                            <AntDesign name="closecircleo" style={{ color: 'white' }} size={20} />
                            <Text className="font-bold text-white">Close</Text>
                      </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'bg-sky-600'} activeOpacity={0.8} underlayColor={'white'}>
                      <View style={styles.actualButtons}>
                            <AntDesign name="pluscircleo" style={{ color: 'white' }}size={20} />
                            <Text className="font-bold text-white">Add</Text>
                      </View>
                </TouchableHighlight>
          </View>
      </View>
    )
}

export default AddStudents;


const styles= StyleSheet.create({
    bottomButtons: {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      margin: 30
    },
    actualButtons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        marginBottom: 20,
        borderRadius: 16,
        backgroundColor: '#2A65D6',
        padding: 10
    }
});