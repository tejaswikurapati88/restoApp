import './index.css'
import {IoIosRadioButtonOn} from 'react-icons/io'
import {Component} from 'react'
import CartContext from '../../context/CartContext'

class ListDishItem extends Component {
  render() {
    const {dishItemDetails} = this.props
    const {
      dishAvailability,
      dishCalories,
      dishCurrency,
      dishDescription,
      dishId,
      dishImage,
      dishName,
      dishPrice,
      dishType,
      addonCat,
    } = dishItemDetails
    return (
      <CartContext.Consumer>
        {value => {
          const {noOfCartItems, addItems, removeItems} = value
          return (
            <li className="list-dish">
              <div className="list-dish-cont">
                <IoIosRadioButtonOn
                  className={dishType === 1 ? 'non-veg' : 'veg'}
                />
                <div className="item-con">
                  <h1 className="item-name">{dishName}</h1>
                  <p className="item-currency">
                    {dishCurrency} {dishPrice}
                  </p>
                  <p className="item-desc">{dishDescription}</p>
                  {dishAvailability && (
                    <div className="button-cont">
                      <button
                        onClick={removeItems}
                        className="minus-butn"
                        type="button"
                      >
                        -
                      </button>
                      <p className="count">{noOfCartItems}</p>
                      <button
                        onClick={addItems}
                        className="plus-butn"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  )}

                  {addonCat.length >= 1 && (
                    <p className="customization">Customizations available</p>
                  )}
                </div>
                <p className="calories">{dishCalories} calories</p>
                <img src={dishImage} className="dish-img" alt={dishName} />
              </div>
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default ListDishItem
