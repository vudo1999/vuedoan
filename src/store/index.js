import Vue from 'vue'
import Vuex from 'vuex'

import {GET_CART, SET_CART, INCREMENT_QTY, DECREMENT_QTY, CART_TOTAL, REMOVE_ITEM} from '../constants/mutation-type';

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        cartItem: [],
        cart_total: 0,
    },
    getters: {
        [GET_CART](state){
            return state.cartItem
        },
        [CART_TOTAL](){
            
        }
    },
    mutations: {
        [SET_CART](state, cartItem){
            state.cartItem = cartItem
        },
        addToCart(state, item){
            Object.assign(item, {qty: 1});
            if(state.cartItem.find(itemCart=>itemCart.id === item.id)){
                alert('San pham da ton tai trong gio hang');
            }else{
                state.cartItem.push(item);
                const vuancut = JSON.stringify(state.cartItem);
                localStorage.setItem('cart', vuancut);
            }
        },
        [INCREMENT_QTY](){

        },
        [DECREMENT_QTY](){
            
        },
        [REMOVE_ITEM](){
            
        },
        
    },
})
export default store;