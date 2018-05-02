import React,{Component} from 'react';
import {Container, Header, Fab, Thumbnail, Spinner, Footer, 
  Button, Content, Text, Icon, Form,Label,Title, Item, Input, Left, Right, 
  View, Body, Card, CardItem, CardSwiper}
from 'native-base';
import {Image} from 'react-native'
import axios from 'axios';
// import {Col, Row, Grid} from 'react-native-easy-grid';

class App extends Component {
  constructor(){
    super();
    this.state={member:[], active:true, };
  }

  componentDidMount(){
    var url='http://api.jakarta.go.id/v1/kota';
    var config = {headers: {'Authorization':'ye4SHHgEcsOzq7ajHGFrMj3oKhQVmJ1iJDgm8ABVRraaMHW/GXSPDooH88JB6pZS'}}
    
    axios.get(url,config).then((ambilData)=>{
      console.log(ambilData.data.data[0]);
      this.setState({
      member: Object.values(ambilData.data.data),
      })
    })
  }
render() {
    // const data1 = this.state.member.map((item, index)=>{
    //   var daftar1 = [item.nama_kota].join(' - ');
    //   return<Text key={index}>{daftar1}</Text>
    // })

    const data1 = this.state.member.map((item,index)=>{
      var daftar1 = item.nama_kota
      return <Text key={index}>{daftar1}</Text>
    })


    // const data2 = this.state.member.map((item, index)=>{
    //   var daftar2 = [item.nama_kecamatan].join(' - ');
    //   return<Text key={index}>{daftar2}</Text>
    // })
    // const data3 = this.state.member.map((item, index)=>{
    //   var daftar3 = [item.nama_kota, item.kode_kota, item.kode_kecamatan, item.nama_kecamatan].join(' - ');
    //   return<Text key={index}>{daftar3}</Text>
    // })
return (
//   <View>
//     {/* <Text>{this.state.member}</Text> */}
//     <Text>ini data:</Text>
//     {data1}
//   </View>
  <Container>
    <Content><Card style={{flex: 0}}>
<CardItem>
<Left>
{/* <Thumbnail source={require('./lin1.png')} /> */}
<Body>
{/* <Text> Lintang Wisesa </Text> */}
{data1}
<Text note> April 10, 2018 </Text>
</Body>
</Left>
</CardItem>
<CardItem>
<Body>
{/* <Text> Barcelona kucinta ♥ </Text> */}
<Image source={require('./gbr/icon1.png')} style={{height: 100, width: 100, alignSelf:'center', margin:20}} />
</Body>
</CardItem>
<CardItem>
<Left>
<Button transparent textStyle={{color: '#87838B'}}>
<Icon name="thumbs-up" />
<Text> 1,926 stars </Text>
</Button>
</Left>
</CardItem>
</Card>
</Content>
  </Container>
  );}}
  export default App;