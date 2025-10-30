import NavItem from "./NavItem";
import { navTypes } from "@/utils/Types";

export default function NavItemLayout(){
    return(
        <div className={`flex gap-[12px]`}>
            <NavItem title="Home" linkTo="/" name={null}/>
            <NavItem title="About Us" linkTo="/about-us" name={null}/>
            <NavItem title="Videos" linkTo="/videos" name={null}/>
            <NavItem title="Contact" linkTo="/contact" name={null}/>
        </div>
    )
}