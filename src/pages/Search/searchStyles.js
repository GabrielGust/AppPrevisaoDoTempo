import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',

    backgroundColor: '#E8F0FF',

    alignItems: 'center'
  },

  backButton: {
    marginBottom: 10,
    marginLeft: 15,

    flexDirection: 'row',    
    alignSelf: 'flex-start',
    alignItems: 'center',
  },

  searchBox: {
    width: '90%',
    height: 50,

    flexDirection: 'row',
    alignItems: 'center',
    
    backgroundColor: '#DDDDDD',
    borderRadius: 8
  },

  input: {
    width: '85%',
    height: 50,
    padding: 8,

    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },

  icon: {
    width: '15%',
    height: 50,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#1ED6FF',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },

  header: {
    width: '90%',
    marginTop: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
    
    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: 8    
  },

  date: {
    color: '#FFFFFF',
    fontSize: 16
  },

  city: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

  temp: {
    color: '#FFFFFF',
    fontSize: 90,
    fontWeight: 'bold'
  }
})

export default styles;