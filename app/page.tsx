'use client'

import PageFooter from "@/components/Footer/PageFooter";
import HomePageBody from "@/components/Home/Body/HomePageBody";
import MembersContainer from "@/components/Home/Body/Members/MembersContainer";
import ContactButton from "@/components/Home/ContactButton/ContactButton";
import PageHeader from "@/components/PageHeader/PageHeader";

export default function Home() {
	return (
		<div>
			<PageHeader
				title="The Grateful 4 Gospel Quartet"
				backgroundImage="/homeBackground.png"
				isHome={true}
			/>
			<HomePageBody />
			<MembersContainer />
			<PageFooter />
		</div>
	);
}
