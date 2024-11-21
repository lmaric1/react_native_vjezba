import { ScrollView, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.text}>HOME</Text>
      </View>

      {/* Horizontalna linija ispod HOME */}
      <View style={styles.line}></View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.secondImage}
          source={{ uri: 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png' }}
        />
        <Text style={styles.textRight}>Hi, Luka Marić</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={[styles.detailsText, styles.selected]}>Details</Text>
        <Text style={styles.reviewsText}>Reviews</Text>
        <Text style={styles.reviewsText}>Password</Text>
      </View>

      <View style={styles.membersContainer}>
        <Text style={styles.membersText}>Members since</Text>
        <Text style={styles.membersDate}>April, 24 2022</Text>
      </View>

      <View style={styles.emailContainer}>
        <Text style={styles.emailText}>Email address</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value="lmaric1@ffos.hr"
            editable={false}
          />
          <Image
            style={styles.checkIcon}
            source={{ uri: 'https://superiusidea.hr/wp-content/uploads/2014/06/kvacica.png' }}  URL-a za sliku kvačice
          />
        </View>
      </View>

      <View style={styles.phoneContainer}>
        <Text style={styles.phoneText}>Phone number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value="0993307473"
            editable={false}
          />
          <Image
            style={styles.checkIcon}
            source={{ uri: 'https://superiusidea.hr/wp-content/uploads/2014/06/kvacica.png' }}  URL-a za sliku kvačice
          />
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => {  }}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      {/* Crna linija na dnu */}
      <View style={styles.footerLine}></View>

      {/* Navigacijski bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={30} color="black" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="settings" size={30} color="black" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },

  header: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },

  secondImage: {
    height: 100,
    width: 100,
    marginRight: 10,
  },

  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
  },

  textRight: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,  
  },

  detailsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  selected: {
    color: 'black',
  },

  reviewsText: {
    fontSize: 18,
    color: 'gray',
  },

  membersContainer: {
    marginTop: 20,
    marginLeft: 10,
  },

  membersText: {
    fontSize: 16,
    fontWeight: 'normal',
  },

  membersDate: {
    fontSize: 18,
    fontWeight: 'normal',
  },

  emailContainer: {
    marginTop: 20,
    marginLeft: 10,
  },

  emailText: {
    fontSize: 18,
    fontWeight: 'normal',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    position: 'relative',
  },

  input: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: 'black',
    flex: 1,
  },

  checkIcon: {
    width: 20,
    height: 20,
    position: 'absolute', 
    right: 10, 
  },

  phoneContainer: {
    marginTop: 20,
    marginLeft: 10,
  },

  phoneText: {
    fontSize: 18,
    fontWeight: 'normal',
  },

  saveButton: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },

  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Crna linija na dnu
  footerLine: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'black',
    marginTop: 20,
  },

  // Navigacijski bar
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },

  navItem: {
    alignItems: 'center',
  },

  navText: {
    fontSize: 12,
    color: 'black',
  },
});
