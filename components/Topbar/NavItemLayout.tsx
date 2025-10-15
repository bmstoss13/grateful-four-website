import NavItem from "./NavItem";

export default function NavItemLayout(){
    return(
        <div className={`flex gap-[12px]`}>
            <NavItem title="Home" linkTo="/"/>
            <NavItem title="About Us" linkTo="/about-us" />
            <NavItem title="Videos" linkTo="/videos" />
            <NavItem title="Contact" linkTo="/contact" />
        </div>
    )
}