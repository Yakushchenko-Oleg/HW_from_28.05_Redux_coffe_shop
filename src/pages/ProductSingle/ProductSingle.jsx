// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { showSimgleProductByIdAction } from './../../store/actions/product';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import star from '../../../images/icons/star.svg'
import delivery from '../../../images/icons/delivery.svg'
import coffeCorn from '../../../images/icons/coffeCorn.svg'
import extraMilk from '../../../images/icons/extraMilk.svg'


const ProductSingle = () => {
    const { productId } = useParams()
    const dispatch = useDispatch()
    dispatch(showSimgleProductByIdAction(productId)) //  При загрузке страницы передаю ID в stpre, там сохраняю отдельно оюъект
    const singleProduct = useSelector(state => state.singleProduct)// Подучаю объект из store
    const navigate = useNavigate()
    console.log(singleProduct);

    return (
        <div className="singleProdict">
            <div className="singleProdict__serch_cont">
                <HiOutlineChevronLeft 
                className="singleProdict__serch_cont__arrow" 
                onClick={()=>navigate(-1)}/>
                <p>Detail</p>
                <CiHeart className="singleProdict__serch_cont__heart"/>
            </div>

            <img src={singleProduct.image} alt="product image" className="singleProdict__image" />
            
            <div className="singleProdict__preview_cont">
                <div className="singleProdict__preview_cont__info_cont">
                    <h3>{singleProduct.title}</h3>
                    <p>Ice/Hot</p>
                    <div className="singleProdict__preview_cont__info_cont__grade">
                        <img src={star} alt="" />
                        <h4>4.8 <span>(230)</span></h4>
                    </div>  
                </div>
                <div className="singleProdict__preview_cont__icons_cont">
                    <img src={delivery} alt="" />
                    <img src={coffeCorn} alt="" />
                    <img src={extraMilk} alt="" />
                </div>
            </div>

            <div className="singleProdict__description">
                <h3 className="singleProdict__description_title">Description</h3>
                <p className="singleProdict__description_par">A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.. <span>Read More</span></p>
            </div>

            <div className="singleProdict__size">
                <h3 className="singleProdict__size_title">Size</h3>
                <div className="singleProdict__size_conteiner">
                    <div className="singleProdict__size_conteiner-item">
                        <p>S</p>
                    </div>
                    <div className="singleProdict__size_conteiner-item active_item">
                        <p>M</p>
                    </div>
                    <div className="singleProdict__size_conteiner-item">
                        <p>L</p>
                    </div>
                </div>
            </div>

            <div className="singleProdict__buy">
                <div className="singleProdict__buy_price_cont">
                    <p>Price</p>
                    <h4>{`$ ${singleProduct.price} `}</h4>
                </div>
                <button className="singleProdict__buy_btn">Buy Now</button>
            </div>
        </div>
    )
}

export default ProductSingle