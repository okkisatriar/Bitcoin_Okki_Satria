import React, { Component } from 'react';
import './App.css';
import {Link,Route} from 'react-router-dom'
import Tabelharga from './komponen/Tabelharga'
import Konversibit from './komponen/Konversibit'
import Konversirp from './komponen/Konversirp'

class App extends Component {
  render() {
    return (
      <div className='container all' >
        <div className='row'>
				<div className='col-lg-3'>
          <div className='list-group mylist'>
          <Link to ='/tabelharga' className="list-group-item">Tabel Harga Bitcoin </Link>
          <Link to ='/konversirp' className="list-group-item">Konversi Nilai RP ke BitCoin </Link>
          <Link to ='/konversibit' className="list-group-item">Konversi Nilai BitCoin ke Rupiah</Link>
          </div>
           
        </div>

        <div className='col-lg-9'>
          <Route path='/' component={'Home'} />
          <Route path='/tabelharga' component={Tabelharga} />
          <Route path='/konversirp' component={Konversirp} />
          <Route path='/konversibit' component={Konversibit} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
