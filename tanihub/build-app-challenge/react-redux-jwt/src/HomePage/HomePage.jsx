import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, cartActions } from '../_actions';


class HomePage extends React.Component {
    handleClick(id){
        this.props.dispatch(cartActions.addToCart(id)); 
    }
    
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users, cart } = this.props;

        let itemList = cart.items.map(item=>{
            return(
                <div class="col-lg-3 col-md-6 mb-4">
                    <div className="card align-items-center" key={item.id}>
                        <div className="view view-cascade overlay">
                            <img className="card-img-top" src={item.img} alt={item.title}/>
                        </div>
                        <div className="card-body">
                            <span className="card-title">{item.title}</span>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                        <div class="card-footer text-center">
                            <button
                                type="button"
                                class="btn btn-primary btn-lg btn-block"
                                onClick={()=>{this.handleClick(item.id)}}>
                                    <i className="fas fa-cart-plus"></i> Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="container">
                <h3 className="center">Product List</h3>
                <div className="box">
                    <div class="row mb-12">                    
                    {itemList}                    
                    </div>                    
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication, cart } = state;
    const { user } = authentication;
    return {
        user,
        users,
        cart
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };