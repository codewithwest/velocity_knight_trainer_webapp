import "../../styles/info/More.css";
import "../../styles/Const.css";
import { Link } from "react-router-dom";
import { moreList } from "../../functions/ConstLists";

function FeaturesList( list,arrow) {
    return (
        <ul>
        {list.forEach((e)=>{return(<li>{e}</li>)})}
            
        {list.forEach((el) => {
            return <li>{arrow}{el[0]}</li> 
        })}
      </ul>
    );
  }
export default function More() {
    var arrow = <i class="bi bi-caret-right-fill"></i>
   
    return (
        <div className="more m-auto-hor">
            <h3 className="text-center">Products</h3>
            {FeaturesList(moreList,arrow)}
            <h3 className="text-center">Product Features</h3>
            {MoreInfoCards()}
            {MoreInfoCards()}
            {MoreInfoCards()}
            {MoreInfoCards()}
            {MoreInfoCards()}

        </div>
    )
    function MoreInfoCards() {
        return (
            <div className="more-card">
                <div className="">
                    <h4>Create new session</h4>
                    <p>This will explain the process</p>
                    <a href="">see demo link</a>
                </div>
            </div>
        )
    }
}