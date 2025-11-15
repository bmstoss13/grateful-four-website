import NavItem from "./NavItem";

export default function NavItemLayout(){
    return(
        <div className={`flex gap-[12px]`}>
            <NavItem title="Home" linkTo="/" name={null} accentColor="amber-400"/>
            {/* <NavItem title="About" linkTo="/about-us" name={null}/> */}
            <NavItem title="Videos" linkTo="/videos" name={null} accentColor="purple-400"/>
            <NavItem title="Contact" linkTo="/contact" name={null} accentColor="green-400"/>
            <NavItem title="Support" linkTo="/support" name={null} accentColor="yellow-200"/>
        </div>
    )
}