import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightblue'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    height: 200,
    width: 150,
    alignItems: 'center',
  },
  cardImg: {
    height: 100,
    alignSelf: 'stretch',
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardHeader: {
    margin: 10,
  },
  cardBody: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexColumn: {
    flexDirection: 'column'
  },
  flexRow: {
    flexDirection: 'row'
  },
  bold: {
    fontWeight: 'bold'
  },
  colorRed: {
    color: 'red'
  },
  colorGray: {
    color: '#999'
  },
  postCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 8
  },
  postBody: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  postDetail: {
    flexWrap: 'wrap',
    marginTop: 5
  },
  avatarIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginBottom: 10
  },
  rowBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
