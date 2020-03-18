import React from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, removeItem } from './actions/indexAction';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// const App = (props) => {
const App = () => {

  const car = useSelector(state => state.car);
  const additionalFeatures = useSelector(state=> state.additionalFeatures);
  const additionalPrice = useSelector(state => state.additionalPrice);
  const dispatch = useDispatch();

  const removeFeature = item => {
    // dispatch an action here to remove an item
    // props.removeItem(item);
    dispatch(removeItem(item));
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    // props.addItem(item)
    dispatch(addItem(item));
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} buyItem={buyItem}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     car: state.car,
//     additionalFeatures: state.additionalFeatures,
//     additionalPrice: state.additionalPrice
//   }
// }

// export default connect(mapStateToProps, { addItem, removeItem })(App);

export default App;
