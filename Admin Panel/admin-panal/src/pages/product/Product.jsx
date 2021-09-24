import './product.css';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey='Sales' title='Sales Performance' grid />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.livemint.com/img/2021/06/15/1600x900/Beats_1623722097232_1623722107893.jpg" alt=""
                            className="productInfoImg" />
                        <span className="productName">Apple Air pods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="publicInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">456</span>
                        </div>
                        <div className="publicInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">4536</span>
                        </div>
                        <div className="publicInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="publicInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <labeL>Product Name</labeL>
                        <input type="text" placeholder="Apple AirPods" />
                        <label>In Stock</label>
                        <select name="inStock" id="Stock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label >Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLT6VfoH5ot2itr1Nc_DgwuSkLqV2haQxMg&usqp=CAU" alt=""
                                className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
