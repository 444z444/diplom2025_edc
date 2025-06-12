import combination from "./combination.module.css"
import Mini from "./mini_pro_max_ultra/mini/mini"
import Pro from "./mini_pro_max_ultra/pro/pro"
import Max from "./mini_pro_max_ultra/max/max"
import Ultra from "./mini_pro_max_ultra/ultra/ultra"
const Combination = () => {
    return (
        <div className={combination.main}>
            <div className={combination.mini}>
                <Mini />
            </div>
            <div className={combination.pro}>
                <Pro />
            </div>
            <div className={combination.max}>
                <Max />
            </div>
            <div className={combination.ultra}>
                <Ultra />
            </div>
        </div>
    )
}

export default Combination;