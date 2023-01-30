import logo from './logo.svg';
import './App.css';
import React,{ Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import posts from './posts.json';

const space = "         ";
class App extends Component {
  state = {
    id : 0,
    campingtent: 10,
    campingchair: 10,
    shirt: 10,
    bag: 10,
    ongcoffee: 10
  }
  async componentDidMount(){
    const result = await axios.get('http://localhost:2565/get_product');
    console.log(result)
    console.log(result.data.length)
    // console.log(result.data[0].name)
    console.log("Show Data")
    for(let i =0; i < result.data.length;i++){
      console.log(result.data[i].Name,result.data[i].CampingTent,result.data[i].CampingChair, result.data[i].Shirt
        , result.data[i].Bag, result.data[i].Ongcoffee)
    }
    // console.log("Data", result.data[0].Bag)
    this.setState({campingtent: result.data[0].CampingTent})
    this.setState({campingchair: result.data[0].CampingChair})
    this.setState({shirt: result.data[0].Shirt})
    this.setState({bag: result.data[0].Bag})
    this.setState({ongcoffee: result.data[0].Ongcoffee})
  }
  async update_product(){
    const result = await axios.patch('http://localhost:2565/update_product');
    console.log(result)
  }
  async buy_product_campingtent () {
    const result = await axios.patch('http://localhost:2565/buy_product/campingtent');
    // const { data } = await axios.patch(`${BASE_URL}/${loc}/${id}`, voteupdate);
    console.log(result)
  };
  async buy_product_campingchair () {
    const result = await axios.patch('http://localhost:2565/buy_product/campingchair');
    // const { data } = await axios.patch(`${BASE_URL}/${loc}/${id}`, voteupdate);
    console.log(result)
  };
  async buy_product_shirt () {
    const result = await axios.patch('http://localhost:2565/buy_product/shirt');
    // const { data } = await axios.patch(`${BASE_URL}/${loc}/${id}`, voteupdate);
    console.log(result)
  };
  async buy_product_bag () {
    const result = await axios.patch('http://localhost:2565/buy_product/bag');
    // const { data } = await axios.patch(`${BASE_URL}/${loc}/${id}`, voteupdate);
    console.log(result)
  };
  async buy_product_ongcoffee () {
    const result = await axios.patch('http://localhost:2565/buy_product/ongcoffee');
    // const { data } = await axios.patch(`${BASE_URL}/${loc}/${id}`, voteupdate);
    console.log(result)
  };
  async get_product () {
    const result = await axios.get('http://localhost:2565/get_product');
    console.log(result)
    console.log(result.data.length)
    // console.log(result.data[0].name)
    console.log("Show Data")
    for(let i =0; i < result.data.length;i++){
      console.log(result.data[i].Name,result.data[i].CampingTent,result.data[i].CampingChair, result.data[i].Shirt
        , result.data[i].Bag, result.data[i].Ongcoffee)
    }
    console.log("Data", result.data[0].Bag)
    // console.log(data.data)
    // this.setState({name: result.data})
    
  };
  async post_product(){
  
    const Product = JSON.stringify({
                      "Id": 0,
                      "Campingtent": 10,
                      "Campingchair": 10,
                      "Shirt": 10,
                      "Bag": 10,
                      "Ongcoffee": 10
    });
    // this.setState(Id, 12);
    
    // console.log(JSON.stringify({ x: 5, y: 6 }));

    const response = await axios.post('http://localhost:2565/post_product', Product);
    console.log(response.data)
    
    // this.setState({ articleId: response.data.id });
  }
  render(){
    const {name} = this.state;
    return <div>
      {/* Hello World {this.state.name} */}
      {name}
      <td>
      <img style={{ width: 250, height: 200 }} src={require('./Campingtent.jpeg')} />
      {' '}
      {this.state.campingtent}
      {' '}
      <button onClick={this.buy_product_campingtent}>
        สั่งซื้อ
      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img style={{ width: 250, height: 200 }} src={require('./Campingchair.jpeg')} />
      {' '}
      {this.state.campingchair}
      {' '}
      <button onClick={this.buy_product_campingchair}>
        สั่งซื้อ
      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img style={{ width: 250, height: 200 }} src={require('./Shirt.jpeg')} />
      {' '}
      {this.state.shirt}
      {' '}
      <button onClick={this.buy_product_shirt}>
        สั่งซื้อ
      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img style={{ width: 250, height: 200 }} src={require('./Bag.jpeg')} />
      {' '}
      {this.state.bag}
      {' '}
      <button onClick={this.buy_product_bag}>
        สั่งซื้อ
      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img style={{ width: 250, height: 200 }} src={require('./Ongcoffee.jpeg')} />
      {' '}
      {this.state.ongcoffee}
      {' '}
      <button onClick={this.buy_product_ongcoffee}>
        สั่งซื้อ
      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </td>
      <button onClick={this.update_product}>
        อัพเดทสินค้า
      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={this.post_product}>
        เพิ่มสินค้า
      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
    </div>
    

  }
}

export default App;
